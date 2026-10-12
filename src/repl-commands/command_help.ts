import type { CLICommand } from "./command.js";

export function formatHelpMessage(commands: Record<string, CLICommand>): string {
	let helpMessage = `Welcome to the Pokedex!\nUsage:\n\n`;
	for (const commandName in commands) {
		const command = commands[commandName];
		helpMessage += `- ${command.name}: ${command.description}\n`;
	}
	return helpMessage;
}

export function commandHelp(commands: Record<string, CLICommand>): void {
	const message = formatHelpMessage(commands);
	console.log(message);
}
