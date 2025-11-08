import Image from 'next/image'
import { Button } from './button'

interface CardAudioProps {
	icon: string
	text: string
	imageClassName?: string
}

export default function CardAudio({
	icon,
	text,
	imageClassName = '',
}: CardAudioProps) {
	return (
		<div className="flex flex-col gap-3 justify-center items-center p-10 rounded-lg">
			<div className="flex justify-center items-center bg-very-light-gray p-8 rounded-lg relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
				<Image
					src={icon}
					alt={text}
					className={imageClassName}
					fill
					style={{ objectFit: 'contain' }}
				/>
			</div>
			<div className="flex flex-col justify-center items-center">
				<p className="text-h6 tracking-[0.08rem] my-6 uppercase">
					{text}
				</p>
				<Button>See Product</Button>
			</div>
		</div>
	)
}
