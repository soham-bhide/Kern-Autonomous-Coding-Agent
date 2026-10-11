import {groq} from "@ai-sdk/groq";
import { streamText } from "ai";

async function  askGroq(prompt:string){
    const answer = streamText({
        model: groq("openai/gpt-oss-120b"),
        prompt,
        temperature:0,
        maxOutputTokens:300,
    })

    for await(const chunk of answer.textStream){
        process.stdout.write(chunk)
    }
}
askGroq("create a function that takes a string and returns the reverse of the string in TypeScript")