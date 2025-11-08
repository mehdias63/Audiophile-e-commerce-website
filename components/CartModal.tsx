'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

interface CartItem {
	id: string
	title: string
	price: number | string
	qty: number
}

interface ProductImage {
	id: string
	image: string
}

const productImages: ProductImage[] = [
	{
		id: 'YX1',
		image: '/pic/product-yx1-earphones/image-gallery-3.png',
	},
	{
		id: 'xx99',
		image:
			'/pic/product-xx99-mark-two-headphones/image-gallery-3.png',
	},
	{
		id: 'xx99-i',
		image:
			'/pic/product-xx99-mark-one-headphones/image-gallery-3.png',
	},
	{
		id: 'XX59',
		image: '/pic/product-xx59-headphones/image-gallery-3.png',
	},
	{
		id: 'ZX9',
		image: '/pic/product-zx9-speaker/image-gallery-3.png',
	},
	{
		id: 'ZX7',
		image: '/pic/product-zx7-speaker/image-gallery-3.png',
	},
]

export default function CartModal() {
	const {
		items,
		isOpen,
		closeCart,
		increase,
		decrease,
		clearCart,
		total,
	} = useCart() as {
		items: CartItem[]
		isOpen: boolean
		closeCart: () => void
		increase: (id: string) => void
		decrease: (id: string) => void
		clearCart: () => void
		total: number
	}

	const router = useRouter()

	if (!isOpen) return null

	const handleCheckout = () => {
		closeCart()
		router.push('/checkout')
	}

	return (
		<div
			className="fixed inset-0 z-50 flex justify-end items-start"
			aria-modal="true"
			role="dialog"
		>
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={closeCart}
			/>
			<div className="relative m-8 w-[360px] bg-white rounded-lg shadow-2xl p-6 z-10">
				<div className="flex items-center justify-between mb-4">
					<h3 className="font-semibold text-lg">
						CART ({items.length})
					</h3>
					<span
						onClick={clearCart}
						role="button"
						tabIndex={0}
						className="text-sm text-gray-500 hover:text-burnt-orange disabled:opacity-40 cursor-pointer select-none"
					>
						Remove all
					</span>
				</div>

				<div className="space-y-4 max-h-[420px] overflow-auto pr-2">
					{items.length === 0 ? (
						<p className="text-sm text-gray-500">
							Your cart is empty.
						</p>
					) : (
						items.map((it: CartItem) => {
							const found = productImages.find(p => p.id === it.id)
							const imageSrc = found
								? found.image
								: '/images/placeholder.png'
							const displayTitle = it.title
								.replace(
									/\s*(Headphones|Speakers|Earphones)\s*$/i,
									'',
								)
								.trim()

							return (
								<div key={it.id} className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
										<Image
											src={imageSrc}
											alt={it.title}
											width={48}
											height={48}
											className="object-cover"
										/>
									</div>
									<div className="flex-1">
										<p className="text-sm font-medium">
											{displayTitle}
										</p>
										<p className="text-sm text-gray-500">
											${Number(it.price).toLocaleString()}
										</p>
									</div>
									<div className="flex items-center gap-2 bg-very-light-gray">
										<div
											onClick={() => decrease(it.id)}
											className="w-8 h-8 flex items-center justify-center rounded-md hover:text-burnt-orange cursor-pointer opacity-25"
										>
											-
										</div>
										<div className="min-w-[28px] text-center">
											{it.qty}
										</div>
										<div
											onClick={() => increase(it.id)}
											className="w-8 h-8 flex items-center justify-center rounded-md hover:text-burnt-orange cursor-pointer opacity-25"
										>
											+
										</div>
									</div>
								</div>
							)
						})
					)}
				</div>
				<div className="mt-6 flex flex-col gap-3">
					<div className="flex items-center justify-between text-sm text-gray-500">
						<span>TOTAL</span>
						<span className="font-bold text-lg">
							${Number(total).toLocaleString()}
						</span>
					</div>

					<Button className="w-full" onClick={handleCheckout}>
						CHECKOUT
					</Button>
				</div>
			</div>
		</div>
	)
}
