var colorPicker = document.getElementById('color-picker')
var spacingSlider = document.getElementById('spacing-slider')
var blurSlider = document.getElementById('blur-slider')

colorPicker.value = window.getComputedStyle(document.documentElement).getPropertyValue('--base-color')
spacingSlider.value = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--spacing'), 10)
blurSlider.value = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--blur'), 10)

colorPicker.addEventListener('change', function(event) {
	 document.documentElement.style.setProperty('--base-color', event.target.value)
})

spacingSlider.addEventListener('input', function(event) {
	document.documentElement.style.setProperty('--spacing', event.target.value + 'px')
})

blurSlider.addEventListener('input', function(event) {
	document.documentElement.style.setProperty('--blur', event.target.value + 'px')
})