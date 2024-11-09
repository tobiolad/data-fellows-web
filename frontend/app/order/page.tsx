"use client"
import { StarIcon } from "@heroicons/react/16/solid"
import CustomButton from "@components/CustomButton"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import OrderCtaSection from "@app/order/_views/OrderCTA.section"
import { available_products, IProduct } from "@utils/data"
import { useCart } from "@commons/store/cart"
import { PlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { api } from "@utils/axiosProvider"

export default function OrderPage({}) {

	const orders = available_products

	const { cart, updateCart, increaseQuantity, decreaseQuantity } = useCart()

	const AddItemToCart = (item: IProduct, action?: "add" | "remove") => {


		updateCart({
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: 1,
		})
	}

	const { data = [] } = useQuery({
		queryFn: () => api.get("/products?limit=70"),
		queryKey: ["orders"],
		select: (data) => data.docs,
	})

	return (
		<main className="h-full w-full min-h-screen flex flex-col items-center gap-y-8 py-8 px-8 lg:px-32">


			<h1 className="text-3xl my-4 font-bold">Order & Pricing</h1>
			<div className="w-full justify-end flex lg:px-12">
				{
					cart.length > 0 && (
						<Link className={""} href={"/order/cart"}>
							<CustomButton startIcon={<ShoppingCartIcon />} className="bg-white w-full text-black dark:text-black px-4">
								Go to Cart
							</CustomButton>
						</Link>
					)
				}
			</div>

			<div className="flex flex-wrap justify-center  gap-4">
				{
					data.map((order, index) => (
						<div key={index}
							 className={`${order.width ? order?.width : "w-full md:w-[30%]"} items-center justify-between h-[50vh] bg-white rounded-lg overflow-clip flex flex-col relative`}>
							{/*<HeartIcon className="h-6 w-6 text-primary absolute top-6 right-6" />*/}

							<img className={"w-fit max-h-[60%]"} src={order.image.url} />
							<div className="h-[40%] flex flex-col text-black justify-between items-center w-full">
								<div className="h-[60%] w-full py-6 flex flex-col px-6">
									<div className="flex gap-4 my-2">
										{
											Array(order.rating).fill(0).map((_, index) => (
												<StarIcon key={index} className="h-6 w-6 text-yellow-400" />
											))
										}
									</div>
									<h1 className="font-poppins text-xl font-semibold">{order.name}</h1>
									<p className="text-lg font-semibold">{Number(order.price).toLocaleString("en-UK", { style: "currency" , currency: "GBP"})}</p>
								</div>
								<div className="px-4 mt-1 items-center justify-end aspect-square flex  w-full">

									{
										cart.find((x) => x.id === order.id) ? (
											<div className="flex gap-2 items-center">
												<CustomButton onClick={() => decreaseQuantity(order.id)}
															  className={"aspect-square h-[5vh]"}>-</CustomButton>
												<p className={`border-outline bg-gray-300 rounded-lg items-center h-[5vh] flex justify-center text-black aspect-square text-center`}>
													{cart.find((x) => x.id === order.id)?.quantity ?? 0}
												</p>
												<CustomButton onClick={() => increaseQuantity(order.id)}
															  className={"aspect-square h-[5vh]"}>+</CustomButton>
											</div>
										) : (
											<CustomButton
												startIcon={<PlusIcon />}
												onClick={() => AddItemToCart(order)}
												className={"h-[5vh]"}>
												Add to cart
											</CustomButton>
										)
									}


								</div>
							</div>


						</div>
					))
				}


			</div>


			<OrderCtaSection className="w-full" />


		</main>
	)
}
