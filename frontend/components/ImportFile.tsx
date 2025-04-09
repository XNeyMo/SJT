'use client';

import { useState } from "react";



export default function ImportFile() {
	const [file, setFile] = useState(null);

	const handleFileChange = (e: any) => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			setFile(selectedFile);
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
					href="/template.xlsx"
					download="template.xlsx"
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
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
