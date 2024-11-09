import { twMerge } from "tailwind-merge"
import { APP_NAME } from "@utils/constants"

type Props = {
	className?: string
	icon?: boolean
}

const Logo = ({ className, icon }: Props) => {
	return (
		<div className={twMerge("flex w-11 items-center gap-2", className)}>
			<img className={""} src="/img/logo.svg" alt={"logo"} />
		</div>
	)
}

export default Logo
