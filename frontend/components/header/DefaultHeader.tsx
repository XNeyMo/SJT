'use client'

import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
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

			<Link href="/landing">Learn More</Link>
		</header>
	);
}
