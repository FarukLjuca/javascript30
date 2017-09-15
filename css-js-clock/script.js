var circleContainer = document.getElementById('circleContainer')
var hoursCursor = document.getElementById('hoursCursor')
var minutesCursor = document.getElementById('minutesCursor')
var secondsCursor = document.getElementById('secondsCursor')

var seconds = new Date().getSeconds()
var minutes = new Date().getMinutes()
var hours = new Date().getHours()

secondsCursor.style.transform = `rotateZ(${seconds * 6 + 90}deg)`
minutesCursor.style.transform = `rotateZ(${minutes * 6 + 90}deg)`
hoursCursor.style.transform = `rotateZ(${hours * 30 + 90}deg)`

setInterval(function() {
	secondsCursor.style.transform = `rotateZ(${seconds++ * 6 + 96}deg)`

	if (seconds === 59) {
		minutesCursor.style.transform = `rotateZ(${minutes++ * 6 + 96}deg)`
		seconds = 0
	}

	if (minutes === 59) {
		hoursCursor.style.transform = `rotateZ(${hours++ * 30 + 120}deg)`
		minutes = 0
	}
}, 1000)