import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Heading from "@components/Heading"
import { twMerge } from "tailwind-merge"
import { COLORS } from "@utils"
import { useGlobalStore } from "@commons/store"


const FAQs = ({ className }) => {
	const faqs = [
		{
			question: "How do I place an order?",
			answer: "To place an order, simply visit our website and select the cupcakes you'd like to order. Add them to your cart, choose your delivery or pickup preferences, and proceed to checkout.",
		},
		{
			question: "What are your delivery options?",
			answer: "We offer both delivery and pickup options. You can choose your preferred delivery date and time during the checkout process. Alternatively, you can pick up your order from our store during our operating hours.",
		},
		{
			question: "Do you offer customizations?",
			answer: "Yes, we offer customization options for our cupcakes. You can choose the flavors, quantities, and any additional preferences during the ordering process.",
		},
		{
			question: "What are your payment methods?",
			answer: "We accept various payment methods, including credit/debit cards and online payment platforms. All transactions are securely processed through our payment gateway.",
		},
		{
			question: "How can I contact you?",
			answer: "You can contact us by phone at +44 7904 792381 or email at [email address]. Alternatively, you can fill out the contact form on our website, and our customer support team will assist you.",
		}
	]


	return (
		<div id="faqs" className={twMerge("flex md:min-h-[50vh] items-center flex-col gap-4 py-12 md:pt-32 relative", className)}>

			<div className="md:px-32 md:text-center">
				<Heading>Frequently Asked Questions</Heading>
				<h2 className="text-base mt-2 dark:text-gray-300 font-semibold leading-7 ">Find answers to common questions about our orders, delivery, and products</h2>

			</div>

			<img src="/img/faq-image.png" alt="FAQs" className="absolute left-0 top-[20%] bottom-0 w-[300px]" />
			<img src="/img/accent.png" alt="FAQs" className="absolute right-0 top-[20%] bottom-0 w-[400px]" />

			<FaqAccordion className={`md:mt-20 max-w-4xl mx-auto bg-primary-light`} faqs={faqs} />
		</div>
	)
}

export default FAQs

const FaqAccordion = ({ faqs, className = "" }) => {

	return (
		<div className={`w-full bg-primary-light dark:bg-primary-dark ${className}`}>
			{faqs.map((faq: any, index: number) => {
				return (
					<Accordion
						key={index}
						style={{
							//backgroundColor: COLORS["primary-light"]
						}}
						className={`py-2 dark:bg-primary-dark  my-0 text-lg border border-gray-400  `}
						elevation={0}>
						<AccordionSummary
							expandIcon={<ChevronDownIcon className="w-6 font-bold text-primary-dark dark:text-white bg-white dark:bg-primary-dark" />}
							aria-controls="panel1a-content">
							<p className="font-medium text-xl font-syne w-full dark:text-white">
								{faq.question}
							</p>
						</AccordionSummary>
						<AccordionDetails style={{ fontFamily: "Outfit" }} className="py-8">
							<p className="dark:text-gray-300 px-8 w-full font-sans bg-white dark:bg-primary-dark">{faq.answer}</p>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}
