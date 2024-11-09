import path from "path"

import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"
import { buildConfig } from "payload/config"


import Users from "./collections/Users"
import Media from "./collections/Media"
import { viteBundler } from "@payloadcms/bundler-vite"
import Logo from "./components/Logo"
import Icon from "./components/Icon"

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: viteBundler(),
		components: {
			graphics: {
				Logo,
				Icon,
			},
		},
		meta: {
			titleSuffix: " - Data Fellows",
		},
	},
	cors: ["*", "http://localhost:4000", "https://www.datafellows.tech"],
	editor: slateEditor({}),
	collections: [Users, Media],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [],
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
	upload: {
		limits: {
			fileSize: 5000000, // 5MB, written in bytes
		},
	},
})
