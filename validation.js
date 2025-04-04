const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');

form.addEventListener('submit', (e) => {
  clearErrors();
  let hasErrors = false;

  if (firstname_input.value.trim() === '') {
    markIncorrect(firstname_input);
    hasErrors = true;
  }

  if (email_input.value.trim() === '') {
    markIncorrect(email_input);
    hasErrors = true;
  }

  if (password_input.value.trim() === '') {
    markIncorrect(password_input);
    hasErrors = true;
  }

  if (repeat_password_input.value.trim() === '' || repeat_password_input.value !== password_input.value) {
    markIncorrect(repeat_password_input);
    hasErrors = true;
  }

  if (hasErrors) {
    e.preventDefault();
  }
});

function markIncorrect(inputElement) {
  inputElement.parentElement.classList.add('incorrect');
}

function clearErrors() {
  const incorrects = document.querySelectorAll('.incorrect');
  incorrects.forEach(el => el.classList.remove('incorrect'));
}
