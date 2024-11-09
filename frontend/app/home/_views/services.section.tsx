import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"
import FeatureIcon1 from "@commons/assets/icons/img_1.png"
import FeatureIcon2 from "@commons/assets/icons/img_2.png"
import FeatureIcon3 from "@commons/assets/icons/img_3.png"
import FeatureIcon4 from "@commons/assets/icons/img_4.png"
import FeatureIcon5 from "@commons/assets/icons/img_5.png"
import FeatureIcon6 from "@commons/assets/icons/img_6.png"
import Marquee from "react-fast-marquee"


function ServicesSection({ className = "" }) {

	const features = [
		{
			title: "Quality Ingredient",
			description: "Our cupcakes are crafted using only the finest ingredients, ensuring each bite is a delicious experience of premium quality and freshness.",
			icon: FeatureIcon1,
		},
		{
			title: "Variety of Flavors",
			description: "With a wide range of flavors to choose from, there's something to satisfy every craving, whether you're in the mood for classic favorites or adventurous new combinations.",
			icon: FeatureIcon2,
		},
		{
			title: "Customization Option",
			description: "Personalize your order with our customizable cupcakes, allowing you to create the perfect treat for any occasion, from birthdays to weddings and everything in between.",
			icon: FeatureIcon3,
		},
		{
			title: "Freshly Baked Daily",
			description: "Our cupcakes are freshly baked every day, guaranteeing you receive a scrumptious treat that's made with love and care, straight from our oven to your doorstep.",
			icon: FeatureIcon4,
		},
		{
			title: "Trusted Reputation",
			description: "With years of experience and a loyal customer base, we have earned a reputation for excellence in baking and customer satisfaction, making us a trusted choice for all your cupcake needs.",
			icon: FeatureIcon5,
		},
		{
			title: "Online Ordering",
			description: "Our user-friendly online ordering system makes it quick and easy to satisfy your cupcake cravings, with hassle-free delivery options available for your convenience.",
			icon: FeatureIcon6,
		},
	]


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


