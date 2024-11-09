import Heading from "@components/Heading"
import Link from "next/link"
import { MailIcon, MapPin } from "lucide-react"
import { twMerge } from "tailwind-merge"


const GetInTouchSection = ({ className = "" }) => {
	return (
		<div id={"contact"}
			 className={twMerge("w-full gap-8 bg-primary-light dark:bg-primary-dark rounded-2xl md:items-center md:justify-center py-8 md:py-0 min-h-[50vh] flex flex-col relative overflow-clip", className)}>

			<Heading className="text-primary-dark dark:text-white dark:text-white">Contact Us</Heading>

			<div className="flex flex-col md:items-center md:justify-center md:text-center  dark:text-gray-300">
				Feel free to reach out to us for any further inquiries.
			</div>


			<img src="/img/map-accent.png" alt="FAQs" className="absolute right-0 top-[20%] bottom-0 w-[400px]" />


			<div className="w-full flex my-8 flex-col md:flex-row gap-4 md:items-center md:justify-center">


				<Link className={"flex flex-col w-full justify-center my-8 md:my-0 md:items-center"}
					  href={"mailto:sales@justcupcakes.uk"}>
					<MailIcon size={36} className="text-primary-dark dark:text-white w-12 mb-4" />
					<p>Email</p>
					<p>Send us an email</p>
					<p>sales@justcupcakes.uk</p>
				</Link>

				<Link className={"flex flex-col w-full justify-center my-8 md:my-0 md:items-center"} href={"tel:+447904792381"}>
					<MailIcon size={36} className="text-primary-dark dark:text-white w-12 mb-4" />
					<p>Phone</p>
					<p>Call us anytime</p>
					<p>+44 7904 792381</p>
				</Link>

				<Link className={"flex flex-col w-full justify-center my-8 md:my-0 md:items-center"} href={"tel:+447904792381"}>
					<MapPin size={36} className="text-primary-dark dark:text-white w-12 mb-4" />
					<p>Location</p>
					<p>Pield Heath road Uxbridge </p>
					<p>Hillingdon, London, UK</p>
				</Link>
			</div>


			<div className="w-full flex items-center justify-center">
				<iframe
					src="https://maps.google.com/maps?q=Pied%20Heath%20Rd&t=&z=13&ie=UTF8&iwloc=&output=embed"
					width="600" height="450" style={{ border: 0, borderRadius: 12 }} allowFullScreen loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
				<br /><br /><br /><br />
			</div>


		</div>
	)
}

export default GetInTouchSection
