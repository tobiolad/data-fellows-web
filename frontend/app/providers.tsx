"use client"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "@assets/globals.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"
import { useGlobalStore } from "@commons/store"
import { useEffect } from "react"
import { useLocalStorage } from "@commons/hooks"
import { QUERY_KEYS } from "@utils"

const queryClient = new QueryClient()

const Providers = ({ children }) => {


	//const blobity = useBlobity(blobityConfig);
	const { darkMode, setDarkMode } = useGlobalStore()
	const { getFromStorage } = useLocalStorage()
	useEffect(() => {
		setDarkMode(getFromStorage(QUERY_KEYS.darkMode))
	}, [])


	return (
		<QueryClientProvider client={queryClient}>
			<html lang="en" className={darkMode ? "dark" : ""}>
			<body
				className={"font-sans text-primary-dark dark:text-white text-text-base dark:text-text-base-dark"}>
			<Toaster position={"top-right"} />
			{children}
			<ReactQueryDevtools buttonPosition={"bottom-left"} initialIsOpen={false} />
			</body>
			</html>

		</QueryClientProvider>

	)
}

export default Providers
