import { CollectionConfig } from "payload/types"
import ImageCell from "../components/ImageCell"

const Products: CollectionConfig = {
	slug: "products",
	timestamps: true,
	access: {
		read: () => true,
	},
	admin: {
		defaultColumns: ["image", "name", "price", "description", "created_by"],
	},
	fields: [
		{
			name: "image",
			label: "Image",
			type: "upload",
			relationTo: "media",
			admin: {
				description: "Image attached to product",
				components: {
					Cell: ImageCell,
				},
			},
		},
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "price",
			label: "Price (£)",
			type: "number",
			required: true,
		},
		{
			name: "description",
			label: "Description",
			type: "textarea",
		},
		{
			name: "created_by",
			label: "Created By",
			type: "relationship",
			relationTo: "users",
			admin: {
				readOnly: true,
				hidden: true,
			},
		},

	],
	hooks: {
		beforeChange: [
			({ data, req, operation }) => {
				if (operation === "create") {
					if (req.user) {
						data.created_by = req.user.id
					}
				}
				return data
			},
		],
	},
}

export default Products
