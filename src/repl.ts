// Create a shell of a function called `cleanInput` that takes a string and returns an array of strings.
export function cleanInput(input: string): string[] {
	return input
		.trim()
        .toLowerCase()
		.split(/\s+/)
		.filter((item) => item.length > 0);
}
