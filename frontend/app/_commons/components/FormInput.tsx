import { twMerge } from "tailwind-merge"
import React from "react"

type FormInputProps = React.ComponentProps<"input"> & {
	className?: string
	register?: any
	startIcon?: any
	endIcon?: any
	iconClick?: any
	label?: any
	description?: string
	startIconClassName?: string
	endIconClassName?: string
	embeddedComponent?: React.ReactNode
	errors?: any
	// onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

export const textFieldStyle = `bg-white  my-2  autofill:bg-gray-500 p-4 outline-0 focus:ring-1  ring-secondary transition-200 bg-opacity-20 rounded-lg w-full`

const FormInput = (props: FormInputProps) => {
	const {
		className = "",
		startIcon,
		endIcon,
		iconClick,
		label,
		register,
		description,
		startIconClassName,
		endIconClassName,
		errors = {},
		embeddedComponent,
		// onKeyDown,
		...rest
	} = props

	const textFieldClass = `${textFieldStyle} ${Object.keys(errors)?.length > 0 ? "border-red-400 ring-red-400" : ""} font-heading text-black dark:text-black ${startIcon && "pl-12"} ${
		endIcon && "pr-12"
	}`

	return (
		<div className="my-2 flex w-full flex-col">
			{label && (
				<div className="my-1 flex gap-2">
					<p className="font-heading text-gray-700 dark:text-gray-400">{label}</p>
					{description && <em className="font-heading text-gray-500 dark:text-gray-700">(*{description})</em>}
				</div>
			)}
			<div className="relative flex w-full items-center">
				<div
					className={twMerge(
						`absolute left-4 flex h-6 w-6 items-center text-gray-400 ${
							iconClick && "cursor-pointer hover:text-primary"
						} ${startIconClassName}`,
					)}
					onClick={iconClick}>
					{startIcon}
				</div>
				<input
					type="text"
					{...rest}
					{...register}
					required
					className={twMerge(`${textFieldClass} ${className}`)}
				/>
				{embeddedComponent ? (
					<div className={`absolute right-1.5 flex h-fit w-fit items-center text-gray-400 transition `}>
						{embeddedComponent}
					</div>
				) : (
					<div
						className={twMerge(
							`absolute right-4 flex h-6 w-6 items-center  text-gray-400 transition ${
								iconClick && "cursor-pointer hover:text-primary"
							} ${endIconClassName}`,
						)}
						onClick={iconClick}>
						{endIcon}
					</div>
				)}
			</div>
			<p className={"w-full text-red-400"}>{Object.keys(errors)?.length > 0 && errors.message}</p>
		</div>
	)
}

export default FormInput
