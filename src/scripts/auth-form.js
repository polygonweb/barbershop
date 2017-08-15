;(function() {
	var form = document.querySelector('.auth-form');
	if (!form) return;
	var link = document.querySelector('[data-auth-link]');
	var userInput = form.querySelector('.auth-form__input_user');
	var passwordInput = form.querySelector('.auth-form__input_password');
	var modalElem = document.querySelector('#auth-modal');

	form.noValidate = true;

	function onStart() {}

	function onEnd() {}

	function onOpen() {
		modal(modalElem).open(function() {
			var username = localStorage.getItem('username');
			if (username) {
				userInput.value = username;
				setTimeout(function() {
					passwordInput.focus();
				}, 500)
			} else {
				setTimeout(function() {
					userInput.focus();
				}, 500)
			}
		})
	}

	function onClose() {
		form.classList.remove('auth-form_error');
	}

	function onSuccess() {
		// modal(modalElem).close();
	}

	function onError() {}

	// function onAnimationEnd(e) {
	// 	if (e.target !== form && e.animationName !== 'form-error') return;
	// 	form.classList.remove('auth-form_error');
	// }

	function checkValid() {
		return [userInput, passwordInput].every(function(input) {
			return input.validity.valid;
		})
	}

	function onSubmit(e) {
		form.classList.remove('auth-form_error');
		var isValid = checkValid();
		if (isValid) {
			form.reset();
			modal(modalElem).close(onClose);
		} else {
			form.classList.add('auth-form_error');
			setTimeout(function() {
				form.classList.remove('auth-form_error');
			}, 500);
			localStorage.setItem('username', userInput.value);
		}
		e.preventDefault();
		return;
	}

	link.addEventListener('click', onOpen);
	form.addEventListener('submit', onSubmit);
	// form.addEventListener('animationend', onAnimationEnd);
})();
