import { startREPL } from "./repl.js";
import "./commands/command_exit"
function main(){
    console.log("Hello, world!");
    startREPL()
}
main();