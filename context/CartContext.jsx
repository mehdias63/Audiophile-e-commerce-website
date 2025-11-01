'use client'
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'

const CartContext = createContext()

function safeParse(str) {
	try {
		return JSON.parse(str)
	} catch {
		return null
	}
}

function getImageSrc(img) {
	if (!img) return null
	if (typeof img === 'string') return img
	if (img.props && (img.props.src || img.props.children)) {
		return img.props.src ?? null
	}
	return null
}

export function CartProvider({ children }) {
	const [items, setItems] = useState(() => {
		if (typeof window === 'undefined') return []
		const raw = localStorage.getItem('audiophile-cart')
		const parsed = safeParse(raw)
		return Array.isArray(parsed) ? parsed : []
	})
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (typeof window === 'undefined') return
		try {
			localStorage.setItem('audiophile-cart', JSON.stringify(items))
		} catch (e) {
			console.warn('Could not write cart to localStorage', e)
		}
	}, [items])

	const openCart = () => setIsOpen(true)
	const closeCart = () => setIsOpen(false)

	const normalizeProduct = product => {
		const copy = { ...product }
		if (!copy.id) {
			copy.id = `${copy.title || 'product'}-${String(copy.price || '')}-${Math.random()
				.toString(36)
				.slice(2, 8)}`
			console.warn(
				'Cart: product missing id — a fallback id was generated.',
				copy,
			)
		}
		copy.price = Number(
			parseFloat(String(copy.price ?? 0).replace(/[^0-9.-]+/g, '')) ||
				0,
		)
		copy.image = getImageSrc(copy.image) || null
		return {
			id: copy.id,
			title: copy.title ?? '',
			price: copy.price,
			image: copy.image,
		}
	}

	const addToCart = (product, quantity = 1) => {
		const p = normalizeProduct(product)
		const qty = Number(quantity) || 1

		setItems(prev => {
			const current = Array.isArray(prev) ? prev : []
			const idx = current.findIndex(it => it.id === p.id)
			if (idx !== -1) {
				return current.map(it =>
					it.id === p.id
						? { ...it, qty: Number(it.qty || 0) + qty }
						: it,
				)
			} else {
				return [...current, { ...p, qty }]
			}
		})
		openCart()
	}

	const increase = id =>
		setItems(prev =>
			(Array.isArray(prev) ? prev : []).map(p =>
				p.id === id ? { ...p, qty: Number(p.qty || 0) + 1 } : p,
			),
		)

	const decrease = id =>
		setItems(prev =>
			(Array.isArray(prev) ? prev : []).map(p =>
				p.id === id
					? { ...p, qty: p.qty > 1 ? Number(p.qty) - 1 : 1 }
					: p,
			),
		)

	const removeItem = id =>
		setItems(prev =>
			Array.isArray(prev) ? prev.filter(p => p.id !== id) : [],
		)

	const clearCart = () => setItems([])

	const total = (Array.isArray(items) ? items : []).reduce(
		(acc, it) => acc + Number(it.price || 0) * Number(it.qty || 0),
		0,
	)

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				increase,
				decrease,
				removeItem,
				clearCart,
				total,
				isOpen,
				openCart,
				closeCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => useContext(CartContext)
