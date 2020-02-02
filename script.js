$(document).ready(function() {
	m = moment().format('dddd, MMMM Do YYYY');

	let currentDayDiv = $('#currentDay');

	currentDayDiv.append(m);

	console.log(moment());
	console.log(m);
	console.log(currentDayDiv);
});
