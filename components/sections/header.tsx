'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function Header(): JSX.Element {
	const [mobileOpen, setMobileOpen] = useState<boolean>(false)
	const { items, openCart } = useCart()
	const totalItems = items.reduce(
		(sum: number, item: { qty: number }) => sum + item.qty,
		0,
	)

	return (
		<div className="relative flex w-full items-center bg-dark p-8 pb-12">
			{mobileOpen && (
				<div className="fixed inset-0 z-10 bg-dark opacity-50 lg:hidden"></div>
			)}
			<div
				className={`relative z-30 mr-auto ml-2 block ${
					mobileOpen ? 'open' : ''
				}`}
				onClick={() => setMobileOpen(prev => !prev)}
			>
				{mobileOpen ? (
					<Image
						src="/icon-menu-close.svg"
						alt="Close menu"
						width={20}
						height={20}
						className="lg:hidden h-5 w-5"
					/>
				) : (
					<Image
						src="/icon-menu.svg"
						alt="Open menu"
						width={20}
						height={20}
						className="lg:hidden h-5 w-5"
					/>
				)}
			</div>
			<div className="z-30 mr-auto md:ml-8 md:w-full">
				<Image
					src="/audiophile.svg"
					alt="Audiophile logo"
					width={143}
					height={25}
					className="w-[8.9375rem]"
					priority
				/>
			</div>
			<nav
				className={`fixed left-0 top-0 z-20 h-full w-2/3 pl-6 pt-[9rem] bg-white lg:bg-dark lg:text-white lg:relative lg:pt-0 lg:w-auto lg:mr-20 text-gray ${
					mobileOpen ? 'block' : 'hidden lg:block'
				}`}
			>
				<ul className="flex flex-col items-center gap-6 lg:flex-row leading-6 md:gap-10 lg:mr-16">
					<li>
						<Link className="link" href="/">
							HOME
						</Link>
					</li>
					<li>
						<Link className="link" href="/headphones">
							HEADPHONES
						</Link>
					</li>
					<li>
						<Link className="link" href="/speakers">
							SPEAKERS
						</Link>
					</li>
					<li>
						<Link className="link" href="/earphones">
							EARPHONES
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className="relative md:ml-auto md:mr-1 z-30 cursor-pointer"
				onClick={openCart}
			>
				<Image
					src="/shape.svg"
					alt="Cart icon"
					width={40}
					height={40}
					className="min-w-[1.4375rem] lg:h-[2.5rem] lg:w-[2.5rem]"
				/>
				{totalItems > 0 && (
					<span className="absolute -top-2 -right-2 bg-burnt-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
						{totalItems}
					</span>
				)}
			</div>
		</div>
	)
}
