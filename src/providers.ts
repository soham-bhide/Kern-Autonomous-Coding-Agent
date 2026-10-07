import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";




const result = generateText({
  model: "openai/gpt-oss-120b",
  prompt: "Make a todo",
  maxOutputTokens: 100,
});