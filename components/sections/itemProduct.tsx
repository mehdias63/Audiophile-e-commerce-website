import Link from 'next/link'
import { Button } from '../ui/button'

export default function ItemProduct() {
	return (
		<div className="grid *:col-start-1 *:row-start-1 px-6 lg:px-40 w-full text-black">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet="/home/desktop/image-speaker-zx7.jpg"
				/>
				<source
					media="(min-width: 768px)"
					srcSet="/home/tablet/image-speaker-zx7.jpg"
				/>
				<source
					media="(max-width: 767px)"
					srcSet="/home/mobile/image-speaker-zx7.jpg"
				/>
				<img
					src="/home/mobile/image-speaker-zx7.jpg"
					alt="speaker"
					className="w-full object-cover rounded-lg"
				/>
			</picture>
			<div className="z-10 p-10 flex flex-col justify-center items-start gap-8">
				<h4 className="text-h4 tracking-[0.125rem]">ZX7 SPEAKER</h4>
				<Link href="/productDetail/Speaker2">
					<Button className="bg-transparent border-[1px] border-black text-black hover:bg-black hover:text-white">
						See Product
					</Button>
				</Link>
			</div>
		</div>
	)
}
