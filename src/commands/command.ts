export type Command = {
    description: string,
    run: (args: string[]) => Promise<void> | void;
}

export const commandRegistry: Record<string, Command> = {};

export function registerCommand(name: string, command: Command){
    commandRegistry[name] = command;
}
