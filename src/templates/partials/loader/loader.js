;(function() {
	var loader = document.getElementById('loader');

	function onLoad() {
		setTimeout(function() {
			loader.className += ' loader_hide';
			window.removeEventListener('load', onLoad);
		}, 300)
	}

	function onUnLoad() {
		loader.className = 'loader';
	}

	function bindEvents() {
		window.addEventListener('load', onLoad);
		window.addEventListener('beforeunload', onUnLoad);
	}

	bindEvents();
	setTimeout(onLoad, 5000);
})();
