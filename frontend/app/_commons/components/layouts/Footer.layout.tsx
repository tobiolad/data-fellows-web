import React from "react"
import FooterForm from "@app/home/_components/FooterForm"
import FooterShape from "@assets/images/footer-bg.svg"
import { PiFacebookLogo, PiInstagramLogo, PiSnapchatLogo, PiTiktokLogo } from "react-icons/pi"

function FooterSection({}) {

	const socials = [
		{
			name: "Instagram",
			icon: <PiInstagramLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.instagram.com/justcupcakes.uk?igsh=MWhpcWc5NzBwM2wzMw==",
		},
		{
			name: "Facebook",
			icon: <PiFacebookLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.facebook.com/profile.php?id=61551746283933",
		},
		{
			name: "Snapchat",
			icon: <PiSnapchatLogo className={"w-8 h-8 text-white"} />,
			link: "https://t.snapchat.com/QdmD848e",
		},
		{
			name: "TikTok",
			icon: <PiTiktokLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.tiktok.com/@justcupcakes.uk",
		},
	]

	return (
		<section className="bg-black w-full h-[50vh] flex">

helllo

		</section>

	)
}

export default FooterSection
