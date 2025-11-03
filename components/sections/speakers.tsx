import AudioItem from '../ui/audioItem'

export default function Speakers() {
	return (
		<div className="pt-6 space-y-4">
			<AudioItem
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
				title="ZX9 speaker"
				text="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
				isNewProduct={true}
				link="/productDetail/Speaker1"
			/>
			<AudioItem
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
				text="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
				className="lg:flex-row-reverse"
				link="/productDetail/Speaker2"
			/>
		</div>
	)
}
