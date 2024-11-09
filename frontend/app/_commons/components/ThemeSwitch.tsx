"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { twMerge } from "tailwind-merge"
import { useGlobalStore } from "@commons/store"
import Toggle from "@components/Toggle"
import { useLocalStorage } from "@commons/hooks"
import { QUERY_KEYS } from "@utils"

const ThemeSwitch = ({ className = "", icon = false }) => {

	const { darkMode, setDarkMode } = useGlobalStore()
	const { saveToStorage } = useLocalStorage()

	const setTheme = () => {
		saveToStorage(QUERY_KEYS.darkMode,!darkMode)
		setDarkMode(!darkMode)
	}

	return (
		<div className={twMerge(`w-fit`, className)}>
			{icon ? (
				<span className="w-full flex items-center gap-5">
					<SunIcon className="text-gray-600 w-5" />
					<Toggle checked={darkMode} onClick={setTheme} />
					<MoonIcon className="text-gray-600 w-5" />
				</span>
			) : (
				<span className="w-full flex justify-between">
					<p className="">Dark Theme</p>
					<Toggle checked={darkMode} onClick={setTheme} />
				</span>
			)}
		</div>
	)
}

export default ThemeSwitch
