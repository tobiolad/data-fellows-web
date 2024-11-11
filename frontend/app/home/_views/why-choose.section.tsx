import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"
import Image from "next/image"
import FeatureIcon1 from "@assets/icons/img_1.png"
import FeatureIcon2 from "@assets/icons/img_2.png"
import FeatureIcon3 from "@assets/icons/img_3.png"
import FeatureIcon4 from "@assets/icons/img_4.png"


function MeetClientSection({ className = "" }) {

	const features = [
		{
			title: "Affordable",
			description: "Cost-effective solutions tailored for small businesses.",
			icon: FeatureIcon1,
		},
		{
			title: "Simple",
			description: "Designed to be user-friendly and easy to understand.",
			icon: FeatureIcon2,
		},
		{
			title: "Reliable Network of Experts",
			description: "Over 600 trusted, vetted, and reliable data professionals.",
			icon: FeatureIcon3,
		},
		{
			title: "Eliminates the Need for Technical Expertise",
			description: "We handle the complexity, so you don’t have to.",
			icon: FeatureIcon4,
		},
	]

	return (
		<div id="why"
			 className={twMerge("w-full flex flex-col px-[5%] items-center justify-center", className)}>

			<Heading className={"md:text-6xl text-primary"}>Why Choose Us</Heading>
			<p className="mt-2">Hear what features we offer</p>

			<div id="#download" className={`w-screen aspect-[6/3] my-[5%] relative`}>


				<div
					style={{
						//add black overlay to image
						backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/code-mask.png')`,
					}}
					className="bg-cover bg-center w-full h-full grid grid-cols-1 md:grid-cols-2 py-8">
					{features.map((feature, index) => <FeatureItem key={index} feature={feature} />)}
				</div>


			</div>
		</div>
	)
}

export default MeetClientSection


const FeatureItem = ({ feature }) => {
	return (
		<div className="w-full p-8 rounded-lg md:items-center flex flex-col">
			<dt className="flex flex-col gap-y-6 md:items-center  text-base font-semibold leading-7 text-white">
				<Image src={feature.icon} className={"w-16"} alt={""} />

				<p className="text-2xl md:text-center text-white">
					{feature.title}
				</p>
			</dt>

			<p className="mt-2 text-white md:text-center leading-7 text-sm">{feature.description}</p>
		</div>
	)
}

