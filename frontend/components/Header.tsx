import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header
			className="mx-6 md:mx-24 my-4 md:my-8 px-5 py-3 bg-gradient-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl flex justify-between items-center relative"
		>
			<Link href="/">
				<Image src="/icons/logo.svg" alt="logo" height={30} width={40} className="h-6 w-auto" />
			</Link>

			<nav className="hidden lg:block">
				<Navigation />
			</nav>

			<Link href="/contact" className="hidden lg:block">
				<button
					className="px-5 py-1 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-3xl hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold transition duration-500"
				>
					Contact Us
				</button>
			</Link>

			<button
				className="lg:hidden cursor-pointer"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
			</button>

			{menuOpen && (
				<div
					className="absolute top-16 left-0 w-full bg-black border border-white/10 shadow-lg rounded-b-3xl flex flex-col items-center gap-5 py-6 transition-all duration-500"
				>
					<Navigation />
					<Link href="/contact">
						<button
							className="px-5 py-2 bg-gradient-to-r from-[#FEECE3] to-[#FFA9CC] rounded-3xl hover:from-[#FFA9CC] hover:to-[#FEECE3] text-black font-semibold transition duration-500"
						>
							Contact Us
						</button>
					</Link>
				</div>
			)}
		</header>
	);
}
