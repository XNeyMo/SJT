'use client';

import { useState } from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { CustomConnector, CustomStepIcon } from "@utils/wizard";
import CardSelector from "./steps/CardSelector";
import { steps } from "@constants/steps";

export default function Wizard() {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<div className="flex flex-col justify-center items-center gap-10 w-full">
			<Stack sx={{ width: '100%' }} spacing={4}>
				<Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel StepIconComponent={CustomStepIcon}>
								<p className="text-white">{label}</p>
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</Stack>

			<CardSelector
				activeStep={activeStep}
				setActiveStep={setActiveStep}
			/>
		</div>
	);
}
