// Отримуємо посилання на елементи
 const nameInput = document.querySelector("#name-input");
 const nameOutput = document.querySelector("#name-output");
// Додаємо слухачів подій input
nameInput.addEventListener("input", () => {
//Очищаємо введений текст від пробілів по краях
const trimmedValue = nameInput.value.trim();
//Якщо поле порожнє показуємо Anonymous
nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});