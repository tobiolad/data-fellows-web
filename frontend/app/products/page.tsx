"use client"

import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Heading from "@components/Heading"
import { twMerge } from "tailwind-merge"
import FeedbackSection from "@app/home/_views/feedback.section"
import { useQuery } from "@tanstack/react-query"
import { api } from "@utils/axiosProvider"
import { useEffect } from "react"


export default function ProductsPage() {

	const images = [
		"lemon", "caramel", "carrot", "chocolate", "red velvet", "vanilla", "coconut",
	]

	const title = [
		{
			main: "Justcupcakes<br/><span class='text-secondary'>Just for you</span>",
			sub: "Welcome to our delightful world of irresistibly delicious cupcakes.",
		},
		{
			main: "Indulge in Sweetness<br/>Satisfy your cravings",
			sub: "Indulge in our delectable cupcakes made with love and the finest ingredients.",
		},
		{
			main: "Delicious Cupcakes<br/>Delivered Right to You",
			sub: "Get delicious cupcakes delivered right to your door steps.",
		},
		{
			main: "Every cupcake tells a story<br/>Ours is of Passion, Creativity & Love",
			sub: "Let join you tell your story of love with passion and creativity.",
		},
	]


	const params = {
		modules: [Scrollbar, A11y, Autoplay],
		spaceBetween: 10,
		autoplay: true,
		slidesPerView: 1,
		loop: true,
		pagination: false,
	}

	return (
		<main className="h-full w-full flex flex-col">

			<div className="w-full flex-col flex px-12 md:px-32 gap-y-8  items-center">
				<Swiper {...params} className="w-full mt-8 flex py-8 relative">
					{title?.map((item, index) => (
						<SwiperSlide key={index}>
							<div className="flex flex-col items-center">
								<h1 dangerouslySetInnerHTML={{ __html: item?.main }}
									className="text-7xl lg:text-[5.5em] text-center md:max-w-4xl my-4 font-flavors text-white" />
								<p className={"text-lg w-[70%] text-center dark:text-gray-300"}>
									Indulge your taste buds and explore a world of flavors of our cupcakes.
								</p>

							</div>
						</SwiperSlide>
					))}
				</Swiper>


				<CakesSlider items={images} />

				<div className="md:px-32 flex flex-col items-center md:text-center">
					<Heading>Explore Varieties</Heading>
					<h2 className="mt-2  dark:text-gray-300 ">
						This are some of the varieties of flavors we have.
					</h2>
				</div>

				<ProductsGrid className={"my-8"} />
			</div>


			<FeedbackSection className={"w-full"} />


		</main>
	)
}


const CakesSlider = ({ items = [] }) => {
	// Swiper settings
	const params = {

		modules: [Navigation, Scrollbar, A11y, Autoplay],
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		grabCursor: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		loop: true,
		pagination: {},
	}

	return (
		<Swiper {...params} className="items-center justify-center w-[75%] flex py-8 relative" id="feedback-bar">
			<img src={"/img/hero-cupcake-2.svg"} alt="Cupcake" className="absolute left-0 w-[40%]" />

			<div className="swiper-button-prev bg-white  bg-opacity-20 p-10 rounded-full  content-none"></div>
			<div className="swiper-button-next bg-white  bg-opacity-20 p-10 rounded-full content-none" />


			{items.map((item, index) => (
				<SwiperSlide key={index}>
					<img alt={item} src={`/img/products/carousel/${item}.png`} className="w-full" />
				</SwiperSlide>
			))}
		</Swiper>
	)
}


const ProductsGrid = ({ className = "" }) => {

	const cakes = [
		{
			name: "Lemon",
			image: "lemon",
			details: "Tangy and refreshing, our lemon cupcake is a citrusy delight, infused with zesty lemon flavor and topped with a luscious lemon frosting. Perfect for those who crave a burst of brightness in every bite.",
			link: "#",
		},
		{
			name: "Red Velvet",
			image: "velvet",
			details: "Delight in the allure of our red velvet cupcake, boasting a velvety smooth texture and a subtle cocoa flavor, topped with a decadent cream cheese frosting. A timeless classic that never fails to impress.",
			link: "#",
		},
		{
			name: "Vanilla",
			image: "vanilla",
			details: "Savour the simplicity of our vanilla cupcake, featuring a delicate vanilla-flavored cake topped with fluffy vanilla frosting and a touch of sprinkles. A timeless favourite that's sure to please every palate.",
			link: "#",
		},
		{
			name: "Chocolate",
			image: "chocolate",
			details: "Indulge your chocolate cravings with our rich and indulgent chocolate cupcake, featuring a moist chocolate cake base topped with velvety chocolate frosting and a sprinkle of chocolate shavings. A chocolate lover's dream come true.",
			link: "#",
		},
		{
			name: "Caramel",
			image: "caramel",
			details: "Indulge in decadence with our caramel cupcake, featuring a moist and fluffy cake base infused with rich caramel flavor, complemented by a creamy caramel frosting and a drizzle of caramel sauce. A sweet symphony of caramel goodness.",
			link: "#",
		},
		{
			name: "Coconut",
			image: "coconut",
			details: "Transport yourself to a tropical paradise with our coconut cupcake, featuring a delicate coconut-infused cake topped with fluffy coconut frosting and a sprinkle of toasted coconut flakes. A taste of island bliss in every bite.",
			link: "#",
		},
		{
			name: "Carrot",
			image: "carrot",
			details: "Experience classic comfort with our carrot cupcake, made with moist carrot cake studded with raisins and walnuts, topped with a creamy cream cheese frosting. A wholesome treat that's perfect for any occasion.",
			link: "#",
			width: "w-full md:w-[97%]",
		},

	]

	const { data = [] } = useQuery({
		queryFn: () => api.get("/recipes?limit=50"),
		queryKey: ["products"],
		select: (data) => data.docs,
	})

	return (
		<div className={twMerge("w-full flex flex-wrap justify-center gap-4", className)}>
			{
				data?.map((item, index) => (
					<div key={index}
						 style={{ backgroundImage: `url(${item?.image?.url})` }}
						 className={`${item?.width ? item?.width : " w-full md:w-[48%]"} group bg-center bg-cover items-center h-[40vh] bg-gray-500 rounded-lg flex relative overflow-clip`}>

						<p className="left-0 p-4 w-full top-0 absolute font-semibold text-2xl text-white">
							{item?.name}
						</p>

						<div
							className="text-white translate-y-[100%] min-h-[50%] group-hover:translate-y-0 transition duration-500 bg-black bg-opacity-50 p-4 rounded-lg w-full bottom-0 absolute">
							{item?.description}
						</div>

					</div>
				))
			}


		</div>

	)

}
