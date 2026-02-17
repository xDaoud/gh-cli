import readline from "node:readline"
import {type Interface} from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "gh > ",
});

rl.prompt();
rl.on("line", async (line) => {
    const cleanInput = line.trim().toLowerCase();
    const words = cleanInput.split(" ");
    const command = words[0];
    const args = words.slice(1);
    console.log("Command: ", command);
    console.log("Args", args);
    rl.prompt();
}).on("exit", ()=>{
    console.log("Goodbye!");
    process.exit(0);
});