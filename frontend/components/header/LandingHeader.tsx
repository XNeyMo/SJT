'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LandingHeader() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header
			className="
				w-[calc(100vw-5rem)] max-w-[calc(1366px-5rem)] h-[4.35rem] z-10
				fixed top-0 mx-10 my-2 px-10 py-3
				flex justify-between items-center
				bg-amethyst-200 rounded-2xl
			"
		>
			<Link href="/">
				<Image
					src="/logo.svg"
					alt="SAIJITAN Logo"
					width={144}
					height={27}
				/>
			</Link>

			<nav
				className={`
					fixed lg:static top-0 left-0 w-full lg:w-auto
					bg-white lg:bg-transparent shadow-md lg:shadow-none
					flex flex-col lg:flex-row gap-5 lg:gap-10
					font-semibold items-center
					transition-all duration-300
					${menuOpen ? "flex h-screen" : "hidden lg:flex"}
				`}
			>
				<button
					className="lg:hidden cursor-pointer p-2 rounded-lg focus:outline-none"
					onClick={() => setMenuOpen(false)}
				>
					<X size={28} />
				</button>

				<Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
				<Link href="#features" onClick={() => setMenuOpen(false)}>Features</Link>
				<Link href="#htu" onClick={() => setMenuOpen(false)}>How to Use</Link>
				<Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
				<Link href="#support" onClick={() => setMenuOpen(false)}>Support</Link>
			</nav>

			<div className="flex gap-5 items-center">
				<button
					className="lg:hidden cursor-pointer p-2 rounded-lg focus:outline-none"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				<Link href="/">
					<button
						className="
						px-4 py-2 lg:px-5 lg:py-2 cursor-pointer
						bg-amethyst-500 rounded-xl hover:bg-amethyst-800
						font-bold text-white
						ease-in-out duration-500
					"
					> Use It </button>
				</Link>
			</div>
		</header>
	);
}
