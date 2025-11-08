interface AudioHeroProps {
	title: string
}

export default function AudioHero({ title }: AudioHeroProps) {
	return (
		<div className="flex justify-center items-center bg-black text-white w-full h-[17rem] mb-8">
			<h2 className="text-h2">{title}</h2>
		</div>
	)
}
