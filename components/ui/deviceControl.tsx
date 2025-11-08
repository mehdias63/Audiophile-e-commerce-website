'use client'

import Image from 'next/image'
import Link from 'next/link'

interface DeviceControlProps {
	icon: string
	text: string
	imageClassName?: string
	link: string
}

export default function DeviceControl({
	icon,
	text,
	imageClassName = '',
	link,
}: DeviceControlProps) {
	return (
		<div className="relative p-4 pt-14">
			<div className="absolute w-full top-0 right-0 flex justify-center items-center">
				<Image
					src={icon}
					alt={text}
					width={120}
					height={120}
					className={imageClassName}
				/>
			</div>
			<div className="bg-very-light-gray flex flex-col gap-3 justify-center items-center p-10 rounded-lg">
				<p className="text-h6 tracking-[0.08rem] mb-2 uppercase mt-6">
					{text}
				</p>
				<Link
					href={link}
					className="group flex gap-3 items-center text-[0.8125rem] hover:text-burnt-orange cursor-pointer transition"
				>
					<p>Shop</p>
					<Image
						src="/cart/Path.svg"
						alt="arrow"
						width={8}
						height={12}
						className="transition-transform duration-200 group-hover:translate-x-1"
					/>
				</Link>
			</div>
		</div>
	)
}
