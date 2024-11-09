export const makeSlug = (value: string, options: {
	uppercase: boolean
} = { uppercase: false }) => {
	const slug_value = value.trim().replace(" ", "_")
	return options?.uppercase ? slug_value?.toUpperCase() : slug_value?.toLowerCase()
}
export function makeId(length: number, options?: { upperCase?: boolean, prefix?: string, numeric?: boolean }) {


	let result = options?.prefix ?? ""
	const characters = options?.numeric ? "0123456789" : options?.upperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "abcdefghijklmnopqrstuvwxyz0123456789"
	const charactersLength = characters.length
	let counter = 0
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
		counter += 1
	}
	return result
}
