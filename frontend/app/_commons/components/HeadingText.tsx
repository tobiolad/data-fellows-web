import { twMerge } from "tailwind-merge"
import React from "react"

type Props = {
	className?: string
	children?: React.ReactNode
	variant?: "default" | "primary" | "secondary" | "gradient"
}

const HeadingText = ({ className, children, variant = "default" }: Props) => {


	const styling = {
		default: "text-white",
		primary: "text-primary",
		secondary: " text-secondary",
		gradient: "text-transparent w-fit bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary",
	}[variant]


	return (
		<h1 style={{ lineHeight: 1 }} className={twMerge(`${styling} font-bold font-heading`, className)}>
			{children}
		</h1>
	)
}

export default HeadingText
