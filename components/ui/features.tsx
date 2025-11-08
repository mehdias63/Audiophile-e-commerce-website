interface FeaturesProps {
	text: string
	text2: string
}
export default function Features({ text, text2 }: FeaturesProps) {
	return (
		<div className="lg:w-3/4">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				FEATURES
			</h2>
			<p className="text-[0.9375rem] leading-[1.5625rem]  my-6 opacity-50">
				{text}
			</p>
			<p className="text-[0.9375rem] leading-[1.5625rem]  my-6 opacity-50">
				{text2}
			</p>
		</div>
	)
}
