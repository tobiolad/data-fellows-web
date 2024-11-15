import { twMerge } from "tailwind-merge"
import Link from "next/link"
import CustomButton from "@components/CustomButton"


function Cta2Section({ className = "", gradient="95.64deg, #140F0BD2 -0.61%, #853E1FD2 60.36%, #FFAA2BD2 122.62%" }) {


	return (
		<div id="#download" style={{
			background: `linear-gradient(${gradient}), url('/img/ctabg.png')`,
		}}
			 className={twMerge("w-screen relative flex h-full min-h-[50vh] bg-center bg-cover justify-between", className)}>

			<img src="/img/cta1.png" className="inset-0 w-[30%] aspect-square object-cover" alt="cta2-bg" />
			<img src="/img/model.png" className="inset-0 w-[30%] aspect-square object-cover" alt="cta2-bg" />

			<div className="absolute flex flex-col px-[10%] md:items-center justify-center left-0 top-0 right-0 bottom-0 ">
				<h2 className={"text-xl md:text-4xl md:text-center font-bold text-white font-syne"}>
					Want to become a Data Fellow?
				</h2>
				<p className={"max-w-[60%] md:text-center  text-white my-2"}>
					Join a thriving community of data professionals making a difference.
				</p>

				<div className="flex flex-col md:flex-row gap-4 my-2">
					<Link href={"https://forms.gle/38t1zBTXYgWwKZPA6"}>
						<CustomButton variant={"outlined"} className={"rounded-[0] border-white text-xl text-white"}>
							Book a Consultation
						</CustomButton>
					</Link>
					<Link href={"https://forms.gle/S81bo1aotAnZ9en36"}>
						<CustomButton className={"rounded-[0] min-w-[15vw] bg-white text-black font-semibold text-xl"}>
							Join Now
						</CustomButton>
					</Link>

				</div>
			</div>

		</div>
	)
}

export default Cta2Section



