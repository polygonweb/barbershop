/**
 * Фотогалерея на главной странице
 */
;(function() {
	var gallery = document.querySelector('.widget-gallery');
	if (!gallery) return;

	var list = gallery.querySelector('.widget-gallery__list');
	var images = gallery.querySelectorAll('.widget-gallery__item');
	var prev = gallery.querySelector('[data-prev]');
	var next = gallery.querySelector('[data-next]');

	var len = images.length;
	var current = 0;
	var activeClass = 'widget-gallery__item_active';

	images[current].classList.add(activeClass);
	gallery.classList.remove('widget-gallery_fallback');

	function changeSlide(dir) {
		images[current].classList.remove(activeClass);
		current = (current + dir + len) % len;
		images[current].classList.add(activeClass);
	}

	var goNext = changeSlide.bind(null, 1);
	var goPrev = changeSlide.bind(null, -1);
	list.addEventListener('click', goNext);
	next.addEventListener('click', goNext);
	prev.addEventListener('click', goPrev);
})();
