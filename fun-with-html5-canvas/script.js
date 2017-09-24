var canvas = document.getElementById('canvas')
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

var context = canvas.getContext('2d')
var rect = canvas.getBoundingClientRect()
var shouldDraw = false

var r = 0
var g = 0
var b = 0
var rMode = 1
var gMode = 1
var bMode
var radius = 20
var mode = 1

function draw(event) {
	if (shouldDraw) {
		context.beginPath()
		if(!event) event = window.event // Fix for firefox

		var x = event.clientX || event.changedTouches[0].clientX
		var y = event.clientY || event.changedTouches[0].clientY

    context.arc(
    	x - rect.left,
    	y - rect.top,
    	radius, 0, 2 * Math.PI, false
  	)
		context.fillStyle = `rgb(${r}, ${g}, ${b})`
		context.fill()
	}
}

canvas.addEventListener('mousedown', function(event) {
	shouldDraw = true
})

canvas.addEventListener('mouseup', function(event) {
	shouldDraw = false
})

canvas.addEventListener('mouseout', function(event) {
	shouldDraw = false
})

canvas.addEventListener('mousemove', function(event) {
	draw(event)
})

canvas.addEventListener('touchstart', function(event) {
	shouldDraw = true
})

canvas.addEventListener('touchend', function(event) {
	shouldDraw = false
})

canvas.addEventListener('touchcancel', function(event) {
	shouldDraw = false
})

canvas.addEventListener('touchmove', function(event) {
	draw(event)
})

setInterval(() => {
	if (radius > 50) mode = -1
	if (radius < 20) mode = 1
	if (r >= 245) rMode = -1
	if (r <= 10) rMode = 1
	if (g >= 245) gMode = -1
	if (g <= 10) gMode = 1
	if (b >= 245) bMode = -1
	if (b <= 10) bMode = 1

	if (mode == 1) radius+=0.1
	else radius-=0.1
	if (rMode == 1) r+=1
	else r-=1
	if (gMode == 1) g+=2
	else g-=2
	if (bMode == 1) b+=3
	else b-=3
}, 20)