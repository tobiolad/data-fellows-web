import { twMerge } from "tailwind-merge"

function Heading({ children, className }: { className?: string, children: string | React.ReactNode }) {
	return (
		<strong
			className={twMerge("mt-2 md:text-6xl font-heading font-extrabold tracking-tight text-primary-dark dark:text-white text-3xl", className)}>
			{children}
		</strong>
)

}

export default Heading;
