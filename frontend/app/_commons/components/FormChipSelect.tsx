import React from "react"
import { textFieldStyle } from "@components/FormInput"
import { twMerge } from "tailwind-merge"
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

export const Chip = ({ option, selectedChips, setSelectedChips, limit, selected = false }) => {

	const toggleChip = () => {
		const isSelected = selectedChips.includes(option)

		if (isSelected) {
			setSelectedChips(selectedChips.filter((chip) => chip !== option))
		} else {
			if (limit && selectedChips.length >= limit) {
				// Limit reached, do not add more chips
				return
			}
			setSelectedChips([...selectedChips, option])
		}
	}

	return (
		<div
			className="w-fit text-sm px-4 mx-1 py-1 flex items-center rounded-xl cursor-pointer bg-gray-800 text-white"
			onClick={toggleChip}
		>
			{option}

			{
				selected && <PlusIcon className="w-4 h-4 ml-1 text-gray-400 dark:text-gray-500" />
			}
		</div>
	)
}

const ChipSelect = ({ options, label = "Select items", selectedChips, setSelectedChips, limit = null }) => {

	const gridWidth = {
		0: "",
		1: "grid-cols-1",
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
		5: "grid-cols-5",
	}[selectedChips?.length]

	function handleKeyPress(event): void {

		if (event.key === "Delete" || event.keyCode === 46) {
			toast.success("delete")
			console.log("deleet")
		}

	}

	return (
		<div className="flex flex-col ">
			<p className="font-heading text-white">{label}</p>

			<div className={twMerge(textFieldStyle, "my-4 w-full gap-2 flex ")}>

				<MagnifyingGlassIcon className="w-[5%] text-gray-400 dark:text-gray-500" />

				<div className="w-[95%] flex flex-col gap-2">
					<div className={twMerge("flex flex-wrap w-[95%] gap-y-3")}>
						{selectedChips.map((chip) => (
							<Chip key={chip} option={chip} selectedChips={selectedChips}
								  setSelectedChips={setSelectedChips}
								  limit={limit} />
						))}

						{
							(selectedChips.length < limit) && (<input
								type="text"
								placeholder={"Type to search..."}
								onKeyDown={handleKeyPress}
								className="bg-transparent text-sm px-4 grow text-primary-dark dark:text-white dark:text-gray-400 focus:outline-none"
								onClick={() => {
									// Handle click to focus on the input field
								}}
							/>)
						}
					</div>

				</div>


			</div>
		</div>
	)
}

export default ChipSelect
