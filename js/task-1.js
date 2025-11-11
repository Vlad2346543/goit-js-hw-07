// Знаходимо головний список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи <li> з класом .item всередині
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій у консоль
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимося по кожному елементу категорії
categoryItems.forEach(item => {
  // Виводимо назву категорії
  const categoryName = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  // Виводимо кількість елементів у категорії
  const elementsCount = item.querySelectorAll('li').length;
  console.log(`Elements: ${elementsCount}`);
});