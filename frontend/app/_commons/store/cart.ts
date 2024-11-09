import { create } from "zustand"

interface CartItem {
	id: number
	name: string
	price: string
	quantity: number
}

interface ICart {
	cart: CartItem[]
	updateCart: (item: CartItem) => void
	clearCart: () => void
	removeItem: (item: CartItem) => void
	increaseQuantity: (id: number) => void
	decreaseQuantity: (id: number) => void
}

export const useCart = create<ICart>((set) => ({
	cart: [],
	updateCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
	clearCart: () => set((state) => ({ cart: [] })),
	removeItem: (item) => set((state) => ({ cart: state.cart.filter((x) => x.id !== item.id) })),
	increaseQuantity: (id) => {
		set((state) => ({
			cart: state.cart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
			),
		}))
	},
	decreaseQuantity: (id) => {
		set((state) => {
			if (state.cart.find((x) => x.id === id)?.quantity === 1)
				return { cart: state.cart.filter((x) => x.id !== id) }
			else
				return {
					cart: state.cart.map((item) =>
						item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
					),
				}
		})
	},
}))
