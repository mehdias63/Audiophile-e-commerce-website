interface ImageItemProps {
	icon: string
	icon2: string
	icon3: string
}
export default function ImageItem({
	icon,
	icon2,
	icon3,
}: ImageItemProps) {
	return (
		<div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
			<div>{icon}</div>
			<div>{icon2}</div>
			<div className="md:row-start-1 md:col-start-2 md:row-span-2">
				{icon3}
			</div>
		</div>
	)
}
