// Функція для генерації випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо необхідні елементи
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

// Додаємо обробник події на кнопку
changeColorBtn.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо колір фону через inline-стиль
  body.style.backgroundColor = randomColor;

  // Виводимо значення кольору в span
  colorSpan.textContent = randomColor;
});
