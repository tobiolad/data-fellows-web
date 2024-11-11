import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"
import CustomButton from "@components/CustomButton"
import Link from "next/link"


function PricingSection({ className = "" }) {
	const plans = [
		{
			price: "$50/mth",
			title: "Entry plan",
			description: "Ideal for small businesses",
			features: [
				"Single industry-specific dashboard.",
				"Basic monthly data reports.",
				"No consulting support.",
			],
		},
		{
			price: "$150/mth",
			title: "Mid-Tier plan",
			description: "Growing teams up to 20 users.",
			features: [
				"3 customized dashboards covering different business areas (e.g., sales, operations).",
				"Monthly performance updates.",
				"One-on-one consulting session with data experts.",
			],
		},
		{
			price: "$300/mth",
			title: "Premium plan",
			description: "Large teams with unlimited users.",
			features: [
				"Full-service analytics and multiple dashboards with Machine Learning/AI integration and predictive analytics.",
				"Custom solutions and real-time data insights.",
				"Comprehensive quarterly business reviews and continuous consulting support.",
			],
		},
	]

	return (
		<div id="#download"
			 className={twMerge("w-full flex flex-col px-[5%] items-center justify-center", className)}>

			<p className="mt-2 text-gray-500">Discover</p>
			<Heading className={"md:text-6xl text-primary"}>Pricing Options</Heading>
			<p className="mt-2">Choose a plan that suits your needs</p>

			<div className="flex flex-col md:flex-row mt-[10%] justify-between gap-8">
				{plans.map((plan, index) => (
					<div key={index} className="bg-white border border-gray-200 p-6 rounded-lg justify-between flex flex-col shadow-md w-full md:w-1/3 ">
						<div className="flex flex-col">
							<h2 className="text-4xl font-bold text-gray-800 text-center">{plan.price}</h2>
							<h3 className="text-xl font-medium mt-2 text-center">{plan.title}</h3>
							<p className="text-gray-500 mt-1 text-center">{plan.description}</p>
							<ul className="mt-4 mb-6">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="text-gray-700 flex mb-2">
										<span className="text-green-500 mr-2">✓</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
						<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}>
							<CustomButton className="bg-primary text-white w-full">Get Started</CustomButton>
						</Link>
					</div>
				))}
			</div>

		</div>
	)
}

export default PricingSection



