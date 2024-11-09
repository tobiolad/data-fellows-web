"use client"
import FormInput from "@components/FormInput"
import { useForm } from "react-hook-form"
import Heading from "@components/Heading"
import CustomButton from "@components/CustomButton"
import { api } from "@utils/axiosProvider"
import toast from "react-hot-toast"
import { useState } from "react"

export default function LoginClient() {

	const { register, handleSubmit } = useForm()
	const [loading, setLoading] = useState(false)
	const onSubmit = (data) => {
		setLoading(true)
		api.post("/users/login", data)
			.then((res) => {
				console.log(res)
				toast.success("Login successful.")
				if (res?.user?.dashboard_link) {
					toast.success("Redirecting to dashboard...")
					setTimeout(() => {
						window.location.replace(res?.user?.dashboard_link)
					}, 1000)
				}
			})
			.catch((error) => {
				console.log(error)
				toast.error("Login failed. Please check your credentials.")
			})
			.finally(() => setLoading(false))
	}

	return (
		<main className="w-full flex flex-col gap-y-8 h-[90vh]  items-center justify-center">
			<form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-[30%] rounded-lg">
				<Heading className={"lg:text-5xl"}>Login</Heading>
				<p className={"text-gray-500 my-2"}>
					Enter your email and password to access your dashboard.
				</p>
				<FormInput
					register={register("email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Invalid email address",
						},
					})}
					label="Email"
					placeholder={"e.g john@example.com"}
				/>
				<FormInput
					register={register("password", {
						required: "Password is required",
					})}
					label="Password"
					placeholder={"******"}
					type="password" />
				<CustomButton loading={loading} className={"w-full"}>
					Login
				</CustomButton>
			</form>
		</main>
	)
}
