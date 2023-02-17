import { intro } from "@clack/prompts"
import { textSync } from "figlet"
import gradient from "gradient-string"

export const greet = async () => {
	const title = gradient("red", "green", "blue").multiline(
		textSync("Create Zihan Lib", {})
	)
	intro(title)
}
