import AudioItem from '../ui/audioItem'

export default function Earphones() {
	return (
		<div className="pt-6">
			<AudioItem
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
				isNewProduct={true}
				link="/productDetail/Earphone"
			/>
		</div>
	)
}
