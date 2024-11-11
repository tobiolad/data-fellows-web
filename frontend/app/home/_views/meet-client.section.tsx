import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"


function MeetClientSection({ className = "" }) {

	const feedbacks = [
		{
			name: "Mayor James",
			title: "Chief Marketing Officer, Retail Solutions Inc.",
			text: "Data Fellows has been a game-changer for our business. Their insights allowed us to understand our customers' behavior at a granular level, helping us make data-driven decisions that improved our customer retention by 30%. Their team was responsive and proactive throughout the project, ensuring we had everything we needed to succeed",
			image: "/img/users/james.png",
		},
		{
			name: "Jane Smith",
			title: "Operations Manager, Green Earth Logistics",
			text: "Working with Data Fellows has been a revelation. They took our messy, disorganized data and turned it into clear, actionable insights. Thanks to their expertise, we managed to optimize our supply chain, reducing operational costs by 20%. Their attention to detail and commitment to excellence is truly outstanding.",
			image: "/img/users/jane.png",
		},
		{
			name: "John Doe",
			title: "Head of Strategy, Horizon Financial",
			text: "The level of detail and precision that Data Fellows brought to our project was impressive. Their analytics dashboard has become an indispensable tool for our team, giving us real-time updates and helping us stay ahead of market trends. They understood our needs and delivered a solution that far exceeded our expectations.",
			image: "/img/users/john.png",
		},
		{
			name: "Sarah Myke",
			title: "CEO, HealthSync Innovations",
			text: "Data Fellows transformed our approach to data. They provided a comprehensive analysis that revealed new revenue opportunities we hadn't considered before. The team was knowledgeable, professional, and always willing to go the extra mile. We highly recommend them to any business looking to leverage data to its fullest potential.",
			image: "/img/users/john.png",
		},
	]

	return (
		<div id="#download"
			 className={twMerge("w-full flex flex-col px-[5%] items-center justify-center", className)}>

			<Heading className={"md:text-6xl text-primary"}>Meet Some of Our Clients</Heading>
			<p className="mt-2">Hear what our satisfied users have to say about Data Fellows</p>

			<div className="w-full mt-[5%]">
				<Heading className={"md:text-4xl"}>What Customers Say</Heading>
				<p className="mt-2">Read testimonials from our customers</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-y-12 md:gap-3 my-[5%] items-center w-full h-full">

				{feedbacks.map((feedback, index) => (
					<div key={index} className="flex flex-col gap-y-4 px-4 my-4">
						<img src={"/img/stars.png"} className="w-36" />
						<p className="text-sm">
							{feedback.text}
						</p>
						<div className="flex">
							<img src={feedback.image} className="w-12 aspect-square" />
							<div className="flex flex-col mx-2">
								<p className="">{feedback.name}</p>
								<p className="text-xs text-slate-700">{feedback.title}</p>
							</div>
						</div>
					</div>
				))}


			</div>


			<Heading className={"lg:text-4xl mt-[5%]"}>"Trusted by businesses looking to transform their data into actionable
				insights."</Heading>

			<img src={"/img/trusted-by.png"} className="w-full my-[5%]" />

		</div>
	)
}

export default MeetClientSection



