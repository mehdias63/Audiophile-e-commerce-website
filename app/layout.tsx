import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import About from '@/components/sections/about'
import { CartProvider } from '@/context/CartContext'
import CartModal from '@/components/CartModal'

const man = Manrope({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Audiophile-e-commerce-website',
	description: 'A Frontend Mentor challenge',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className={`${man.className} bg-pure-snow max-w-[90rem] mx-auto`}
			>
				<CartProvider>
					<Header />
					<main>
						{children}
						<About />
					</main>
					<Footer />
					<CartModal />
				</CartProvider>
			</body>
		</html>
	)
}
