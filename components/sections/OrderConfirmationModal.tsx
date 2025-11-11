'use client'

import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const productImages = [
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

export default function OrderConfirmationModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean
	onClose: () => void
}) {
	const { items, total, clearCart } = useCart()
	const router = useRouter()

	if (!isOpen) return null

	const firstItem = items[0]
	const found = firstItem
		? productImages.find(p => p.id === firstItem.id)
		: null
	const imageSrc = found ? found.image : '/images/placeholder.png'

	const otherCount = items.length > 1 ? items.length - 1 : 0

	const handleBackHome = () => {
		clearCart()
		onClose()
		router.push('/')
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="bg-white rounded-lg shadow-2xl max-w-md w-[90%] p-8 text-center relative"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
					>
						<div className="flex justify-center mb-6">
							<div className="bg-burnt-orange rounded-full p-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
								>
									<path
										fill="none"
										stroke="#FFF"
										strokeWidth="2"
										d="M1 9.5l6 6L19 4"
									/>
								</svg>
							</div>
						</div>

						<h2 className="text-2xl font-bold mb-2 uppercase">
							Thank you for your order
						</h2>
						<p className="text-gray-500 mb-6">
							You will receive an email confirmation shortly.
						</p>
						<div className="flex flex-col md:flex-row bg-very-light-gray rounded-lg overflow-hidden mb-6">
							<div className="flex-1 p-4">
								{firstItem && (
									<div className="flex items-center gap-4 border-b border-light-gray pb-4">
										<div className="w-12 h-12 rounded-md overflow-hidden bg-very-light-gray flex-shrink-0">
											<Image
												src={imageSrc}
												alt={firstItem.title}
												width={48}
												height={48}
												className="object-cover"
											/>
										</div>
										<div className="text-left">
											<p className="text-sm font-medium">
												{firstItem.title}
											</p>
											<p className="text-sm opacity-50">
												${Number(firstItem.price).toLocaleString()}
											</p>
										</div>
										<p className="ml-auto opacity-50 text-sm">
											x{firstItem.qty}
										</p>
									</div>
								)}
								{otherCount > 0 && (
									<p className="text-center text-xs opacity-50 mt-3">
										and {otherCount} other item
										{otherCount > 1 ? 's' : ''}
									</p>
								)}
							</div>
							<div className="bg-black text-white flex flex-col justify-center items-start p-4 md:w-1/2 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
								<p className="text-sm uppercase opacity-50">
									Grand Total
								</p>
								<p className="text-lg font-bold">
									${Number(total).toLocaleString()}
								</p>
							</div>
						</div>

						<Button
							onClick={handleBackHome}
							className="w-full bg-burnt-orange text-white hover:opacity-90 py-3 rounded-md"
						>
							BACK TO HOME
						</Button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
