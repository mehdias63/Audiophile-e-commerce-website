'use client'

import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	RadioGroup,
	RadioGroupItem,
} from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState, ChangeEvent } from 'react'
import OrderConfirmationModal from '@/components/sections/OrderConfirmationModal'

interface ProductImage {
	id: string
	image: string
}

interface FormData {
	name: string
	email: string
	phone: string
	address: string
	zip: string
	city: string
	country: string
	emoneyNum: string
	emoneyPin: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

interface CartItem {
	id: string
	title: string
	price: number
	qty: number
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

export default function CheckoutPage() {
	const router = useRouter()
	const { items, total } = useCart() as {
		items: CartItem[]
		total: number
	}

	const [payment, setPayment] = useState<'e-money' | 'cash'>(
		'e-money',
	)
	const [showConfirm, setShowConfirm] = useState(false)
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		address: '',
		zip: '',
		city: '',
		country: '',
		emoneyNum: '',
		emoneyPin: '',
	})
	const [errors, setErrors] = useState<FormErrors>({})

	const shipping = 50
	const vat = total * 0.2
	const grandTotal = total + shipping + vat

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target
		setFormData(prev => ({ ...prev, [id]: value }))
		setErrors(prev => ({ ...prev, [id]: '' }))
	}

	const validate = (): boolean => {
		const newErrors: FormErrors = {}

		Object.entries(formData).forEach(([key, value]) => {
			if (
				!value &&
				(payment === 'e-money' ||
					(key !== 'emoneyNum' && key !== 'emoneyPin'))
			) {
				newErrors[key as keyof FormData] =
					'This field cannot be empty'
			}
		})

		if (
			formData.email &&
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
		) {
			newErrors.email = 'Wrong format'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = () => {
		if (validate()) {
			setShowConfirm(true)
		}
	}

	return (
		<section className="bg-[#F1F1F1] min-h-screen py-10 px-6 md:px-10 lg:px-20">
			<Button variant="ghost" onClick={() => router.back()}>
				Go Back
			</Button>

			<div className="grid lg:grid-cols-[2fr_1fr] gap-8">
				<Card className="bg-white p-8 rounded-lg shadow-sm">
					<CardHeader>
						<h1 className="text-2xl font-bold tracking-wide uppercase mb-4">
							Checkout
						</h1>
					</CardHeader>
					<CardContent>
						<section className="mb-8">
							<h2 className="text-burnt-orange uppercase text-xs font-bold mb-4">
								Billing Details
							</h2>
							<div className="grid md:grid-cols-2 gap-4">
								{(
									['name', 'email', 'phone'] as (keyof FormData)[]
								).map(field => (
									<div key={field} className="relative">
										<div className="flex justify-between items-center">
											<Label
												htmlFor={field}
												className={`${errors[field] ? 'text-red-500' : 'text-gray-700'}`}
											>
												{field === 'name'
													? 'Name'
													: field === 'email'
														? 'Email Address'
														: 'Phone Number'}
											</Label>
											{errors[field] && (
												<span className="text-xs text-red-500 font-medium">
													{errors[field]}
												</span>
											)}
										</div>
										<Input
											id={field}
											value={formData[field]}
											onChange={handleChange}
											placeholder={
												field === 'name'
													? 'Alexei Ward'
													: field === 'email'
														? 'alexei@mail.com'
														: '+1 202-555-0136'
											}
											className={`mt-1 ${
												errors[field]
													? 'border-red-500 focus-visible:ring-red-500'
													: ''
											}`}
										/>
									</div>
								))}
							</div>
						</section>
						<section className="mb-8">
							<h2 className="text-burnt-orange uppercase text-xs font-bold mb-4">
								Shipping Info
							</h2>
							<div className="grid gap-4">
								{(
									[
										'address',
										'zip',
										'city',
										'country',
									] as (keyof FormData)[]
								).map(field => (
									<div key={field}>
										<div className="flex justify-between items-center">
											<Label
												htmlFor={field}
												className={`${errors[field] ? 'text-red-500' : 'text-gray-700'}`}
											>
												{field === 'address'
													? 'Address'
													: field === 'zip'
														? 'ZIP Code'
														: field === 'city'
															? 'City'
															: 'Country'}
											</Label>
											{errors[field] && (
												<span className="text-xs text-red-500 font-medium">
													{errors[field]}
												</span>
											)}
										</div>
										<Input
											id={field}
											value={formData[field]}
											onChange={handleChange}
											placeholder={
												field === 'address'
													? '1137 Williams Avenue'
													: field === 'zip'
														? '10001'
														: field === 'city'
															? 'New York'
															: 'United States'
											}
											className={`mt-1 ${
												errors[field]
													? 'border-red-500 focus-visible:ring-red-500'
													: ''
											}`}
										/>
									</div>
								))}
							</div>
						</section>
						<section>
							<h2 className="text-burnt-orange uppercase text-xs font-bold mb-4">
								Payment Details
							</h2>
							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<Label>Payment Method</Label>
								<RadioGroup
									value={payment}
									onValueChange={value =>
										setPayment(value as 'e-money' | 'cash')
									}
									className="grid gap-3"
								>
									<div className="flex items-center space-x-2 border rounded-md p-3">
										<RadioGroupItem value="e-money" id="e-money" />
										<Label htmlFor="e-money">e-Money</Label>
									</div>
									<div className="flex items-center space-x-2 border rounded-md p-3">
										<RadioGroupItem value="cash" id="cash" />
										<Label htmlFor="cash">Cash on Delivery</Label>
									</div>
								</RadioGroup>
							</div>

							{payment === 'e-money' && (
								<div className="grid md:grid-cols-2 gap-4">
									{(
										['emoneyNum', 'emoneyPin'] as (keyof FormData)[]
									).map(field => (
										<div key={field}>
											<div className="flex justify-between items-center">
												<Label
													htmlFor={field}
													className={`${errors[field] ? 'text-red-500' : 'text-gray-700'}`}
												>
													{field === 'emoneyNum'
														? 'e-Money Number'
														: 'e-Money PIN'}
												</Label>
												{errors[field] && (
													<span className="text-xs text-red-500 font-medium">
														{errors[field]}
													</span>
												)}
											</div>
											<Input
												id={field}
												value={formData[field]}
												onChange={handleChange}
												placeholder={
													field === 'emoneyNum' ? '238521993' : '6891'
												}
												className={`mt-1 ${
													errors[field]
														? 'border-red-500 focus-visible:ring-red-500'
														: ''
												}`}
											/>
										</div>
									))}
								</div>
							)}
						</section>
					</CardContent>
				</Card>

				<Card className="bg-white p-6 rounded-lg shadow-sm h-fit">
					<h3 className="text-lg font-bold mb-6">Summary</h3>
					<div className="space-y-4 max-h-[300px] overflow-auto">
						{items.map(it => {
							const found = productImages.find(p => p.id === it.id)
							const imageSrc = found
								? found.image
								: '/images/placeholder.png'
							return (
								<div
									key={it.id}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
											<Image
												src={imageSrc}
												alt={it.title}
												width={48}
												height={48}
												className="object-cover"
											/>
										</div>
										<div>
											<p className="text-sm font-medium">
												{it.title}
											</p>
											<p className="text-sm text-gray-500">
												${Number(it.price).toLocaleString()}
											</p>
										</div>
									</div>
									<p className="text-gray-500 text-sm">x{it.qty}</p>
								</div>
							)
						})}
					</div>

					<div className="mt-6 space-y-2 text-sm">
						<div className="flex justify-between text-gray-500">
							<span>Total</span>
							<span className="font-bold">
								${total.toLocaleString()}
							</span>
						</div>
						<div className="flex justify-between text-gray-500">
							<span>Shipping</span>
							<span className="font-bold">${shipping}</span>
						</div>
						<div className="flex justify-between text-gray-500">
							<span>VAT (Included)</span>
							<span className="font-bold">${vat.toFixed(0)}</span>
						</div>
						<div className="flex justify-between text-burnt-orange mt-4 text-base font-bold">
							<span>Grand Total</span>
							<span>${grandTotal.toFixed(0)}</span>
						</div>
					</div>

					<Button
						className="w-full mt-6 bg-burnt-orange text-white hover:opacity-90"
						onClick={handleSubmit}
					>
						CONTINUE & PAY
					</Button>
				</Card>
			</div>

			<OrderConfirmationModal
				isOpen={showConfirm}
				onClose={() => setShowConfirm(false)}
			/>
		</section>
	)
}
