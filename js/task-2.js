const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');
ingredients.map((item) => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = item;
  list.append(ingredientsLi);
  return list;
})