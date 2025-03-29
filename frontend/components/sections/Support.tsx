import { Coffee, GitHub } from "@mui/icons-material";
import Link from "next/link";
import { JSX } from "react";

export default function SupportSection() {
	return (
		<section
			className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10 lg:p-16"
			id="support"
		>
			<div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
				<h2 className="text-3xl sm:text-4xl font-bold">Support the Project</h2>

				<p className="text-base sm:text-lg">
					This is an open-source project hosted on free services. Your support helps keep it running and improving.
				</p>

				<p className="text-base sm:text-lg">
					Whether by contributing code, reporting issues, or sharing feedback, every little bit helps!
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
					<SupportButton
						href="https://github.com/XNeyMo/sjt"
						icon={<GitHub />}
						text="View on GitHub"
						bgClass="bg-linear-[135deg] from-[#FEECE3]/3 to-[#FFA9CC]/3 text-white"
						hoverClass="hover:from-[#FEECE3]/7 hover:to-[#FFA9CC]/7"
					/>

					<SupportButton
						href="https://buymeacoffee.com/xneymo"
						icon={<Coffee />}
						text="Buy Me a Coffee"
						bgClass="bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC]"
						hoverClass="hover:from-[#FFA9CC] hover:to-[#FEECE3]"
					/>
				</div>
			</div>

			<div className="w-full md:w-1/2 flex justify-center">
				<img
					src="/images/support-community.svg"
					alt="Support Community"
					className="w-full max-w-xs md:max-w-md lg:max-w-lg"
				/>
			</div>
		</section>
	);
}

interface SupportButtonProps {
	href: string;
	icon: JSX.Element;
	text: string;
	bgClass: string;
	hoverClass: string;
}

function SupportButton({
	href,
	icon,
	text,
	bgClass,
	hoverClass
}: SupportButtonProps) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`px-4 py-2 w-full sm:w-auto rounded-md flex items-center gap-3 text-black font-semibold transition-all duration-300 ${bgClass} ${hoverClass}`}
		>
			{icon}
			<p>{text}</p>
		</Link>
	);
}

