"use client"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"
import { twMerge } from "tailwind-merge"
import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "@components/Heading"


function FeedbackSection({ className = "" }) {

	return (
		<div className={twMerge("flex min-h-fit items-center flex-col gap-4 py-12 md:pt-32 relative", className)}>

			<div className="md:px-32 md:text-center">
				<Heading>Satisfied Customers</Heading>
				<p className="mt-4 text-sm leading-8 ">
					Read what our customers have to say about us
				</p>
			</div>

			<img src={"/img/hero-cupcake-2.svg"} alt="Cupcake" className="absolute left-0 top-0 w-[20%]" />


			<FeedbackSlider />

		</div>
	)
}

export default FeedbackSection


export const FeedbackSlider = ({ }) => {


	const feedbackSlideshow = [
		{ comment: "Absolutely divine! The cupcakes from Just Cupcakes are hands down the best I've ever tasted. Each bite is a burst of flavor, and the quality is unmatched. I highly recommend them for any occasion!", name: "John Doe",},
		{ comment: "I ordered cupcakes for my daughter's birthday party from Just Cupcakes, and they were a hit! Not only were they beautifully decorated, but they tasted amazing too. Plus, the ordering process was seamless. Thank you for making her day extra special!", name: "David L." },
		{ comment: "I can't get enough of Just Cupcakes! Not only are they incredibly delicious, but the variety of flavors is impressive. Whether it's a classic vanilla or a unique specialty flavor, I know I'm in for a treat every time.", name: "Alex M." },
		{ comment: "As someone with dietary restrictions, I appreciate that Just Cupcakes offers gluten-free and vegan options. It's rare to find such delicious cupcakes that cater to my dietary needs. Thank you for making treats that everyone can enjoy!", name: "Lisa H." },
		{ comment: "I recently ordered cupcakes for a corporate event, and Just Cupcakes exceeded my expectations. Not only were the cupcakes beautifully presented, but they were also delivered on time and in perfect condition. I received so many compliments from my colleagues. Thank you!", name: "Jessica K." },
		{ comment: "Indulging in Just cupcakes is like taking a delightful trip to cupcake heaven! The flavours are simply exquisite, and the texture is so light and fluffy. It's the ultimate treat for any sweet tooth!", name: "Sophie W." },
		{ comment: "What sets Just Cupcakes apart is their attention to detail and commitment to using high-quality ingredients. You can taste the difference in every bite, and the customer service is exceptional. My go-to for cupcakes!", name: "Sarah T." },
		{ comment: "I've been a loyal customer of Just Cupcakes for years, and they never disappoint. Their cupcakes are consistently fresh, moist, and bursting with flavor. Plus, the team is always friendly and accommodating. I wouldn't go anywhere else!", name: "Michael B." },
		{ comment: "I stumbled upon Just Cakes during a stroll through town, and I must say, it was a delightful discovery! Their cupcakes are a true work of art – beautifully decorated and bursting with flavour. I've become a loyal customer ever since!", name: "Oliver P." },
	]

	// Swiper settings
	const params = {
		modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		loop: true,
		pagination: { clickable: true },
	}

	return (
		<Swiper {...params} className="w-full md:w-[60%] flex py-8 relative" id="feedback-bar">
			<img src={"/img/hero-cupcake-2.svg"} alt="Cupcake" className="absolute left-0 w-[40%]" />

			<div className="swiper-button-prev bg-white  bg-opacity-20 p-10 rounded-full  content-none"></div>
			<div className="swiper-button-next bg-white  bg-opacity-20 p-10 rounded-full content-none" />


			{feedbackSlideshow?.map((item, index) => (
				<SwiperSlide key={index}>
					<div className="w-full mb-8">
						<div className="text-center items-center flex flex-col">
							<p className="dark:text-gray-100 w-[80%] text-md lg:text-xl md:my-4">"{item?.comment}"</p>
							<h4 className="text-primary-dark dark:text-white mt-4"> - {item?.name}</h4>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

