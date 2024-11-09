import {CollectionConfig} from 'payload/types'
import ImageCell from "../components/ImageCell"

const Recipes: CollectionConfig = {
    slug: 'recipes',
    timestamps: true,
    admin: {
        defaultColumns: ["image", "name", "description", "created_by"],
    },
    access: {
      read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            required: true,
            relationTo: 'media',
            admin: {
                description: "Image attached to product",
                components: {
                    Cell: ImageCell,
                },
            },
        },
        {
            name: "created_by",
            label: "Created By",
            type: "relationship",
            relationTo: 'users',
            admin: {
                hidden: true,
                readOnly: true,
            },
        },
    ],
    hooks: {
        beforeChange: [
            ({data, req, operation}) => {
                if (operation === 'create') {
                    if (req.user) {
                        data.created_by = req.user.id;
                    }
                }
                return data;
            },
        ],
    },
}

export default Recipes
