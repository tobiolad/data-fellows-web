import { twMerge } from "tailwind-merge"
import Heading from "@components/Heading"


function OurProcessSection({ className = "" }) {

	return (
		<div id="#download"
			 className={twMerge("w-full flex flex-col px-[5%] items-center justify-center", className)}>

			<Heading className={"md:text-6xl text-primary"}>Our Process - How it Works</Heading>
			<p className="mt-2">This is our process to help your business attain maximum development and growth.</p>

			<div className="flex flex-row my-[10%] justify-between">
				<div className="w-full md:w-[50%] flex  gap-12 md:gap-0 flex-col justify-evenly">

					<div className="w-full flex gap-4 flex-row items-center">
						<span className="w-2 rounded-lg h-full min-h-[15vh] bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Book a Consultation Call</p>
							<p className={"dark:text-gray-300"}>
								Schedule a meeting to discuss your needs.
							</p>
						</div>
					</div>

					<div className="w-full flex gap-4 flex-row items-center">
						<span className="w-2 rounded-lg h-full min-h-[15vh] bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Customized Solution Development</p>
							<p className={"dark:text-gray-300"}>
								We design a data solution tailored for you.
							</p>
						</div>
					</div>

					<div className="w-full flex gap-4 flex-row items-center">
						<span className="w-2 rounded-lg h-full min-h-[15vh] bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Solution Management</p>
							<p className={"dark:text-gray-300"}>
								Enjoy hands-free data solution management on our website.
							</p>
						</div>
					</div>


				</div>
				<img className={"hidden md:flex w-[35%] my-8"} src={"/img/about-r-img.png"} />
			</div>

		</div>
	)
}

export default OurProcessSection



