#!/usr/bin/env bun
import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import type { Message } from "./types.ts";

const model = groq("openai/gpt-oss-120b");
const messages: Message[] = [];

function toSdk(messages: Message[]) {
  return messages.map((m) => {
    if (m.role === "user") {
      return { role: "user" as const, content: m.content };
    }
    return {
      role: "assistant" as const,
      content: m.content.map((b) => b.text).join(""), 
    };
  });
}

async function main() {
  const rl = createInterface({ input: stdin, output: stdout });

  while (true) {
    const line = await rl.question("\nyou> ");
    if (line.trim() === "exit") break;
    if (line.trim() === "") continue;

    messages.push({ role: "user", content: line });

    const result = streamText({ model, messages: toSdk(messages) });

    for await (const delta of result.textStream) {
      process.stdout.write(delta);
    }
    console.log(); 

    const text = await result.text;
    const usage = await result.usage;
    const finishReason = await result.finishReason;

   

    messages.push({
      role: "assistant",
      content: [{ type: "text", text }],
      usage: {
        input: usage.inputTokens ?? 0,
        output: usage.outputTokens ?? 0,
      },
      stopReason: finishReason === "length" ? "length" : "stop",
    });
  }

  rl.close();
}

await main(); 