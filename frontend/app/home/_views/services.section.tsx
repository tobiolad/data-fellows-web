import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"
import Marquee from "react-fast-marquee"


function ServicesSection({ className = "" }) {

	const slides = [
		"/img/marquee-slider/mslide-1.png",
		"/img/marquee-slider/mslide-2.png",
		"/img/marquee-slider/mslide-3.png",
		"/img/marquee-slider/mslide-4.png",
		"/img/marquee-slider/mslide-5.png",
	]

	return (
		<div id="services" className={twMerge("flex flex-col mt-[15%] justify-centeritems-center", className)}>
			<div className="flex flex-col items-center">
				<Heading className={"text-primary"}>Services We Offer</Heading>
				<h2 className="text-3xl w-[60%] text-center text-primary-dark dark:text-white my-[5%] leading-normal">
					"At Data Fellows, we specialize in
					<span
						className={"text-primary font-bold mx-2"}>crafting affordable, effective data solutions</span>
					tailored for small business needs."
				</h2>

			</div>

			<img src={"/img/hero-cupcake-3.svg"} alt="Cupcake"
				 className="absolute right-0 -top-[20%] w-[35%]" />


			<div className={"hidden flex-col md:flex"}>
				<Marquee
					autoFill
				>
					{slides.map((image, index) => (
						<img className={"rounded-[50px] w-[30vw] mx-4"} src={image} alt="slide" />
					))}
				</Marquee>
				<Marquee
					className={"my-4"}
					direction={"right"}
					autoFill
				>
					{slides.map((image, index) => (
						<img className={"rounded-[50px] w-[30vw] mx-4"} src={image} alt="slide" />
					))}
				</Marquee>
			</div>

		</div>
	)
}

export default ServicesSection


