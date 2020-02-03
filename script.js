$(document).ready(function() {
	m = moment().format('dddd, MMMM Do, YYYY');

	let currentDayDiv = $('#currentDay');

	currentDayDiv.append(m);

	console.log(moment());

	let hours = [ '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
	let dataHours = [ 9, 10, 11, 12, 1, 2, 3, 4, 5 ];
	let container = $('.container');
	let timeBlock = $('<div>');
	timeBlock.addClass('time-block');
	console.log(timeBlock);

	function renderRows() {
		timeBlock.empty();

		for (i = 0; i < hours.length; i++) {
			let rowDiv = $('<div>');
			rowDiv.addClass('row');

			let span = $('<span>');
			span.addClass('hour');

			span.attr('data-hour', dataHours[i]);
			span.text(hours[i]);

			let textarea = $('<textarea>');
			textarea.addClass('time-block');
			textarea.attr('cols', '100');

			let button = $('<button>');
			button.addClass('saveBtn');
			button.attr('type', 'submit');

			rowDiv.append(span, textarea, button);
			// timeBlock.append(rowDiv);
			container.append(rowDiv);
		}
	}

	renderRows();

	$(document).on('click', '.saveBtn', function() {
		console.log('click');
	});
});
