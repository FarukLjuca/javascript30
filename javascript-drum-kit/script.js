// Setup
var buttons = {}

buttons.a = 'boom'
buttons.s = 'clap'
buttons.d = 'hihat'
buttons.f = 'kick'
buttons.g = 'openhat'
buttons.h = 'ride'
buttons.j = 'snare'
buttons.k = 'tink'
buttons.l = 'tom'

var buttonKeys = Object.keys(buttons)

// Functions
function playSound(key) {
	new Audio(`sounds/${buttons[key]}.wav`).play()
}

// Program
var root = document.getElementById('root')

for (var i = 0; i < buttonKeys.length; i++) {
	var button = document.createElement('button')

	button.innerHTML = buttonKeys[i]

	button.addEventListener('click', function(event) {
		playSound(event.target.innerHTML)
	})

	root.appendChild(button)
}

document.addEventListener('keydown', function(event) {
	if (buttonKeys.indexOf(event.key) !== -1)
		playSound(event.key)
})