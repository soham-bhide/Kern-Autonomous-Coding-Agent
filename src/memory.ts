import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";
import type { Message } from "./types.ts"; 

const model = groq("openai/gpt-oss-120b");
const messages: Message[] = [];

async function ask(text: string) {
  messages.push({ role: "user", content: text });

  const result = await generateText({ model, messages });

  console.log("usage:", result.usage, "finishReason:", result.finishReason);

  const reply = result.text;

 
  messages.push({
    role: "assistant",
    content: [{ type: "text", text: reply }],
    usage: {
      input: result.usage.inputTokens ?? 0,   
      output: result.usage.outputTokens ?? 0, 
    },
    stopReason: result.finishReason === "length" ? "length" : "stop",
  });

  return reply;
}

console.log(await ask("My name is john"));
console.log(await ask("what is my name"));