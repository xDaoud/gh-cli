import { createInterface } from "node:readline";
import { commandRegistry } from "./commands/command.js";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "gh > ",
});
export function startREPL() {
    rl.on("line", async (line) => {
        const cleanInput = line.trim().toLowerCase();
        const words = cleanInput.split(" ");
        const commandText = words[0];
        const args = words.slice(1);
        const command = commandRegistry[commandText];
        if(!command){
            console.log("You haven't commanded the CLI");
        } else {
            await command.run(args);
        }
        rl.prompt();
    });
}