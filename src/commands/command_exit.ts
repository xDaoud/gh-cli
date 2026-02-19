import { Command, registerCommand } from "./command.js";
const exitCommand: Command = {
    description: "Exit the CLI",
    run: async() => {process.exit(0);},
};
registerCommand("exit", exitCommand);