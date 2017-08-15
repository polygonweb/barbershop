;(function() {
	function getScrollBarValue() {
		var elem = document.createElement('div');
		elem.style.cssText = '' +
			'width: 99px !important;' +
			'height: 99px !important;' +
			'border: 0 !important;' +
			'padding: 0 !important;' +
			'overflow: scroll !important;';

		document.body.appendChild(elem);
		var scrollValue = elem.offsetWidth - elem.clientWidth;
		document.body.removeChild(elem);

		return scrollValue;
	};

	function isOverflow(elem) {
		return elem.scrollHeight > elem.offsetHeight;
	}

	var body = document.body;
	var scrollValue = getScrollBarValue();

	function modal(elem) {
		if (!elem) return;

		return {
			isOpen: function() {
				elem.classList.contains('modal_show');
			},

			open: function(callback) {
				elem.classList.add('modal_show');
				body.style.paddingRight = isOverflow(body) ? scrollValue + 'px' : '';
				body.classList.add('page_modal-open');
				document.addEventListener('click', outSideClickHandler);
				typeof callback === 'function' && callback();
				return this;
			},

			close: function(callback) {
				var dialog = elem.querySelector('.modal__dialog');
				dialog.addEventListener('transitionend', function transitionEnd(e) {
					if (e.target !== dialog) return;
					dialog.removeEventListener('transitionend', transitionEnd);
					body.classList.remove('page_modal-open');
					body.style.paddingRight = '';
				});
				elem.classList.remove('modal_show');
				document.removeEventListener('click', outSideClickHandler);
				typeof callback === 'function' && callback();
				return this;
			},

			toggle: function(callback) {
				this.isOpen() ? this.close(callback) : this.open(callback);
				return this;
			}
		}
	}

	function outSideClickHandler(e) {
		var modalElement = e.target.closest('.modal');
		if (!modalElement) return;
		var dialog = modalElement.querySelector('.modal__dialog');
		if (!dialog) return;
		if (!dialog.contains(e.target)) {
			modal(modalElement).close();
		}
	}

	function docClickHandler(e) {
		var modalBtn = e.target.closest('[data-modal]');
		if (!modalBtn) return;
		try {
			var data = JSON.parse(modalBtn.getAttribute('data-modal'));
			var elem = document.querySelector(data.target);
			modal(elem)[data.action]();
			e.preventDefault();
		} catch(e) {
			console.error('Ошибка обработки атрибута data-modal');
		}
	}

	function closeHandler(e) {
		var modalClose = e.target.closest('.modal__close');
		if (!modalClose) return;
		var modalElem = modalClose.closest('.modal');
		if (!modalElem) return;
		modal(modalElem).close();
		e.preventDefault();
	}

	function escapeHandler(e) {
		if (e.keyCode !== 27) return;
		document.querySelectorAll('.modal_show').forEach(function(modalEl) {
			modal(modalEl).close();
		});
	}

	document.addEventListener('click', docClickHandler);
	document.addEventListener('click', closeHandler);
	document.addEventListener('keyup', escapeHandler);

	window.modal = modal;
})();
