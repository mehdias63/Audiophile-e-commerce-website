import * as React from 'react'
import { Input } from './input1'
import { cn } from '@/lib/utils'
export default function InputWithError({ error, text }) {
	return (
		<div className="">
			<div className="flex justify-between items-center">
				<label
					className={cn(
						'text-[.75rem]',
						error ? 'text-dark-red' : '',
					)}
				>
					{text}
				</label>
				{error && (
					<p className="text-dark-red text-[.75rem] mr-1">{error}</p>
				)}
			</div>
			<Input
				type="text"
				placeholder="Text Field Empty"
				className={cn(
					'pr-14 pl-9 py-3 text-body-m',
					error ? 'border-dark-red placeholder:text-transparent' : '',
				)}
			/>
		</div>
	)
}
