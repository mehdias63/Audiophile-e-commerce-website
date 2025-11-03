import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import FeaturesX59 from '@/components/sections/features/featuresX59'
import InTheBoxX59 from '@/components/sections/inTheBox/inTheBoxX59'
import ImagesX59 from '@/components/sections/picture/imagesX59'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailXX59() {
	return (
		<div className="p-12">
			<ProductDetail
				id="XX59"
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-xx59-headphones/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-xx59-headphones/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-xx59-headphones/image-gallery-3.png"
						/>
						<img
							src="/pic/product-xx59-headphones/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="XX59 Headphones"
				text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
				price="$ 899"
			/>
			<div className="lg:flex">
				<FeaturesX59 />
				<InTheBoxX59 />
			</div>
			<ImagesX59 />
			<div className="grid grid-cols-1 md:grid-cols-3 py-8 mx-2 lg:mx-[5rem]">
				<ProductControl
					text="XX99 MARK II"
					image={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/pic/product-xx99-mark-two-headphones/product/image-gallery-1.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/pic/product-xx99-mark-two-headphones/product/image-gallery-2.png"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/pic/product-xx99-mark-two-headphones/product/image-gallery-3.png"
							/>
							<img
								src="/pic/product-xx99-mark-two-headphones/product/image-gallery-3.png"
								alt="Responsive"
								className="w-full h-full object-cover"
							/>
						</picture>
					}
					link="/productDetail/Headphones1"
				/>
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
					link="/productDetail/Headphones2"
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
					link="/productDetail/Speaker1"
				/>
			</div>
			<AudioDeviceControl />
		</div>
	)
}
