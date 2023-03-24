export function detectWebP () {
	function testWebP(callback) {
		var webP = new Image()
		webP.onload = webP.onerror = function () { 
			callback(webP.height == 2)
		}
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
	}
		
	testWebP(function (support) {
		document.documentElement.classList.add( support === true ? 'webp' : 'no-webp' )
	})
}