$(document).ready(function() {
	m = moment().format('dddd, MMMM Do, YYYY');

	let currentDayDiv = $('#currentDay');

	currentDayDiv.append(m);

	console.log(moment());

	let hours = [ '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
	let timeBlock = $('<div>');
	timeBlock.addClass('time-block');
	console.log(timeBlock);

	// function renderRows() {
	// 	timeBlock.empty();

	// 	for (i = 0; i < hours.length; i++) {
	//         let rowDiv = $('<div>');
	//         rowDiv.addClass('row');

	//         rowDiv.append(span, input, button);
	// 		timeBlock.append(rowDiv);
	// 	}
	// }

	// renderRows();
});
