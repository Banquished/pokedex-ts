import { describe, expect, test } from "vitest";
import type { CLICommand } from "./command.js";
import { formatHelpMessage } from "./command_help.js";

describe("formatHelpMessage()", () => {
	test("formats an empty list of commands correctly", () => {
		const mockRegistry: Record<string, CLICommand> = {};
		const result = formatHelpMessage(mockRegistry);

		expect(result).toContain("Welcome to the Pokedex!");
		expect(result).toContain("Usage:");
	});

	test("formats a list of commands with name and description correctly", () => {
		const mockRegistry: Record<string, CLICommand> = {
			exit: {
				name: "exit",
				description: "Exits the Pokedex",
				callback: () => {},
			},
			catch: {
				name: "catch",
				description: "Catches a Pokemon",
				callback: () => {},
			},
		};

		const result = formatHelpMessage(mockRegistry);

		expect(result).toContain("exit");
		expect(result).toContain("catch");
		expect(result).toContain("Exits the Pokedex");
		expect(result).toContain("Catches a Pokemon");
	});
});
