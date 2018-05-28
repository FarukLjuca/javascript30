var inbox = document.querySelector('.inbox')
var items = [].slice.call(inbox.children)
var holdingShift = false

var lastCheckbox

inbox.addEventListener('click', function(event) {
  if (event.target.type !== "checkbox") {
    return
  }

  if (lastCheckbox === event.target) {
    return
  }

  if (holdingShift && lastCheckbox !== null) {
    var indexOfLast = items.indexOf(lastCheckbox.parentElement)
    var indexOfCurrent = items.indexOf(event.target.parentElement)

    var smaller = indexOfLast < indexOfCurrent ? indexOfLast : indexOfCurrent
    var larger = indexOfLast > indexOfCurrent ? indexOfLast : indexOfCurrent

    for (var i = smaller; i < larger; i++) {
      items[i].querySelector('input').checked = true
    }

    holdingShift = false
    lastCheckboxIndex = null
  }

  if (event.target.checked) {
    lastCheckbox = event.target
  } else {
    lastCheckbox = null
  }
})

document.addEventListener('keydown', function(event) {
  if (event.key === 'Shift') {
    holdingShift = true
    console.log('yes')
  }
})

document.addEventListener('keyup', function(event) {
  if (event.key === 'Shift') {
    holdingShift = false
    console.log('no')
  }
})