(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (!input || !error) return;
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    error.textContent = message;
  }

  function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (!input || !error) return;
    input.classList.remove('invalid');
    input.removeAttribute('aria-invalid');
    error.textContent = '';
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  document.getElementById('name').addEventListener('blur', function () {
    if (this.value.trim() === '') {
      showError('name', 'name-error', 'Please enter your full name.');
    } else {
      clearError('name', 'name-error');
    }
  });

  document.getElementById('email').addEventListener('blur', function () {
    if (this.value.trim() === '') {
      showError('email', 'email-error', 'Please enter your email address.');
    } else if (!isValidEmail(this.value.trim())) {
      showError('email', 'email-error', 'Please enter a valid email address (e.g. name@example.com).');
    } else {
      clearError('email', 'email-error');
    }
  });

  document.getElementById('message').addEventListener('blur', function () {
    if (this.value.trim() === '') {
      showError('message', 'message-error', 'Please enter a message.');
    } else if (this.value.trim().length < 10) {
      showError('message', 'message-error', 'Your message must be at least 10 characters.');
    } else {
      clearError('message', 'message-error');
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
      showError('name', 'name-error', 'Please enter your full name.');
      valid = false;
    } else {
      clearError('name', 'name-error');
    }

    if (email === '') {
      showError('email', 'email-error', 'Please enter your email address.');
      valid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'email-error', 'Please enter a valid email address (e.g. name@example.com).');
      valid = false;
    } else {
      clearError('email', 'email-error');
    }

    if (message === '') {
      showError('message', 'message-error', 'Please enter a message.');
      valid = false;
    } else if (message.length < 10) {
      showError('message', 'message-error', 'Your message must be at least 10 characters.');
      valid = false;
    } else {
      clearError('message', 'message-error');
    }

    if (valid) {
      form.reset();
    } else {
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) firstInvalid.focus();
    }
  });
})();
