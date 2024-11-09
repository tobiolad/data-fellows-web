import { CollectionConfig } from "payload/types"
import imageUploadHandler from "../hooks/imageUploadHandler"

const Media: CollectionConfig = {
	slug: "media",
	upload: {
		staticURL: "https://iili.io",
		staticDir: "media",
		disableLocalStorage: true,
		adminThumbnail: ({ doc }) => doc.thumbnail as string,
		imageSizes: [],
		mimeTypes: ["image/*"],
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
		{
			name: "thumbnail",
			type: "text",
			admin: {
				hidden: true

			}
		},
		{
			name: "url",
			type: "text",
			admin: {
				hidden: true

			}
		},

	],
	hooks: {
		beforeChange: [imageUploadHandler],
	},
}

export default Media
