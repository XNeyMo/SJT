import Link from "next/link";

export default function Navigation() {
	return (
		<ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
			{[
				{ href: "/landing", label: "Home" },
				{ href: "/landing#features", label: "Features" },
				{ href: "/landing#htu", label: "How to Use" },
				{ href: "/landing#support", label: "Support" },
			].map(({ href, label }) => (
				<li key={href}>
					<Link
						href={href}
						className="px-3 py-1 hover:bg-linear-[135deg] hover:from-[#FEECE3] hover:via-[#FEAFAE] hover:to-[#FFA9CC] hover:text-transparent bg-clip-text transition ease-in-out duration-500"
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
}
