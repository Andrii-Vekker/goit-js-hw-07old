const findItem = document.querySelectorAll('.item').forEach(element =>
  console.log(
    `Категория: ${element.querySelector('h2').textContent}
Количество элементов: ${element.querySelectorAll('li').length}`,
  ),
);