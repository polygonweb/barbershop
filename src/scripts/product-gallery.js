/**
 * Фотогалерея на странице продукта в магазине
 */
;(function() {
	var gallery = document.querySelector('.product-gallery');
	if (!gallery) return;

	var mainImage = gallery.querySelector('.product-gallery__image_main img');
	var links = gallery.querySelectorAll('a.product-gallery__image');
	links.forEach(function(link) {
		link.onclick = function(e) {
			var url = this.href;
			mainImage.src = url;
			e.preventDefault();
		}
	});
})();
