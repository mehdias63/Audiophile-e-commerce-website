import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import FeaturesZx9 from '@/components/sections/features/featuresZx9'
import InTheBoxZx9 from '@/components/sections/inTheBox/inTheBoxZx9'
import ImagesZx9 from '@/components/sections/picture/imagesZx9'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailZX9() {
	return (
		<div className="p-12">
			<ProductDetail
				id="ZX9"
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-zx9-speaker/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-zx9-speaker/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-zx9-speaker/image-gallery-3.png"
						/>
						<img
							src="/pic/product-zx9-speaker/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="ZX9 SPEAKER"
				text="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
				price="$ 4,500"
				isNewProduct={true}
			/>
			<div className="lg:flex">
				<FeaturesZx9 />
				<InTheBoxZx9 />
			</div>
			<ImagesZx9 />
			<div className="grid grid-cols-1 md:grid-cols-3 py-8 mx-2 lg:mx-8">
				<ProductControl
					text="ZX7 SPEAKER "
					image={
						<picture>
							<source
								media="(min-width: 1024px)"
								srcSet="/pic/product-zx7-speaker/product/image-gallery-1.png"
							/>
							<source
								media="(min-width: 768px)"
								srcSet="/pic/product-zx7-speaker/product/image-gallery-2.png"
							/>
							<source
								media="(max-width: 767px)"
								srcSet="/pic/product-zx7-speaker/product/image-gallery-3.png"
							/>
							<img
								src="/pic/product-zx7-speaker/product/image-gallery-3.png"
								alt="Responsive"
							/>
						</picture>
					}
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
			</div>
			<AudioDeviceControl />
		</div>
	)
}
