// variables for Buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// variables for TIme Values

let seconds = 0;
let minute = 0;
let hours = 0;

// variables for leading Zero

let leadingSeconds = 0;
let LeadingMinutes = 0;
let LeadingHours = 0;

// variables for setINterval and Time values

let timeInterval = null;
let timerStatus = 'stopped';

// Stop watch function

let stopWatch = () => {
	seconds++;

	if (seconds / 60 === 1) {
		seconds = 0;
		minute++;

		if (minute / 60 === 1) {
			minute = 0;
			hours++;
		}
	}

	if (seconds < 10) {
		leadingSeconds = '0' + seconds.toString();
	} else {
		leadingSeconds = seconds;
	}

	if (minute < 10) {
		LeadingMinutes = '0' + minute.toString();
	} else {
		LeadingMinutes = minute;
	}

	if (hours < 10) {
		LeadingHours = '0' + hours.toString();
	} else {
		LeadingHours = hours;
	}

	let displayTimer = (document.getElementById('timer').innerText =
		LeadingHours + ':' + LeadingMinutes + ':' + leadingSeconds);
};

startStopBtn.addEventListener('click', function () {
	if (timerStatus === 'stopped') {
		timeInterval = window.setInterval(stopWatch, 1000);
		document.getElementById('startStopBtn').innerHTML =
			'<i class="fa-solid fa-pause" id="pause"></i>';
		timerStatus = 'started';
	} else {
		window.clearInterval(timeInterval);
		document.getElementById('startStopBtn').innerHTML =
			'<i class="fa-solid fa-play" id="play"></i>';
		timerStatus = 'stopped';
	}
});

resetBtn.addEventListener('click', function () {
	window.clearInterval(timeInterval);

	seconds = 0;
	minute = 0;
	hours = 0;

	document.getElementById('timer').innerHTML = '00:00:00';
});
