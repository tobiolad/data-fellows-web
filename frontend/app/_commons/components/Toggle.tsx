type ToggleProps = {
	className?: string
	checked: boolean
	disabled?: false
	onClick: () => void
}

const Toggle = (props: ToggleProps) => {
	const { className = "", checked = false, disabled = false, onClick = () => {} } = props

	return (
		<>
			<label className="relative inline-flex cursor-pointer items-center">
				<input
					type="checkbox"
					value=""
					className="peer sr-only"
					checked={checked}
					disabled={disabled}
					onChange={onClick}
				/>
				<div className="peer h-6 w-11 rounded-full bg-gray-500 after:absolute  after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"></div>
			</label>
		</>
	)
}

export default Toggle
