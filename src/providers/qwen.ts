import {groq} from "@ai-sdk/groq";
import { streamText } from "ai";

async function streamModel(prompt:string):Promise<void>{
    const answer = streamText({
        model:groq("qwen/qwen3.8-27b"),
        temperature:0,
        prompt:prompt,
        maxOutputTokens:300
    })
    for await(const chunk of answer.textStream){
    process.stdout.write(chunk)
}
    process.stdout.write("\n")
}


export {streamModel}