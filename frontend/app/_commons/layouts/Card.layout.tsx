import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	children?: ReactNode;
	style?: any;
};

function CardLayout({ children, className, style, ...rest }: Props) {
	return (
		<div
			style={style}
			className={twMerge(
				`rounded-xl p-4 min-h-fit flex border overflow-clip border-outline dark:border-outline-dark`, className
			)} {...rest}>
			{children}
		</div>
	);
}

export default CardLayout;
