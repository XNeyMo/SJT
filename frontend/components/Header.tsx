import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header
			className="
				w-[calc(100vw-5rem)]
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
				className="
					flex gap-10
					font-semibold *:hover:text-amethyst-500
					*:ease-in-out *:duration-500
				"
			>
				<Link href="/">Home</Link>
				<Link href="#features">Features</Link>
				<Link href="#htu">How to Use</Link>
				<Link href="#about">About</Link>
			</nav>

			<Link href="/schedule">
				<button
					className="
						px-5 py-2
						bg-amethyst-500 rounded-xl hover:bg-amethyst-800
						font-bold text-white
						ease-in-out duration-500
					"
				> Use It </button>
			</Link>
		</header>
	);
}
