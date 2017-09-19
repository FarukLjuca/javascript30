var panels = document.getElementById('panels')

for (var i = 0; i < panels.children.length; i++) {
	panels.children[i].addEventListener('click', event => {
		event.target.classList.toggle('open')
		removeOtherOpenClasses(event.target)
	})
}

function removeOtherOpenClasses(currentElement) {
	for (var i = 0; i < panels.children.length; i++) {
		if (panels.children[i] !== currentElement) {
			panels.children[i].classList.remove('open')
		}
	}
}