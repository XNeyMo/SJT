'use client';

import { useState } from "react";
import { LessHoursAPI } from "../hooks/schedule/less-hours";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";

export default function ImportFile() {
	const router = useRouter();

	const [file, setFile] = useState(null);

	const handleFileChange = (e: any) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
		}
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!file) {
			alert("Please select a file");
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		notifications.show({
			title: "Generating schedule",
			message: "Please wait a moment.",
			color: "blue",
		});

		try {
			const response = await LessHoursAPI.generateByFile(formData);

			localStorage.setItem("schedule", JSON.stringify(response));

			notifications.show({
				title: "Schedule generated",
				message: "Your schedule has been generated successfully.",
				color: "green",
			});

			router.push("/schedule");
		} catch (error) {
			notifications.show({
				title: "Error",
				message: "An error occurred while generating the schedule.",
				color: "red",
			});
		}
	}

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-3">
				<h3 className="text-2xl font-bold">Import your data</h3>

				<p className="w-4/5">
					If you don't want to use the wizard, you can import your data from a xlsx file. Just click on the bottom to download the template.
				</p>

				<a
					href="/schedule.xlsx"
					download="schedule.xlsx"
					className="
						px-4 py-2 w-2/5 self-end text-center
						bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-3xl
						hover:from-[#FFA9CC] hover:to-[#FEECE3]
						text-black font-semibold!
						ease-in-out duration-500
						cursor-pointer
					"
				>
					Download template
				</a>
			</div>

			<div
				className="
				p-5 flex flex-col gap-5
				bg-linear-to-b from-[#FEE3D5]/4 to-[#FFA5C1]/4 rounded-3xl
			"
			>
				<h3 className="text-sm font-bold">Import</h3>

				<div className="flex flex-col gap-2">
					<label className="text-sm">Click and select XLSX file</label>
					<input
						type="file"
						accept=".xlsx"
						onChange={handleFileChange}
						className="
							bg-white/5
							border border-white/10 rounded-md
							px-3 py-1
							text-sm
						"
					/>
				</div>

				<div className="flex justify-end">
					<button
						className="
							px-4 py-2 w-1/4
							bg-linear-[135deg] from-[#FEECE3] to-[#FFA9CC] rounded-md
							hover:from-[#FFA9CC] hover:to-[#FEECE3]
							text-black font-semibold!
							ease-in-out duration-500
							cursor-pointer
						"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
