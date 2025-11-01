'use client'
import React from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function CartModal() {
	const {
		items,
		isOpen,
		closeCart,
		increase,
		decrease,
		removeItem,
		clearCart,
		total,
	} = useCart()

	if (!isOpen) return null

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
					<div className="text-sm text-gray-500">
						<button
							onClick={clearCart}
							className="hover:underline disabled:opacity-40"
							disabled={items.length === 0}
						>
							Remove all
						</button>
					</div>
				</div>

				<div className="space-y-4 max-h-[420px] overflow-auto pr-2">
					{items.length === 0 && (
						<p className="text-sm text-gray-500">
							Your cart is empty.
						</p>
					)}

					{items.map(it => (
						<div key={it.id} className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-md bg-gray-100 flex-shrink-0 overflow-hidden">
								{it.image ? (
									<Image
										src={it.image}
										alt={it.title}
										width={48}
										height={48}
									/>
								) : (
									<div className="w-full h-full bg-gray-200" />
								)}
							</div>

							<div className="flex-1">
								<div className="text-sm font-medium">{it.title}</div>
								<div className="text-sm text-gray-500">
									${Number(it.price).toLocaleString()}
								</div>
							</div>

							<div className="flex items-center gap-2">
								<button
									onClick={() => decrease(it.id)}
									className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
								>
									-
								</button>
								<div className="min-w-[28px] text-center">
									{it.qty}
								</div>
								<button
									onClick={() => increase(it.id)}
									className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100"
								>
									+
								</button>
							</div>
						</div>
					))}
				</div>

				<div className="mt-6 flex flex-col gap-3">
					<div className="flex items-center justify-between text-sm text-gray-500">
						<span>TOTAL</span>
						<span className="font-bold text-lg">
							${Number(total).toLocaleString()}
						</span>
					</div>

					<button
						className="w-full bg-[#D87D4A] text-white py-3 rounded-md hover:opacity-95 transition"
						onClick={() => alert('Checkout placeholder')}
					>
						CHECKOUT
					</button>
				</div>
			</div>
		</div>
	)
}
