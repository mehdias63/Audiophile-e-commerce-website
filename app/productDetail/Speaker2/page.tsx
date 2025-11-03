import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import FeaturesZx7 from '@/components/sections/features/featuresZx7'
import InTheBoxZx7 from '@/components/sections/inTheBox/inTheBoxZx7'
import ImagesZx7 from '@/components/sections/picture/imagesZx7'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailZX7() {
	return (
		<div className="p-12">
			<ProductDetail
				id="ZX7"
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-zx7-speaker/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-zx7-speaker/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-zx7-speaker/image-gallery-3.png"
						/>
						<img
							src="/pic/product-zx7-speaker/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="ZX7 SPEAKER"
				text="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
				price="$ 3,500"
			/>
			<div className="lg:flex">
				<FeaturesZx7 />
				<InTheBoxZx7 />
			</div>
			<ImagesZx7 />
			<div className="grid grid-cols-1 md:grid-cols-3 py-8 mx-2 lg:mx-[5rem]">
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
					link="/productDetail/Headphones3"
				/>
			</div>
			<AudioDeviceControl />
		</div>
	)
}
