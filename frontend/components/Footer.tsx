'use client'

import { GitHub, Mail, Telegram, X } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="px-6 py-12 md:px-20 md:py-16 bg-amethyst-950 text-white">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
				{/* Logo y derechos */}
				<div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
					<Link href="/">
						<Image src="/logo.svg" alt="SAIJITAN Logo" width={240} height={27} />
					</Link>
					<p className="text-sm text-gray-300">
						© 2024 - XNeyMo <br />
						All rights reserved - XNeyMo (Neyan Montes)
					</p>
				</div>

				{/* Menú */}
				<nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right font-semibold *:hover:text-gray-400 *:ease-in-out *:duration-500">
					<Link href="/">Home</Link>
					<Link href="/landing#features">Features</Link>
					<Link href="/landing#htu">How to Use</Link>
					<Link href="/landing#about">About</Link>
				</nav>

				<div className="flex justify-center md:justify-end gap-6 *:hover:text-gray-400 *:ease-in-out *:duration-500">
					<Link href="https://github.com/XNeyMo" target="_blank">
						<GitHub fontSize="large" />
					</Link>
					<Link href="https://web.telegram.org/k/#@XNeyMo" target="_blank">
						<Telegram fontSize="large" />
					</Link>
					<Link href="mailto:xneymodev@gmail.com" target="_blank">
						<Mail fontSize="large" />
					</Link>
					<Link href="https://x.com/xneymodev" target="_blank">
						<X fontSize="large" />
					</Link>
				</div>
			</div>

			<div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
				Built by XNeyMo (Neyan Montes)
			</div>
		</footer>
	);
}
