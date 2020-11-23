const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const list = document.querySelector('#ingredients');
// ingredients.map((item) => {
//   const ingredientsLi = document.createElement('li');
//   ingredientsLi.textContent = item;
//   list.append(ingredientsLi);
//   return list;
// })


// ingredients.forEach(element => {
  //   list.insertAdjacentHTML("afterbegin", `<li>${element}</li>`)
  // });
  
  const list = document.querySelector('#ingredients');

let ingrList = ingredients.map((value) =>
  {
    let item = document.createElement('li');
    item.textContent = value;
    return item;
});
list.append(...ingrList)