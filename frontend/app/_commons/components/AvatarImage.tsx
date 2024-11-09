import { twMerge } from "tailwind-merge"
import DefaultImage from "@app/_commons/assets/images/user-placeholder-image.png"
import Image from "next/image"

type Props = {
	className?: string
	src?: string
	alt?: string
	online?: boolean

}

const AvatarImage = ({ className, online, src, alt }: Props) => {
	return (
		<div className={"relative"}>
			<Image
				src={src ?? DefaultImage}
				className={twMerge("aspect-square w-16 rounded-full bg-primary", className)}
				alt={alt ?? "profile-image"}
			/>
			{online && (
				<div
					className="border-primary-dark-alt absolute -bottom-[5%] right-0 aspect-square w-3 rounded-full border bg-[#16D313FF]"></div>
			)}
		</div>
	)
}

export default AvatarImage
