"use client"
import Link from "next/link"
import { useState } from "react"
import CustomButton from "@components/CustomButton"
import { useRouter } from "next/navigation"
import Logo from "@components/Logo"
import { useCart } from "@commons/store/cart"

function Header({ className = "" }) {

	const router = useRouter()
	const { cart } = useCart()


	const [menuClick, setMenuClick] = useState(false)
	const links = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "Our Services",
			href: "#services",
		},
		{
			name: "Why Choose Us",
			href: "#why",
		},
		{
			name: "Testimonials",
			href: "#testimonials",
		},
	]


	return (
		<div className={`w-full top-0 bg-black sticky z-[1000] ${className}`}>
			<div className=" flex w-full h-[8%] items-center justify-between px-12 py-2  dark:border-gray-900">
				<Link
					href="/"
					className="logo w-[30%] text-3xl font-bold text-black dark:text-white"
					aria-label="Home Page">

					<Logo className={"w-24 md:w-24"} />
				</Link>

				<div className="links hidden w-[40%] gap-8 justify-center text-black  dark:text-white md:flex ">
					{links.map((link, index) => {
						return (
							<Link
								key={index}
								href={link.href}
								className="text-md text-white border-primary pb-2 transition duration-500 hover:border-b ">
								{link.name}
							</Link>
						)
					})}
				</div>

				<div className="cta justify-end hidden w-[30%] items-center gap-1.5 md:flex">

					{/*<ThemeSwitch icon className={"mx-12"}/>*/}
					<Link className={"text-white mx-4"} href={"/login"}>
						Login
					</Link>
					<Link href={"https://forms.gle/wEpyTRTgnGFM6PWc8"}>
						<CustomButton className="bg-white text-black dark:text-black px-4">
							Become a Data Fellow
						</CustomButton>
					</Link>


				</div>

				<MenuIcon
					className="h-6 w-6 cursor-pointer text-3xl text-white md:hidden"
					onClick={() => setMenuClick(!menuClick)}
				/>
			</div>

			{/* Mobile Nav */}
			<div
				className={`fixed left-0 top-[8%] z-[400] flex w-full border-b dark:border-gray-900 dark:bg-bg-dark-50 md:hidden ${
					menuClick ? "flex" : "hidden"
				}`}>
				<div
					className=" flex w-full items-center justify-between   border-b bg-bg-50  dark:border-gray-900 dark:bg-bg-dark-50">
					<div
						className={`${
							menuClick ? "" : "-translate-x-[100%]"
						}  text-x-blue z-[500]  flex min-h-screen w-full flex-col items-center justify-center space-y-5 bg-opacity-90 px-10 py-10 font-outfit font-bold text-bg-dark dark:text-white`}>
						{links.map((link, index) => {
							return (
								<div
									key={index}
									onClick={() => {
										router.push(link.href)
										setMenuClick(false)
									}}
									className="text-md cursor-pointer hover:text-x-blue-alt mx-2 border-primary pb-2 hover:border-b ">
									{link.name}
								</div>
							)
						})}

						<div className="cta mx-auto  flex flex-col items-center justify-center space-y-4">

							{/*Download button here*/}

							<Link href={"https://forms.gle/wEpyTRTgnGFM6PWc8"} className={"my-8"}>
								<CustomButton className="bg-white text-black dark:text-black px-4">
									Become a Data Fellow
								</CustomButton>
							</Link>

							<Link href={"/login"} className={"my-8"}>
								<CustomButton className="bg-white text-black dark:text-black px-4">
									Login
								</CustomButton>
							</Link>

							{/*<ThemeSwitch icon className={"my-12"}/>

*/}

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header

const MenuIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		{...props}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
	</svg>
)
