// ImageCell.tsx
import React, { useEffect, useState } from "react"
import { CellComponentProps } from "payload/types"

const ImageCell: React.FC<CellComponentProps> = ({ collection, rowData }) => {
	//if (!data) return null

	const [imageUrl, setImageUrl] = useState<string | null>(null)

	useEffect(() => {
		console.log(rowData?.image)
		if (!rowData.image) return
		fetch(`/api/media/${rowData.image}`)
			.then((res) => res.json())
			.then((data) => {
				setImageUrl(data.thumbnail)
			})
			.catch(console.error)

	}, [rowData])

	if (!imageUrl) return null

	return (
		<img
			src={imageUrl}
			alt="Product Image"
			style={{ width: "100px", height: "auto" }}
		/>
	)
}

export default ImageCell
