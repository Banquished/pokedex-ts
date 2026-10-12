import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline';
import { getCommands } from './repl-commands/command_registry.js';

export function cleanInput(input: string): string[] {
	return input
		.trim()
        .toLowerCase()
		.split(/\s+/)
		.filter((item) => item.length > 0);
}

export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on('line', (input) => {
        const cleanedInput = cleanInput(input);

        if (cleanedInput.length === 0) {
            rl.prompt();
            return;
        }

        const commandName = cleanedInput[0];
        const commands = getCommands();

        if (!(commandName in commands)) {
            console.log(`Unknown command: ${commandName}`);
            rl.prompt();
            return;
        }

        commands[commandName].callback(commands);

        rl.prompt();
    })
}