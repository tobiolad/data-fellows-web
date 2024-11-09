import React from "react"
import FooterForm from "@app/home/_components/FooterForm"
import FooterShape from "@assets/images/footer-bg.svg"
import { PiFacebookLogo, PiInstagramLogo, PiSnapchatLogo, PiTiktokLogo } from "react-icons/pi"

function FooterSection({}) {

	const socials = [
		{
			name: "Instagram",
			icon: <PiInstagramLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.instagram.com/justcupcakes.uk?igsh=MWhpcWc5NzBwM2wzMw==",
		},
		{
			name: "Facebook",
			icon: <PiFacebookLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.facebook.com/profile.php?id=61551746283933",
		},
		{
			name: "Snapchat",
			icon: <PiSnapchatLogo className={"w-8 h-8 text-white"} />,
			link: "https://t.snapchat.com/QdmD848e",
		},
		{
			name: "TikTok",
			icon: <PiTiktokLogo className={"w-8 h-8 text-white"} />,
			link: "https://www.tiktok.com/@justcupcakes.uk",
		},
	]

	return (
		<section className="flex flex-col bg-black py-32 items-center gap-10 justify-between mt-12 relative">


			<div className={"relative hidden md:block"}>

				<FooterShape className={"hidden md:block w-full"} />

				<span className={"absolute left-[5%] top-[20%] max-w-[40%] "}>
					<p className={"text-black font-bold text-3xl"}>Justcupcakes</p>
					<p className={"text-black font-bold text-3xl"}>Just for you.</p>
					<p className={"text-black my-3"}>
						Welcome to Just cupcakes, where every bite is a sweet delight. Indulge in our array of flavors, from tangy lemon to classic red velvet. Connect with us for orders and updates, and let us make every moment sweeter together.
					</p>

				<img className={"w-20 mt-[25%]"} src={"/img/emblem.png"} />

				</span>

				<FooterForm className={"absolute right-[10%] -top-[10%]"} />
			</div>


			<span className={"absolute hidden md:block"}>
				<svg width="1121" height="516" viewBox="0 0 1121 516" fill="none" xmlns="http://www.w3.org/2000/svg">
				<mask id="mask0_170_858" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="3"
					  width="1101"
					  height="513">
					<path
						d="M0 476.929C0 488.827 0 494.776 1.94376 499.469C4.53544 505.725 9.5065 510.696 15.7634 513.288C20.456 515.232 26.405 515.232 38.303 515.232H1052.42C1072.29 515.232 1082.22 515.232 1088.21 511.719C1096.19 507.036 1101.01 498.403 1100.81 489.152C1100.66 482.214 1095.45 473.757 1085.04 456.842L867.48 103.62C864.247 98.372 862.631 95.7478 860.56 93.6599C857.798 90.8759 854.432 88.7654 850.724 87.492C847.942 86.5369 844.876 86.225 838.744 85.6011L42.1798 4.56113C29.214 3.24203 22.7311 2.58252 17.5838 4.26917C10.7208 6.5181 5.131 11.568 2.199 18.1682C0 23.1183 0 29.6347 0 42.6674V476.929Z"
						fill="white" />
				</mask>
				<g mask="url(#mask0_170_858)">
					<g opacity="0.6">
						<g opacity="0.2">
							<path opacity="0.25"
								  d="M627.997 462.456C610.703 451.639 595.443 438.855 583.235 424.105C599.512 419.188 614.772 412.304 627.997 404.437C645.8 393.62 661.059 380.345 673.267 365.103C681.406 370.019 690.561 373.953 701.243 376.903C714.977 380.345 731.254 382.311 750.582 382.311C854.856 382.311 872.659 325.768 872.659 242.181L872.659 37.149L628.506 37.149L628.506 183.671C628.506 252.015 614.772 302.167 554.242 318.392C549.664 319.868 544.069 320.851 538.983 321.834C536.948 309.542 536.439 296.758 536.439 283.975L536.439 -73.48L965.743 -73.48L965.743 283.975C965.743 395.587 897.075 493.432 751.091 493.432C700.734 493.432 660.042 481.632 627.997 462.456Z"
								  fill="#5C007E" />
						</g>
						<g opacity="0.4">
							<path opacity="0.25"
								  d="M504.903 434.619C533.896 434.619 559.838 430.686 583.236 423.802C599.513 418.885 614.772 412.001 627.997 404.135C645.8 393.317 661.06 380.042 673.268 364.8C684.967 351.033 694.122 335.299 701.243 318.581C713.451 290.064 719.555 258.596 719.555 225.653L719.555 36.8463L628.506 36.8463L628.506 183.368C628.506 251.712 614.772 301.864 554.243 318.09C549.665 319.565 544.069 320.548 538.983 321.532C528.81 323.007 517.62 323.99 504.903 323.99C400.629 323.99 382.826 267.446 382.826 183.86L382.826 36.8463L535.931 36.8463L535.931 -73.7827L290.251 -73.7827L290.251 225.653C290.251 336.774 358.92 434.619 504.903 434.619Z"
								  fill="#5C007E" />
						</g>
					</g>
				</g>
			</svg>
			</span>


			<div className="md:hidden text-primary-dark dark:text-white px-12">
				<span className={" flex flex-col "}>
					<p className={"font-bold text-3xl"}>Justcupcakes</p>
					<p className={"font-bold text-3xl"}>Just for you.</p>
					<p className={"my-3"}>
						Welcome to Just cupcakes, where every bite is a sweet delight. Indulge in our array of flavors, from tangy lemon to classic red velvet. Connect with us for orders and updates, and let us make every moment sweeter together.
					</p>

				<img className={"w-20 mt-[10%]"} src={"/img/emblem.png"} />

				</span>

				<FooterForm className={"my-[20%] w-full "} />


			</div>

			<div className={"w-full justify-center items-center flex text-gray-400"}>
				© 2024 JUST CUP CAKES | SMSE . All rights reserved.
			</div>

			<div className="flex w-full items-center justify-center gap-8">
				{
					socials.map((social, i) => (
						<a target={"_blank"} key={i} href={social.link}>
							{social.icon}
						</a>
					))
				}
			</div>

		</section>

	)
}

export default FooterSection
