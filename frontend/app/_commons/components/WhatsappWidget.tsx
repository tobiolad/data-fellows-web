import { Whatsapp } from "iconsax-react"
import Link from "next/link"

function WhatsappWidget({}) {
	return (
		<Link href={"https://wa.me/2348162801298"} className="z-[1000] bg-green-600 rounded-full w-fit p-3 cursor-pointer items-center justify-center flex flex-col right-[3%] bottom-[3%] fixed">
			<Whatsapp variant={"Bulk"} className="w-10 h-10 text-white" />
		</Link>
	);
}

//@ts-ignore
export default WhatsappWidget;
