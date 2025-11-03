import Link from 'next/link'
import { Button } from '../ui/button'

export default function Hero() {
	return (
		<div className="relative w-full flex flex-col justify-center items-center lg:items-start gap-12 text-white bg-dark pt-[6rem] sm:pt-[8rem] pb-[4rem] md:pb-[5rem] lg:pt-[4rem]">
			<picture>
				<source
					media="(min-width: 1024px)"
					srcSet="/home/desktop/image-hero.jpg"
				/>
				<source
					media="(min-width: 768px)"
					srcSet="/home/tablet/image-header.jpg"
				/>
				<source
					media="(max-width: 767px)"
					srcSet="/home/mobile/image-header.jpg"
				/>
				<img
					src="/home/mobile/image-header.jpg"
					alt="Responsive"
					className="absolute w-full h-full z-0 inset-0 object-cover"
				/>
			</picture>
			<div className="z-10 flex flex-col gap-8 lg:pl-[5rem] justify-center lg:justify-start items-center lg:items-start">
				<p className="opacity-[0.4964] uppercase mt-[8.5rem] sm:mt-[5rem] md:mt-4 lg:mt-24 tracking-[0.625rem]">
					NEW PRODUCT
				</p>
				<h2 className="text-4xl uppercase font-bold leading-10 tracking-[0.0803] md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125rem] text-white">
					XX99 Mark II <br /> HeadphoneS
				</h2>
				<p className="opacity-[0.75] max-w-[21.812rem] text-center text-[0.9375rem] leading-6">
					Experience natural, lifelike audio and exceptional build
					quality made for the passionate music enthusiast.
				</p>
				<Link href="/productDetail/Headphones1">
					<Button>See Product</Button>
				</Link>
			</div>
		</div>
	)
}
