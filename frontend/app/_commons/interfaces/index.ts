export interface IUser {
	id?: string,
	account_type?: "client" | "talent",
	username?: string,
	full_name?: string,
	skills?: string[],
	bio?: string,
	picture?: string,
	website?: string,
}


