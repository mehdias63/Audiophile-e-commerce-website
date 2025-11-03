import Link from 'next/link'
import { Button } from './button'

export default function ProductControl({ text, image, link }) {
	return (
		<div className="p-4 pt-14 flex flex-col justify-center items-center">
			<div className="flex justify-center items-center bg-very-light-gray p-10 lg:px-14 rounded-lg min-w-[20.4375rem] md:min-w-[12.9375rem] md:min-h-[19.875rem] lg:w-full">
				{image}
			</div>
			<p className="text-h6 tracking-[0.08rem] mb-2 uppercase mt-6">
				{text}
			</p>
			<Link href={link}>
				<Button className="mt-4">See Product</Button>
			</Link>
		</div>
	)
}
