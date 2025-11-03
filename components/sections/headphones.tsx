import AudioItem from '../ui/audioItem'

export default function Headphones() {
	return (
		<div className="pt-6 space-y-4">
			<AudioItem
				image={
					<picture>
						<source
							media="(min-width: 1024px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-1.png"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-2.png"
						/>
						<source
							media="(max-width: 767px)"
							srcSet="/pic/product-xx99-mark-two-headphones/image-gallery-3.png"
						/>
						<img
							src="/pic/product-xx99-mark-two-headphones/image-gallery-3.png"
							alt="Responsive"
						/>
					</picture>
				}
				title="XX99 Mark II Headphones"
				text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
				isNewProduct={true}
				link="/productDetail/Headphones1"
			/>
			<AudioItem
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
				className="lg:flex-row-reverse"
				link="/productDetail/Headphones2"
			/>
			<AudioItem
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
				link="/productDetail/Headphones3"
			/>
		</div>
	)
}
