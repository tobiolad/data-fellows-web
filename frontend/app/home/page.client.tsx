import HeroSection from "@app/home/_views/hero.section"
import ServicesSection from "@app/home/_views/services.section"
import HowSection from "@app/home/_views/how.section"
import FaqSection from "@app/home/_views/faq.section"
import GetInTouchSection from "@app/home/_views/get-in-touch.section"
import FeedbackSection from "@app/home/_views/feedback.section"
import Cta2Section from "@app/home/_views/cta2.section"


export default function HomeClient() {


	return (
		<main className="h-full w-full flex flex-col gap-y-8">

			<HeroSection />

			<ServicesSection className="" />

			<HowSection className=" mt-[10%]" />

			<FeedbackSection className="px-8 md:px-32" />

			<Cta2Section className="" />

			<FaqSection className="px-8 md:px-32 lg:px-52" />

			<GetInTouchSection className="px-12 md:px-32" />


		</main>
	)
}
