interface InTheBoxItemProps {
	text: string
	number: number
}
export default function InTheBoxItem({
	text,
	number,
}: InTheBoxItemProps) {
	return (
		<div className="flex gap-5 my-2">
			<p className="text-body-m leading-[1.5625rem] font-bold text-burnt-orange">
				{number}
			</p>
			<p className="opacity-50 text-body-m leading-[1.5625rem]">
				{text}
			</p>
		</div>
	)
}
