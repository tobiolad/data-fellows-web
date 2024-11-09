"use client"
import CustomButton from "@components/CustomButton"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useCart } from "@commons/store/cart"
import FormInput from "@components/FormInput"
import FormTextArea from "@components/FormTextArea"
import { useForm } from "react-hook-form"
import Link from "next/link"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import { sendEmail } from "@utils/email-sender"

export default function CheckOutPage({}) {

	const { cart, clearCart } = useCart()
	const { register, setValue, handleSubmit } = useForm()
	const [loading, setLoading] = useState(false)

	function Submit(data) {
		setLoading(true)

		//draft a message containing order details
		const message = `
			<h1>Order Details</h1>
			<p>Name: ${data?.name}</p>
			<p>Phone Number: ${data?.number}</p>
			<p>Email: ${data?.email}</p>
			<p>Delivery Address: ${data?.address}</p>
			<br />
			<h2>Order</h2>
			<ul>
				${cart?.map((item, i) => `<li>${i + 1}. ${item?.name} - ${item.price}  X ${item?.quantity} </li>`)}
			</ul>
		`


		sendEmail({
			subject: "New Order from JustCupcakes.uk",
			message: message,
		})
			.then(() => {
				toast.success("Order sent")
				clearCart()
				//router.push("/")

			})
			.catch((e) => {
				toast.error(e.message)
			})
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		if (process.env.NODE_ENV === "development") {
			setValue("name", "John Doe")
			setValue("number", "2348123456789")
			setValue("email", "j@gmail.com")
			setValue("address", "No 1, John Doe Street, Lagos")
		}
	}, [])

	return (
		<main className="h-full w-full min-h-screen flex flex-col items-center gap-y-8 py-8 px-8 lg:px-32">


			{
				cart?.length > 0 ? (
					<>
						<h1 className="text-3xl my-4 font-bold">Checkout</h1>


						<div className="w-[60%] flex flex-col justify-center  gap-4">
							<p className={"w-full my-3 dark:text-gray-300"}>
								We'll need your details to complete your order. <br />
								Please complete the form below. We would reach out to you to confirm your order.
							</p>
							<div className="flex justify-between">
								<p className={"font-bold"}>Product</p>
								<p className={"font-bold"}>Quantity</p>
							</div>

							<div className="border-y border-outline py-4">
								{
									cart?.map((item, i) => (
										<div className={"w-full flex items-center justify-between py-4"}>
											<div className=" flex">
												<p className={"mr-4"}>{i + 1}.</p>
												<p>{item?.name}</p>
											</div>
											<p>X {item?.quantity}</p>
										</div>
									))
								}

							</div>
							<Link href={"/order"} className={"text-primary dark:text-secondary my-4"}>
								{"--->"} Edit Orders
							</Link>

							<form onSubmit={handleSubmit(Submit)}>
								<FormInput
									required
									className={"bg-opacity-100"}
									register={register("name", { required: true })}
									label={"Name"}
									placeholder={"ex: John Doe"}
								/>
								<FormInput
									required
									className={"bg-opacity-100"}
									register={register("number", { required: true })}
									type={"number"}
									min={0}
									label={"Phone Number"}
									placeholder={"ex: 2348123456789"}
								/>
								<FormInput
									required
									className={"bg-opacity-100"}
									register={register("email", { required: true })}
									label={"Email"}
									placeholder={"ex: john@example.com"}
								/>
								<FormTextArea
									required
									className={"bg-opacity-100"}
									register={register("address", { required: true })}
									label={"Delivery Address"}
									placeholder={"Enter your delivery address"}
								/>

								<CustomButton loading={loading} className={""}>
									Submit Order
								</CustomButton>
							</form>


						</div>
					</>
				) : (
					<div className={"w-full min-h-[70vh] justify-center gap-y-6 flex flex-col items-center"}>

						<ShoppingCartIcon className={"w-24 text-primary dark:text-secondary opacity-50"} />

						<h1 className="text-3xl font-bold">Cart</h1>
						<p className={"text-center text-gray-400"}>
							Your cart is empty.<br />
							Click the button below to go back to the store.
						</p>
						<Link href={"/order"}>
							<CustomButton>
								Back to Store
							</CustomButton>
						</Link>
					</div>
				)
			}


		</main>
	)
}
