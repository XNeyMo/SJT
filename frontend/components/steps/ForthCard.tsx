import { useRouter } from "next/navigation";
import { LessHoursAPI } from "../../hooks/schedule/less-hours";

interface ForthCardProps {
	subjects: any;
}

export default function ForthCard({
	subjects,
}: ForthCardProps) {
	const router = useRouter();

	const sendResume = async () => {
		try {
			const response = await LessHoursAPI.generateSchedule(subjects);
			localStorage.setItem("schedule", JSON.stringify(response));
		} catch (error) {
			console.error("Error fetching resume:", error);
		} finally {
			router.push("/schedule");
		}
	}

	return (
		<div
			className="
				p-5 flex flex-col gap-5
				bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
			"
		>
			<h3 className="text-sm font-bold">Resume</h3>

			<div className="flex flex-col gap-2">
				{subjects.map((subject: any, index: number) => (
					<div
						key={index}
						className="
							flex items-center justify-between
							bg-white/5 rounded-md
							px-3 py-2
						"
					>
						<p className="text-sm">{subject.name}</p>
						<p className="text-sm">{subject.courses.length} courses</p>
					</div>
				))}
			</div>

			<div className="flex justify-end">
				<button
					onClick={sendResume}
					className="
						px-4 py-2 w-1/4
						bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-md
						hover:from-[#FFA9CC] hover:to-[#FEECE3]
						text-black font-semibold
						ease-in-out duration-500
						cursor-pointer
					"
				>
					Send
				</button>
			</div>
		</div>
	)
}
