'use client'

import { useState, ReactNode } from 'react'
import { Button } from '../ui/button'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

// 🔸 نوع پارامتر ورودی تابع کمکی getImageSrc مشخص شد
function getImageSrc(img: string | ReactNode): string | null {
	if (!img) return null
	if (typeof img === 'string') return img
	// ReactNode ممکن است Image یا JSX.Element باشد
	const element = img as { props?: { src?: string } }
	return element?.props?.src ?? null
}

// 🔸 تعریف props با TypeScript interface
interface ProductDetailProps {
	id: string | number
	image: string | ReactNode
	text: string
	title: string
	price: number | string
	isNewProduct?: boolean
}

// 🔸 تایپ کامپوننت: خروجی JSX.Element
export default function ProductDetail({
	id,
	image,
	text,
	title,
	price,
	isNewProduct = false,
}: ProductDetailProps): JSX.Element {
	// 🔸 مقدار price را به عدد تبدیل می‌کنیم، حتی اگر رشته باشد
	const numericPrice =
		parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0

	const [quantity, setQuantity] = useState<number>(1)
	const { addToCart } = useCart()

	const handleIncrease = (): void => setQuantity(q => q + 1)
	const handleDecrease = (): void =>
		setQuantity(q => (q > 1 ? q - 1 : 1))

	const handleAddToCart = (): void => {
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
			{/* ✅ بخش تصویر */}
			<div className="flex w-full justify-center items-center bg-very-light-gray p-8 rounded-lg">
				{typeof image === 'string' ? (
					<Image
						src={image}
						alt={title}
						width={300}
						height={300}
						className="object-contain"
					/>
				) : (
					image
				)}
			</div>

			{/* ✅ جزئیات محصول */}
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

				{/* ✅ کنترل تعداد + دکمه افزودن به سبد */}
				<div className="flex justify-center items-center gap-5">
					{/* بخش افزایش/کاهش تعداد */}
					<div className="flex justify-center items-center bg-very-light-gray py-3 px-4 gap-x-6">
						{/* 🔹 به جای <button> از shadcn <Button> استفاده می‌کنیم */}
						<div
							onClick={handleDecrease}
							className="text-lg font-bold hover:text-burnt-orange px-2 cursor-pointer opacity-25"
						>
							-
						</div>

						<p className="text-center min-w-4">{quantity}</p>

						<div
							onClick={handleIncrease}
							className="text-lg font-bold hover:text-burnt-orange px-2 cursor-pointer opacity-25"
						>
							+
						</div>
					</div>

					<Button onClick={handleAddToCart}>ADD TO CART</Button>
				</div>
			</div>
		</div>
	)
}
