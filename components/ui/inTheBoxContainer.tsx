import { ReactNode } from 'react'

interface InTheBoxContainerProps {
	children: ReactNode
}

export default function InTheBoxContainer({
	children,
}: InTheBoxContainerProps) {
	return (
		<div className="pt-6 md:grid md:grid-cols-2 lg:grid-cols-1 w-full">
			<h2 className="uppercase text-h5 mb-8 tracking-[0.05356rem]">
				in the box
			</h2>
			<div className="lg:mt-[-7rem]">{children}</div>
		</div>
	)
}
