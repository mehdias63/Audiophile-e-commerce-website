import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import FeaturesYx1 from '@/components/sections/features/featuresYx1'
import InTheBoxYx1 from '@/components/sections/inTheBox/inTheBoxYx1'
import ImagesYx1 from '@/components/sections/picture/imagesYx1'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailYx1() {
	return (
		<div className="p-12">
			<ProductDetail
				id="YX1"
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-yx1-earphones/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-yx1-earphones/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-yx1-earphones/image-gallery-3.png"
						/>
						<img
							src="/pic/product-yx1-earphones/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="YX1 WIRELESS EARPHONES"
				text="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
				price="$ 599"
				isNewProduct={true}
			/>
			<div className="lg:flex">
				<FeaturesYx1 />
				<InTheBoxYx1 />
			</div>
			<ImagesYx1 />
			<div className="grid grid-cols-1 md:grid-cols-3 py-8 mx-2 lg:mx-[5rem]">
				<ProductControl
					text="XX99 MARK I"
					image={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/pic/product-xx99-mark-one-headphones/product/image-gallery-1.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/pic/product-xx99-mark-one-headphones/product/image-gallery-2.png"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/pic/product-xx99-mark-one-headphones/product/image-gallery-3.png"
							/>
							<img
								src="/pic/product-xx99-mark-one-headphones/product/image-gallery-3.png"
								alt="Responsive"
								className="w-full h-full object-cover"
							/>
						</picture>
					}
				/>
				<ProductControl
					text="XX59"
					image={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/pic/product-xx59-headphones/product/image-gallery-1.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/pic/product-xx59-headphones/product/image-gallery-2.png"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/pic/product-xx59-headphones/product/image-gallery-3.png"
							/>
							<img
								src="/pic/product-xx59-headphones/product/image-gallery-3.png"
								alt="Responsive"
								className="w-full h-full object-cover"
							/>
						</picture>
					}
				/>
				<ProductControl
					text="ZX9 SPEAKER"
					image={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/pic/product-zx9-speaker/product/image-gallery-1.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/pic/product-zx9-speaker/product/image-gallery-2.png"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/pic/product-zx9-speaker/product/image-gallery-3.png"
							/>
							<img
								src="/pic/product-zx9-speaker/product/image-gallery-3.png"
								alt="Responsive"
							/>
						</picture>
					}
				/>
			</div>
			<AudioDeviceControl />
		</div>
	)
}
