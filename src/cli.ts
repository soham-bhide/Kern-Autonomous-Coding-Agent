import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

export async function startCLI() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  while (true) {
    const input = await rl.question("> ");

    if (input === "/exit") {
      break;
    }

    console.log("Prompt:", input);
  }

  rl.close();
}