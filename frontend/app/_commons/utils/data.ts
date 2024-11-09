export interface IProduct {
	id: number
	name: string
	image: string
	price: string
	rating: number
	width?: string
}

export const available_products: IProduct[] = [
	{
		id: 0,
		name: 'Lemon Cupcake',
		image: "/img/order/image 2.png",
		price: "£3.00",
		rating: 5,
	},
	{
		id: 1,
		name: 'Red Velvet Cupcake',
		image: "/img/order/image 1.png",
		price: "£3.50",
		rating: 5,
	},
	{
		id: 2,
		name: 'Vanilla Cupcake',
		image: "/img/order/image 3.png",
		price: "£2.70",
		rating: 5,
	},
	{
		id: 3,
		name: 'Chocolate Cupcake',
		image: "/img/order/image 6.png",
		price: "£3.00",
		rating: 5,
	},
	{
		id: 4,
		name: 'Caramel Cupcake',
		image: "/img/order/image 4.png",
		price: "£3.00",
		rating: 5,
	},
	{
		id: 5,
		name: 'Coconut Cupcake',
		image: "/img/order/image 7.png",
		price: "£3.00",
		rating: 5,
	},
	{
		id: 6,
		name: 'Carrot Cupcake',
		image: "/img/order/image 5.png",
		price: "£3.00",
		rating: 5,
	},
	{
		id: 7,
		name: 'Special Birthday Cakes',
		image: "/img/order/image 8.png",
		price: "Cakes On Request",
		rating: 5,
		width: "w-full md:w-[61%]"
	}
]
