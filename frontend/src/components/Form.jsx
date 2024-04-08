import React, { useState } from 'react';

const Form = () => {
	return (
		<form>
			<label for="number_subjects">How many subjects do you have?:</label>
			<input type="number" id="number_subjects" name="number_subjects" min="1" max="10" required></input>
		</form>
	)
}

export default Form;
