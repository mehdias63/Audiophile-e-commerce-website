import AudioDeviceControl from '@/components/sections/audioDeviceControl'
import FeaturesX99I from '@/components/sections/features/featuresX99I'
import InTheBoxX99I from '@/components/sections/inTheBox/inTheBoxX99I'
import ImagesX99I from '@/components/sections/picture/imagesX99I'
import ProductDetail from '@/components/sections/productDetail'
import ProductControl from '@/components/ui/productControl'

export default function ProductDetailXX99I() {
	return (
		<div className="p-12">
			<ProductDetail
				id="xx99-i"
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-xx99-mark-one-headphones/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-xx99-mark-one-headphones/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-xx99-mark-one-headphones/image-gallery-3.png"
						/>
						<img
							src="/pic/product-xx99-mark-one-headphones/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="XX99 Mark I Headphones"
				text="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
				price="$ 1,750"
			/>
			<div className="lg:flex">
				<FeaturesX99I />
				<InTheBoxX99I />
			</div>
			<ImagesX99I />
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
