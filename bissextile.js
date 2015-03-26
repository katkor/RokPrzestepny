var form = document.getElementsByTagName('form')[0];

var result = document.createElement('p');
var bissextilediv = document.getElementById('bissextile');
bissextilediv.appendChild(result);



function isBissextile(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	}
	else {
		return false;
	}
}


form.addEventListener('submit', function(e) {
	var rok = parseInt(form.rok.value);
	e.preventDefault();
	if (isBissextile(rok)) {
		result.innerHTML = "Ten rok jest przestępny.";
	}
	else {
		result.innerHTML = "Ten rok NIE jest przestępny.";
	}
});





var form2 = document.getElementsByTagName('form')[1];

function dayInAYear(day, month, year) {

	var czyPrzestepny = isBissextile(year);
	var months = [];
	var count = day;

	if (czyPrzestepny) {
		months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	}
	else {
		months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	}

	for (var i = 0; i<month-1;i++) {
		count += months[i];
	}

	var dayOfTheYear = document.createElement('p');
	var dayinayeardiv = document.getElementById('dayinayear');
	dayinayeardiv.appendChild(dayOfTheYear);
	dayOfTheYear.innerHTML = day + "." + month + "." + year + " to " + count + ". dzień roku.";
}

form2.addEventListener('submit', function(e) {
	var dzien = parseInt(form2.day.value);
	var miesiac = parseInt(form2.month.value);
	var rok = parseInt(form2.year.value);
	e.preventDefault();
	dayInAYear(dzien, miesiac, rok);
	form2.day.value = null;
	form2.month.value = null;
	form2.year.value = null;
});