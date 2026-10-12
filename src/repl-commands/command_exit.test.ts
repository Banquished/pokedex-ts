import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { commandExit } from "./command_exit.js";

describe("commandExit", () => {
    let exitSpy = vi.spyOn(process, "exit");
    let logSpy = vi.spyOn(console, "log");

    beforeEach(() => {
        exitSpy = vi.spyOn(process, "exit").mockImplementation((code?: string | number | null | undefined) => {
            return undefined as never;
        });

        logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        exitSpy.mockRestore();
        logSpy.mockRestore();
    });

    it('should log the exit message and exit the process with code 0', () => {
        commandExit();

        expect(logSpy).toHaveBeenCalledWith(`Closing the Pokedex... Goodbye!`);
        expect(exitSpy).toHaveBeenCalledWith(0);
    });
});
