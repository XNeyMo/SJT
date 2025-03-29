import { GroupAdd, Settings, VideoLabel } from "@mui/icons-material";
import { StepConnector, stepConnectorClasses, StepIconProps, styled } from "@mui/material";

export const gradientColors = 'linear-gradient(135deg, #FEECE3, #FCD5BF, #FEAFAE, #FFA4BD, #FFA9CC)';

export const CustomConnector = styled(StepConnector)(() => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}, &.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundImage: gradientColors,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
}));

export const CustomStepIconRoot = styled('div')<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
	backgroundColor: '#ccc',
	zIndex: 1,
	color: '#fff',
	width: 50,
	height: 50,
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	transition: '0.3s',
	...(ownerState.active && {
		backgroundImage: gradientColors,
		boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
	}),
	...(ownerState.completed && {
		backgroundImage: gradientColors,
	}),
}));

export function CustomStepIcon(props: StepIconProps) {
	const { active, completed } = props;

	const icons: { [index: string]: React.ReactElement } = {
		1: <Settings className="text-black" />,
		2: <GroupAdd className="text-black" />,
		3: <VideoLabel className="text-black" />,
		4: <GroupAdd className="text-black" />,
	};

	return (
		<CustomStepIconRoot ownerState={{ completed, active }}>
			{icons[String(props.icon)]}
		</CustomStepIconRoot>
	);
}
