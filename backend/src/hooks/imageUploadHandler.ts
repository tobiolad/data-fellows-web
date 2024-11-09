import axios from "axios"
import { CollectionBeforeChangeHook } from "payload/types"
import fs from "fs"
import FormData from "form-data"
import { makeId } from "../utils"

const imageUploadHandler2: CollectionBeforeChangeHook = async ({ data, req }) => {
	const file = req?.files?.file
	if (file) {
		const formData = new FormData()
		const tempPath = `${__dirname}/../media/${file.name}`
		await file.mv(tempPath)
		formData.append("image", fs.createReadStream(tempPath), makeId(6, { prefix: "image-" }))

		try {
			const { data: response } = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_KEY}`, formData, {
				headers: {
					...formData.getHeaders(),
				},
			})

			console.log(response.data)
			fs.unlinkSync(tempPath)

			data.url = response.data.url
			data.thumbnail = response.data.thumb.url
			data.delete_url = response.data.delete_url
		} catch (error) {
			console.error("Error uploading file to external API:", error)
			throw new Error("File upload failed")
		}
	}
	return data
}

const imageUploadHandler: CollectionBeforeChangeHook = async ({ data, req }) => {
	const file = req?.files?.file
	if (file) {
		const formData = new FormData()
		const tempPath = `${__dirname}/../media/${file.name}`
		await file.mv(tempPath)
		formData.append("source", fs.createReadStream(tempPath), makeId(6, { prefix: "image-" }))

		try {
			const { data: response } = await axios.post(`https://freeimage.host/api/1/upload?key=${process.env.UPLOAD_KEY}`, formData, {
				headers: {
					...formData.getHeaders(),
				},
			})

			console.log(response.image)
			fs.unlinkSync(tempPath)

			data.url = response.image.url
			data.thumbnail = response.image.thumb.url
			data.filename = response.image.filename
		} catch (error) {
			console.error("Error uploading file to external API:", error)
			throw new Error("File upload failed")
		}
	}
	return data
}


export default imageUploadHandler
