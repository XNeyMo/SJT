import { Days } from "@constants/days";

interface DaysProps {
	selectedDays: string[];
	toggleDay: any;
}

export default function DaysGrid({
	selectedDays,
	toggleDay,
}: DaysProps) {
	return (
		<div className="grid grid-cols-3 gap-2">
			{Days.map((day) => (
				<div
					key={day.id}
					className="flex items-center gap-2"
				>
					<input
						className="hidden"
						type="checkbox"
						id={day.id}
						name={day.name}
						checked={selectedDays.includes(day.id)}
						onChange={() => toggleDay(day.id)}
						value={day.id}
					/>

					<label
						htmlFor={day.id}
						className={`
							px-4 py-2 rounded-md
							font-semibold w-full text-center
							ease-in-out duration-500
							cursor-pointer
							${selectedDays.includes(day.id)
								? 'bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] text-black'
								: 'bg-linear-[135deg] from-[#FEECE3]/3 to-[#FFA9CC]/3 hover:bg-linear-[135deg] hover:from-[#FEECE3]/7 hover:to-[#FFA9CC]/7 text-white'}
						`}
					>
						{day.name}
					</label>
				</div>
			))}
		</div>
	)
}
