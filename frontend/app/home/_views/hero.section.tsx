"use client"
import "swiper/css/effect-fade"
import { twMerge } from "tailwind-merge"
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Autoplay, Scrollbar, EffectFade, EffectCreative } from "swiper/modules"
import { Typewriter } from "react-simple-typewriter"


function HeroSection({ className = "" }) {

	const images = [
		"/img/hero-slider/img.png",
		"/img/hero-slider/img_1.png",
		"/img/hero-slider/img_2.png",
		"/img/hero-slider/img_3.png",
		"/img/hero-slider/img_4.png",
	]


	const params = {
		modules: [ Autoplay, EffectFade],
		spaceBetween: 0,
		navigation: {
			nextEl: ".swipeNxtBtn",
			prevEl: ".swipePrevBtn",
		},
		effect: "fade",
		autoplay: true,
		slidesPerView: 1,
		loop: true,
		pagination: false,
	}


	return (
		<div
			className={twMerge("h-[80vh] top-0 w-screen relative", className)}>

			<Swiper {...params} className="w-screen h-screen flex items-center justify-center">
				{images?.map((image, index) => (
					<SwiperSlide className={"w-full h-screen"} key={index}>
						<img src={image} alt="Cupcake" className="" />

					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex absolute top-0 w-screen h-full z-20 items-center justify-center">
				<h1 className="font-heading text-white font-extrabold text-7xl w-[60%] text-center">
					Affordable <br />
					Data Analytics Solutions <br />
					<div className={"mt-3"}>
						for{" "}
						<span
							className="bg-[#FFD900] px-2 pb-4 text-black rounded-2xl inline-flex justify-center items-center">
						<Typewriter
							words={["Small Businesses", "Startups", "Enterprises"]}
							loop={15}
							cursor
							cursorStyle="_"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
					</div>
				</h1>
			</div>


		</div>

	)
}

export default HeroSection

