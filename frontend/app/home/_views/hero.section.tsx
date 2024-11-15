"use client"
import "swiper/css/effect-fade"
import { twMerge } from "tailwind-merge"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Typewriter } from "react-simple-typewriter"
import Link from "next/link"
import CustomButton from "@components/CustomButton"


function HeroSection({ className = "" }) {

	const images = [
		"/img/hero-slider/img.png",
		"/img/hero-slider/img_1.png",
		"/img/hero-slider/img_2.png",
		"/img/hero-slider/img_3.png",
		"/img/hero-slider/img_4.png",
	]


	const params = {
		modules: [Autoplay, EffectFade],
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
			className={twMerge("h-[90vh] top-0 w-screen relative", className)}>

			<Swiper {...params} className="w-screen h-screen flex items-center justify-center">
				{images?.map((image, index) => (
					<SwiperSlide className={"w-full h-screen"} key={index}>
						<div
							style={{
								backgroundImage: `url(${image})`,
							}}
							className="bg-black w-screen h-[90vh] bg-cover bg-center" />

					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex flex-col absolute top-0 w-screen h-full z-20 items-center justify-center">
				<h1 className="font-heading text-white font-extrabold text-7xl px-12 md:px-0 md:w-[60%] mb-[5%] text-center">
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

				<div className="flex gap-4 w-[80%] flex-col md:flex-row items-center justify-center">
					<Link className={"w-full md:w-fit"} href={"https://forms.gle/38t1zBTXYgWwKZPA6"}>
						<CustomButton variant={"outlined"} className={"w-full md:w-fit border-white text-white text-xl"}>
							Book a Consultation
						</CustomButton>
					</Link>

					<Link className={"w-full md:w-fit"} href={"https://forms.gle/wEpyTRTgnGFM6PWc8"}>
						<CustomButton className={"w-full md:w-fit bg-white text-black font-semibold text-xl"}>
							Become a Data Fellow
						</CustomButton>
					</Link>
				</div>
			</div>


		</div>

	)
}

export default HeroSection

