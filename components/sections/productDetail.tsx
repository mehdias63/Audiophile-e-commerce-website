'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

function getImageSrc(img) {
	if (!img) return null
	if (typeof img === 'string') return img
	return img.props?.src ?? null
}

export default function ProductDetail({
	id,
	image,
	text,
	title,
	price,
	isNewProduct = false,
}) {
	const numericPrice =
		parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0
	const [quantity, setQuantity] = useState(1)
	const { addToCart } = useCart()

	const handleIncrease = () => setQuantity(s => s + 1)
	const handleDecrease = () => setQuantity(s => (s > 1 ? s - 1 : 1))

	const handleAddToCart = () => {
		const product = {
			id,
			title,
			price: numericPrice,
			image: getImageSrc(image),
		}
		addToCart(product, quantity)
	}

	return (
		<div className="flex flex-col md:flex-row gap-3 md:gap-16 justify-center items-center py-10 rounded-lg">
			<div className="flex w-full justify-center items-center bg-very-light-gray p-8 rounded-lg">
				{typeof image === 'string' ? (
					<Image src={image} alt={title} width={300} height={300} />
				) : (
					image
				)}
			</div>

			<div className="flex flex-col justify-center items-center md:items-start">
				{isNewProduct && (
					<p className="text-body-m tracking-[0.625rem] text-burnt-orange mb-2">
						NEW PRODUCT
					</p>
				)}
				<h2 className="text-h4 uppercase">{title}</h2>
				<p className="text-[0.9375rem] leading-[1.5625rem] my-6 opacity-50">
					{text}
				</p>

				<p className="text-h6 my-5">
					${(numericPrice * quantity).toLocaleString()}
				</p>

				<div className="flex justify-center items-center gap-5">
					<div className="flex gap-5 justify-center items-center bg-very-light-gray py-3 px-5 rounded-lg">
						<button
							onClick={handleDecrease}
							className="w-6 text-lg font-bold"
						>
							-
						</button>
						<p className="min-w-[24px] text-center">{quantity}</p>
						<button
							onClick={handleIncrease}
							className="w-6 text-lg font-bold"
						>
							+
						</button>
					</div>

					<Button onClick={handleAddToCart}>ADD TO CART</Button>
				</div>
			</div>
		</div>
	)
}
