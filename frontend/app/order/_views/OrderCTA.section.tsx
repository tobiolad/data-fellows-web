import { twMerge } from "tailwind-merge"
import CustomButton from "@components/CustomButton"
import { ChevronRightIcon } from "@heroicons/react/24/solid"


export default function OrderCtaSection({ className="" }) {




	return (
		<div id="#download" className={twMerge("w-full flex h-fit p-6 bg-primary-light dark:bg-primary-dark flex-col md:flex-row min-h-[60vh] md:justify-between", className)}>

			<div className="w-full md:w-[40%] py-12 md:py-0 relative justify-center flex flex-col">
				<p className="text-primary-dark dark:text-white text-2xl md:text-4xl font-bold">
					Make your Special Recipes
				</p>

				<p className= "dark:text-gray-300 mt-4 md:mt-4 ">
					We offer a large amount of varieties by giving flexibility for customers to make their recipe by making order on the things they want specially in their recipe.
				</p>

				<div className="flex gap-4 my-8">

					<CustomButton endIcon={<ChevronRightIcon />} variant={"text"} className={"rounded-[0] border-primary items-center"}>
						Order Now
					</CustomButton>
				</div>
			</div>

			<div className="w-[50%] bg-[url('/img/cta.png')] bg-cover hidden md:flex rounded-xl  items-center justify-center ">
			</div>

		</div>
	)
}


