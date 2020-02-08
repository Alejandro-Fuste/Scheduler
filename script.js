$(document).ready(function() {
	m = moment().format('dddd, MMMM Do, YYYY');

	let currentDayDiv = $('#currentDay');

	currentDayDiv.append(m);

	console.log(moment());

	let hours = [ '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm' ];
	let dataHours = [ 9, 10, 11, 12, 13, 14, 15, 16, 17 ];
	let container = $('.container');
	let timeBlock = $('.time-block');
	var activities = [];
	// timeBlock.addClass('time-block');
	console.log(parseInt(moment().format('HH')));

	function renderRows() {
		container.empty();

		for (i = 0; i < hours.length; i++) {
			let rowDiv = $('<div>');
			rowDiv.addClass('row');

			let divEl = $('<p>');
			divEl.addClass('hour');

			divEl.attr('data-hour', dataHours[i]);
			divEl.text(hours[i]);

			let textarea = $('<textarea>');
			textarea.addClass('time-block');
			let idName = 'textarea-' + i;
			textarea.attr('id', idName);
			textarea.attr('data-number', i);
			textarea.attr('cols', '100');
			let button = $('<button>');
			button.addClass('saveBtn');
			button.attr('type', 'submit');
			let lockImg = $('<i>');
			lockImg.addClass('fas fa-save');
			button.append(lockImg);

			rowDiv.append(divEl, textarea, button);

			container.append(rowDiv);

			conditionColors(i);
		}
	}

	renderRows();

	function conditionColors(i) {
		// Changes the colors of rows based on the current time.
		// Need i to be in military time

		// condition for future
		console.log(parseInt(moment().hour()));

		if (parseInt(moment().hour()) < dataHours[i]) {
			// change class of textarea
			$('#textarea-' + i).attr('class', 'future');

			// condition for past
		} else if (parseInt(moment().hour()) > dataHours[i]) {
			$('#textarea-' + i).attr('class', 'past');

			// present
		} else {
			$('#textarea-' + i).attr('class', 'present');
		}
	}

	$('.saveBtn').on('click', function(event) {
		event.preventDefault();
		/* With onclick, get value from textarea and add it to the object. Then add
		   object to list holding all textarea values */

		//    get id of textarea

		var rowId = $(this).siblings('textarea').attr('id');
		console.log(rowId);

		//  get value of textarea

		var activityInput = $(this).siblings('textarea').val().trim();
		console.log(activityInput);

		// get data-number attribute
		var number = $(this).siblings('textarea').attr('data-number');

		//  and use data attritube to add to list:

		// activities[number] = { selector: rowId, Value: activityInput };

		localStorage.setItem(rowId, activityInput);
	});

	addEvent();

	function addEvent() {
		// get value property from activities list in local storage

		var actList = '';

		// get Value property from object

		// var valInput = actList[number].Value;

		// put the value into the textarea where the onclick came from
		$('textarea').each(function(i, item) {
			console.log(i);

			actList = localStorage.getItem('textarea-' + i);
			console.log(actList);

			$('#textarea-' + i).val(actList);
		});

		// console.log({ actList, valInput, number });
	}
});
