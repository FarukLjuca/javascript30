var search = document.getElementById('search')
var results = document.getElementById('results')

var cities = []

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
	.then((response) => response.json())
	.then(function(data) {
		cities = data
	})

search.addEventListener('input', function(event) {
	var filteredCities = cities.filter(function(city) {
		return city.state.toLowerCase().includes(event.target.value.toLowerCase()) ||
			city.city.toLowerCase().includes(event.target.value.toLowerCase())
	})

	results.innerHTML = ''
	for (var i = 0; i < filteredCities.length; i++) {
		var resultRow = document.createElement('p')
		resultRow.innerHTML = `${filteredCities[i].city}, ${filteredCities[i].state}`
		results.appendChild(resultRow)
	}
})