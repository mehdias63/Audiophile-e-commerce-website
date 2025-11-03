import Link from 'next/link'
import { Button } from '../ui/button'

export default function SleekProduct() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 pt-6 lg:px-40">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet="/home/desktop/image-earphones-yx1.jpg"
				/>
				<source
					media="(min-width: 768px)"
					srcSet="/home/tablet/image-earphones-yx1.jpg"
				/>
				<source
					media="(max-width: 767px)"
					srcSet="/home/mobile/image-earphones-yx1.jpg"
				/>
				<img
					src="/home/mobile/image-earphones-yx1.jpg"
					alt="earphones"
					className="rounded-lg w-full h-full object-cover"
				/>
			</picture>
			<div className="p-[5rem] flex flex-col justify-center items-start gap-8 bg-very-light-gray rounded-lg">
				<h4 className="text-h4 tracking-[0.125rem]">YX1 EARPHONES</h4>
				<Link href="productDetail/Earphone">
					<Button className="bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white">
						See Product
					</Button>
				</Link>
			</div>
		</div>
	)
}
