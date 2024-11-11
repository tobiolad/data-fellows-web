import HeroSection from "@app/home/_views/hero.section"
import ServicesSection from "@app/home/_views/services.section"
import HowSection from "@app/home/_views/how.section"
import Cta2Section from "@app/home/_views/cta2.section"
import MeetClientSection from "@app/home/_views/meet-client.section"
import WhyChooseSection from "@app/home/_views/why-choose.section"
import OurProcessSection from "@app/home/_views/our-process.section"
import PricingSection from "@app/home/_views/pricing.section"


export default function HomeClient() {


	return (
		<main className="h-full w-full flex flex-col gap-y-8">

			<HeroSection />

			<ServicesSection className="" />

			<HowSection className=" mt-[10%]" />

			<MeetClientSection className=" mt-[10%]" />

			<WhyChooseSection className=" mt-[10%]" />

			<PricingSection className=" mt-[10%]" />

			<OurProcessSection className=" mt-[10%]" />

			<Cta2Section className="" />


		</main>
	)
}
