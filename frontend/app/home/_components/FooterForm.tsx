"use client"

import { twMerge } from "tailwind-merge"
import FormInput from "@components/FormInput"
import FormTextArea from "@components/FormTextArea"
import CustomButton from "@components/CustomButton"
import toast from "react-hot-toast"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { sendEmail } from "@utils/email-sender"

interface FooterFormProps {
	className?: string
}

const FooterForm = ({ className }: FooterFormProps) => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm()


	const [loading, setLoading] = useState(false)

	const onSubmit = (data) => {
		setLoading(false)
		// draft a contact enquiry message

		const message = `
			<h1>Message from JustCupcakes.uk</h1>
			<p>Name: ${data?.name}</p>
			<p>Phone Number: ${data?.number}</p>
			<p>Email: ${data?.email}</p><br/><br>
			<p>${data?.message}</p>`

		sendEmail({
			subject: "New Order from JustCupcakes.uk",
			message: message,
		})
			.then(() => {
				toast.success("Email sent")

			})
			.catch((e) => {
				toast.error(e.message)
			})
			.finally(() => setLoading(false))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}
			  className={twMerge("rounded-lg flex flex-col gap-2 w-[40%] bg-[#D6B0E4] h-full z-20 drop-shadow-2xl p-8  text-black", className)}>
			<h2 className={"text-xl font-bold"}>Send Us a Message</h2>

			<FormInput
				errors={errors?.name}
				register={register("name")}
				className={"my-0"}
				placeholder={"Name"}
			/>

			<FormInput
				errors={errors.email}
				register={register("email")}
				className={"my-0"}
				placeholder={"Email Address"}
			/>

			<FormInput
				errors={errors.number}
				register={register("number")}
				className={"my-0"}
				placeholder={"Phone Number"}
			/>

			<FormTextArea
				errors={errors.message}
				register={register("message")}
				className={"my-0"}
				maxLength={1000}
				placeholder={"Message"}
			/>

			<CustomButton loading={loading} className={"w-[30%] py-6 my-0"}>
				Send
			</CustomButton>

		</form>
	)
}


export default FooterForm
