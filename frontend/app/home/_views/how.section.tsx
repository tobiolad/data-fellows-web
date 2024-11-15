import { twMerge } from "tailwind-merge"
import CustomButton from "@components/CustomButton"
import Heading from "@components/Heading"
import Link from "next/link"


function HowSection({ className = "" }) {


	return (
		<div id="how"
			 className={twMerge("w-full flex flex-col px-[5%]", className)}>

			<Heading className={"md:text-5xl text-xl"}>How we make it happen</Heading>

			<div className="flex flex-col md:flex-row justify-center gap-3 my-[5%] items-center w-full h-full">

				<div className="bg-[#101014] p-[3%] rounded-xl flex-1 w-full aspect-square justify-evenly flex flex-col">
					<Heading className={"text-white lg:text-4xl"}>Basic Setup</Heading>
					<img src={"/img/how-images/img_1.png"} className="p-2" />
					<p className={"text-white w-full text-sm my-2"}>Google Forms | Google Sheet | Power Bi</p>
					<div className="flex flex-row gap-x-4">
						<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}><CustomButton
							className={"text-white border-white"} variant={"outlined"}>Get
							Started</CustomButton></Link>
						<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}><CustomButton className={"text-white"}
																						 variant={"text"}>Learn
							More</CustomButton></Link>
					</div>
				</div>

				<div className="bg-[#101014] p-[3%] rounded-xl flex-1 w-full aspect-square justify-evenly flex flex-col">
					<Heading className={"text-white lg:text-4xl"}>Advanced Setup</Heading>
					<img src={"/img/how-images/img.png"} className="p-2" />
					<p className={"text-white w-full text-sm my-2"}>Power Bi | Air Table</p>
					<div className="flex flex-row gap-x-4">
						<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}><CustomButton
							className={"text-white border-white"} variant={"outlined"}>Get
							Started</CustomButton></Link>
						<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}><CustomButton className={"text-white"}
																						 variant={"text"}>Learn
							More</CustomButton></Link>
					</div>
				</div>

				<div className="bg-[#101014] p-[3%] rounded-xl flex-1 w-full aspect-square justify-evenly flex flex-col">
					<Heading className={"text-white lg:text-4xl"}>Machine Learning</Heading>
					<img src={"/img/how-images/img_2.png"} className="p-2" />
					<div className="flex flex-row gap-x-4">
						<CustomButton className={"bg-red-500"}>
							Coming Soon
						</CustomButton>
					</div>
				</div>

			</div>

		</div>
	)
}

export default HowSection



