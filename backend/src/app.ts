import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { Subject } from '@src/types';

import { findLessHours } from '@algorithms/less_hours';
import { findOneDayLess } from '@algorithms/one_day_less';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let subjects: Subject[] = [];

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!');
});

app.post('/subjects', (req: Request, res: Response) => {
	const newSubjects: Subject[] = req.body;
	subjects = newSubjects;
	res.status(201).send('Subjects received');
});

app.get('/less_hours', (req: Request, res: Response) => {
	if (subjects.length === 0) {
		return res.status(400).send('Subjects not found');
	}

	const lessHours = findLessHours(subjects);
	res.json(lessHours);
});

app.get('/one_day_less', (req: Request, res: Response) => {
	if (subjects.length === 0) {
		return res.status(400).send('Subjects not found');
	}

	const oneDayLess = findOneDayLess(subjects);
	res.json(oneDayLess);
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
