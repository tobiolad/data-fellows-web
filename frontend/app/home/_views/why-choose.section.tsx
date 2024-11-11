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
		}
	]

	return (
		<div id="#download"
			 className={twMerge("w-full flex flex-col px-[5%] items-center justify-center", className)}>

			<Heading className={"md:text-6xl text-primary"}>Why Choose Us</Heading>
			<p className="mt-2">Hear what features we offer</p>

			<div id="#download" className={`w-screen aspect-[6/3] my-[5%] relative`}>

				<div className="bg-black/80 absolute w-full h-full" />
				<img src="/img/code-mask.png" className="inset-0 right-0 w-screen aspect-[4/5] md:aspect-[6/3]" alt="cta2-bg" />

				<div
					className="absolute z-50 w-full flex flex-col items-center justify-center top-0 bottom-0  left-0 right-0">

					<div className="w-full grid grid-cols-1 md:grid-cols-2">
						{features.map((feature, index) => <FeatureItem key={index} feature={feature} />)}
					</div>

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

