import "@assets/fonts/fonts.css"
import Providers from "@/app/providers"
import { Metadata } from "next"
import Header from "@layouts/Header"
import FooterLayout from "@components/layouts/Footer.layout"

const site_owner = "Data Fellows"
const title = "Data Fellows"
const description = "Data Fellows"
const OgImage = "/img/cta.png"
const site_url = "https://datafellows.tech"

export const metadata: Metadata = {
	metadataBase: new URL(site_url),
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		url: site_url,
		siteName: site_owner,
		images: [OgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		creator: site_owner,
		images: [OgImage],
	},
}

export default function RootLayout({ children }) {
	return (
		<Providers>

			<Header />
			{children}
			<FooterLayout />
		</Providers>
	)
}