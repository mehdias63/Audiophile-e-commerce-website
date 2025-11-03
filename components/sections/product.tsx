import { Button } from '../ui/button'
import Link from 'next/link'

export default function Product() {
	return (
		<section className="relative bg-burnt-orange text-white flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-40 p-6 mx-6 lg:mx-40 mb-6 lg:pb-0 overflow-hidden rounded-lg">
			<div className="absolute top-5 md:top-[-5.2rem] lg:top-[8rem] lg:left-[9rem] w-[17.4375rem] md:w-[29.5rem] h-[17.4375rem] md:h-[29.5rem] rounded-full border-[1px] border-ice opacity-50"></div>
			<div className="absolute top-0 md:top-[-7.2rem] lg:top-[6rem] lg:left-[7rem] w-80 md:w-[33.875rem] h-80 md:h-[33.875rem] rounded-full border-[1px] border-ice opacity-50"></div>
			<div className="absolute top-[-8.5rem] sm:top-[-18rem] md:top-[-21.2rem] lg:top-[-7rem] lg:left-[-5.5rem] w-[34.875rem] h-[34.875rem] sm:w-[47rem] sm:h-[47rem] md:w-[59rem] md:h-[59rem] rounded-full border-[1px] border-ice opacity-50"></div>
			<div className="md:mt-[-2rem] lg:z-10">
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet="/cart/image131.png"
					/>
					<source
						media="(min-width: 768px)"
						srcSet="/cart/image132.png"
					/>
					<source
						media="(max-width: 767px)"
						srcSet="/cart/image13.png"
					/>
					<img src="/cart/image131.png" alt="Responsive" />
				</picture>
			</div>
			<div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-3 lg:gap-6 lg:z-10">
				<h3 className="text-[2rem] md:text-[3.5rem] font-bold leading-10 md:leading-[3.625rem] tracking-[0.08rem] md:tracking-[.125rem] mt-9 md:mt-2 lg:mt-[-7rem] uppercase">
					ZX9
					<br /> SPEAKER
				</h3>
				<p className="max-w-[17.5rem] md:max-w-[21.875rem] text-[.9375rem] leading-[1.5625rem]">
					Upgrade to premium speakers that are phenomenally built to
					deliver truly remarkable sound.
				</p>
				<Link href="/productDetail/Speaker1">
					<Button
						variant="secondary"
						className="text-[.8125rem] font-bold uppercase tracking-[0.0625rem] mt-4"
					>
						See Product
					</Button>
				</Link>
			</div>
		</section>
	)
}
