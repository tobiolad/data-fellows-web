"use client"
import React from "react"
import { PiInstagramLogo, PiLinkedinLogo, PiTwitterLogo } from "react-icons/pi"
import Logo from "@components/Logo"
import Link from "next/link"
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { MailIcon, YoutubeIcon } from "lucide-react"
import CustomButton from "@components/CustomButton"
import { useForm } from "react-hook-form"

function FooterSection({}) {

	const socials = [
		{
			name: "Instagram",
			icon: <PiInstagramLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.instagram.com/data.fellows/",
		},
		{
			name: "LinkedIn",
			icon: <PiLinkedinLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.linkedin.com/company/the-data-fellow/",
		},
		{
			name: "Twitter",
			icon: <PiTwitterLogo className={"w-8 h-8 text-white"} />,
			link: "https://x.com/DatafellowsInfo",
		},
		{
			name: "Youtube",
			icon: <YoutubeIcon className={"w-8 h-8 text-white"} />,
			link: "https://www.youtube.com/@DataFellows",
		},
	]

	const { register, handleSubmit } = useForm()


	function openMail({ message }) {
		console.log(message)
		//window.open(`mailto:oluwatobilobadimeji@gmail.com?subject=Message from Website&body=${message}`)
		parent.location = `mailto:oluwatobilobadimeji@gmail.com?subject=Message from Website&body=${message}`
	}

	return (
		<section className="bg-black w-full h-fit min-h-[50vh] flex flex-col px-16 items-center justify-center">

			<div className="w-full h-full flex flex-col md:flex-row gap-y-24 md:gap-y-4 md:gap-x-4">
				<div className="flex w-full h-full items-center justify-center">
					<Logo className={"w-full h-full"} />
				</div>
				<div className="flex w-full h-full text-white gap-y-4 justify-center  flex-col">
					<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}>Consultation</Link>
					<Link href={"#services"}>Services</Link>
					<Link href={"https://forms.gle/wEpyTRTgnGFM6PWc8"}>Careers (Data Fellow Application)</Link>
					<Link href={"mailto:oluwatobilobadimeji@gmail.com"}>Contact Us</Link>
				</div>
				<div className="flex w-full h-full text-white gap-y-4 justify-center  flex-col">
					<div className={"flex items-center gap-x-4"}>
						<MapPinIcon className={"w-8 h-8 text-white"} />
						<p>Ontario, Canada</p>
					</div>
					<a href={"tel:14378183978"} className={"flex items-center gap-x-4"}>
						<PhoneIcon className={"w-8 h-8 text-white"} />
						<p>+1 (437) 818-3978</p>
					</a>
					<a href={"mailto:oluwatobilobadimeji@gmail.com"} className={"flex items-center gap-x-4"}>
						<MailIcon className={"w-8 h-8 text-white"} />
						<p>oluwatobilobadimeji@gmail.com</p>
					</a>
					<div className={"flex items-center gap-x-4"}>
						<p>Social Media:</p>
						{
							socials.map((social, index) => (
								<a href={social.link}>
									{social.icon}
								</a>
							))
						}
					</div>
				</div>
			</div>

			<form onSubmit={handleSubmit(openMail)}
				  className="bg-gray-500 mt-[5%] my-4 w-full md:w-[80%] rounded-xl h-[10vh] px-4 items-center justify-between relative flex">
				<p className={"font-heading font-bold text-xl"}>Get in Touch</p>
				<input
					{...register("message")}
					placeholder={"Send us a message"}
					className="bg-white rounded-lg mx-4 p-4 w-[80%]" />
				<CustomButton className={"absolute right-[7%] md:right-[4%]"}>Submit</CustomButton>
			</form>
		</section>

	)
}

export default FooterSection
