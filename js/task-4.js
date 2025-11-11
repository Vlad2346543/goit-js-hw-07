//  Знаходимо форму
const loginForm = document.querySelector('.login-form');

//  Додаємо обробник події submit
loginForm.addEventListener('submit', event => {
  //  Забороняємо перезавантаження сторінки
  event.preventDefault();

  //  Отримуємо доступ до елементів форми
  const { email, password } = loginForm.elements;

  //  Очищаємо від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //  Перевірка на заповнення полів
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  //  Створюємо об'єкт із введеними даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  //  Виводимо об'єкт у консоль
  console.log(formData);

  //  Очищаємо форму
  loginForm.reset();
});

