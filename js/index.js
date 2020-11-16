// task-1
// const name = '«Генератор защитного поля»';
// let price = 1000;
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(firstMessage);
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(secondMessage);

// // task-2
// const invoice = 1500;
// const stock = 100;
// Write code under this line
// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';
// console.log(message);
//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

// task-3

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
//   console.log(message);
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else if (userPassword === 123) {
//   message = ACCESS_DENIED;
//   console.log(message);
// } else {
//   userPassword !== ADMIN_PASSWORD;
//   message = ACCESS_DENIED;
// }

// task-3
// const orderPieces = 10;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid;
// let balanceCredit = credits - totalPrice;
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (credits >= totalPrice) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else {
//   message = ACCESS_DENIED;
// }
// console.log(message);
// Write code under this line

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'

// task-4

// const countryName = 'КитаЙ';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       countryName !== country;
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

//task-5

// const getItemsString = function (array) {
//'use strict';
// Write code under this line
//   let result = '';

//   for (let i = 0; i < array.length; i += 1) {
//     result += result = `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
// /*
// '1 - 5
// 2 - 10
// 3 - 15

//task - 6

//const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
// message.split(' ').length * pricePerWord;

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

//task-7
// function findLongestWord(string = '') {
// Write code under this line
//   let stringWord = string.split(' ');
//   let longestWord = stringWord[0];
//   for (const word of stringWord) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ('jumped');

// console.log(findLongestWord('Google do a roll'));
// ('Google');

// console.log(findLongestWord('May the force be with you'));
// ('force');

//task-8

// function formatString(string, maxLength = 40) {
//   const dots = `...`;
//   return string.length > maxLength
//     ? string.slice`${maxLength}`.concat(dots)
//     : string;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// ('Curabitur ligula sapien, tincidunt non.');

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// ('Vestibulum facilisis, purus nec pulvinar...');

// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );
// ('Vestibulum facilisis, purus ne...');

//task-9
//function checkForSpam(str) {
'use strict';
// Write code under this line
//   console.log(str.toLowerCase());
//   return (
//     str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')
//   );
// }

//console.log(checkForSpam('Latest technology news')); // false

//console.log(checkForSpam('JavaScript weekly newsletter')); // false

//console.log(checkForSpam('Get best sale offers now!')); // true

//console.log(checkForSpam('[SPAM] How to earn fast money?')); //true

//task-10

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

//task-10

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line

//     if (Number.isFinite(array[i]) === true) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

//console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

//console.log(filterArray([1, NaN, Infinity]));
// [1]

//console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

//console.log(filterArray([undefined, false, null, [], 1]));
// [1]

//console.log(filterArray([{}, () => {}, 2]));
// [2]

// task-11

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   let value = array.length;
//   // Write code under this line

//   for (const value of array) {
//     total += value;
//   }
//   return total;
// }

//console.log(reduceArray([1, 2, 3]));
// 6

//console.log(reduceArray([-2, 0, 2]));
// 0

//console.log(reduceArray([1, 2, 2.5]));
// 5.5

// task-12

//function isLoginValid(login, min = 4, max = 16) {
// Write code under this line
//   const loginValid = login.length >= min && login.length <= max;
//   return loginValid;
// }

// function isLoginUnique(allLogins, login) {
//   'use strict';
//   // Write code under this line
//   const loginUnique = allLogins.includes(login);
//   if (loginUnique === true) {
//     return false;
//   }
//   return true;
// }

// function addLogin(allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === false) {
//     return (message = ERROR);
//   } else if (isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     return (message = SUCCESS);
//   }
//   return (message = REFUSAL);
// }

//const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

//console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

//console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

//console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

//objects

//task-1

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

//Write code under this line
// user[`mood`] = `happy \n`;
// user[`full time`] = true;
// user.hobby = `skydiving`;
// user.premium = false;
//console.log(user);
//const keys = Object.keys(user);
// Write code under this line
// for (const key of keys) {
//   message += `${key} : ${user[key]} ${'\n'}`;
// }
// console.log(keys);
// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

//task-2

// const countProps = function (obj) {
//   'use strict';
//   const value = Object.keys(obj);
//   return value.length;
// };

//console.log(countProps({})); // 0

//console.log(countProps({ a: 1, b: 1 })); // 2

//console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

//task - 3
//решение1
// const findBestEmployee = function (employees) {
//   ('use strict');

//   const values = Object.values(employees);
//   console.log(values);
//   const entries = Object.entries(employees);
//   console.log(entries);
//   let biggestNumber = Math.max(...values);
//   if (!values.length || !entries.length) {
//     return '';
//   }
//   for (const entrie of entries) {
//     if (biggestNumber === entrie[1]) {
//       return entrie[0];
//     }
//   }
// };

//решение2
// const findBestEmployee = function (employees) {
//   'use strict';
//   let bestEmployee = '';
//   const values = Object.values(employees);
//   const max = Math.max(...values);
//   const bestEmployees = Object.entries(employees);
//   for (const entrie of bestEmployees) {
//     if (entrie[1] === max) {
//       bestEmployee = entrie[0];
//     }
//   }
//   return bestEmployee;
// };

// Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// 'lux'

//task-4

// const countTotalSalary = function (employees) {
//   'use strict';
//   let total = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     console.log(value);
//     total += value;
//   }
//   return total;
// };

// Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// 500

//task -5

// function getAllPropValues(array, prop) {
//   'use strict';
//   let property = [];

//   for (const product of array) {
//     if (prop in product) {
//       property.push(product[prop]);
//     }
//   }

//   return property;
// }

// Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

//console.log(getAllPropValues(products, 'category'));
//  []

//task-6
// function calculateTotalPrice(array, prop) {
//   'use strict';
//   let total = 0;
//   for (const product of array) {
//     if (product.name === prop) {
//       total += product.price * product.quantity;
//     }
//   }
//   return total;
// }

// Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800



//THIS AND CALLBACK


//TASK-1
// Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром cb
// - функцию обратного вызова(callback).Функция mapArray создает новый массив numbers
// и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array () и необходимый аргумент для задания длины,
// равной длине array.

// Напиши функцию обратного вызова addIndex , которая принимает два параметра - 
// element и index и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex , которая принимает два параметра 
// - element и index и возвращает число - разность element и index(вычитание).

// Write code under this line
//const addIndex = (element, index) => element + index;
// Write code under this line
//const subIndex = (element, index) => element - index;
  
// function mapArray(array, cb) {
//   'use strict';
// Write code under this line
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];

// console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

//console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]


//task2


// Callback функция и метод push
// Функция isUniq принимает три параметра -
//   element, index и arr.Функция возвращает true или false в зависимости от того встречается ли элемент первый раз
// в массиве(true) или этот элемент в массиве уже встречался(false).

// Функция isEven принимает один параметр -
//   element.Функция возвращает true или false в зависимости от того является ли элемент четным числом или нет.

// Функция filterArray(array, cb), принимает 1 - м параметром array - массив чисел, а вторым параметром cb
//   - функцию обратного вызова(callback).Дополни тело функции так, чтобы функция filterArray
// заполняла новый пустой массив numbers только теми элементами из массива array,
//   для которых вызов функции cb вернет true.


// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if (cb(element, index, array)) {
//       numbers.push(element)
      
//     }
//   }
//   return numbers;
// }

//const arr  = [1,2,3,4,5,1,2,5];

//console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

//console.log(filterArray(arr, isEven));
// [2, 4, 2]


//TASK-3

// Callback функция для получения одного вычисляемого значения массива
// Функции add, sub и mult принимают два параметра - accum и element, возвращает число
//   - сумму, разность или произведение параметров.

// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
// Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива
// в зависимости от того какая именно из трех функция(add, mult, sub) будет передана в качестве cb.



// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//   let accum;
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
//     accum = cb(accum, element);
   
//   }
//   return accum;
// }

//const arr  = [1,2,3,4,5];

//console.log(reduceArray(arr, add)); // 15
//console.log(reduceArray(arr, add, 10)); // 25

//console.log(reduceArray(arr, mult)); // 120
//console.log(reduceArray(arr, mult, 10)); // 1200

//console.log(reduceArray(arr, sub)); // -13
//console.log(reduceArray(arr, sub, 10)); // -5

//TASK-4


// this в методах объекта
// Расставь отсутствующие this в методах объекта account.

// В комментариях показаны операции с объектом и ожидаемые результаты.




// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; 
//   },
//   showOrders() {
//     return this.orders; 
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; 
//     this.orders.push(order); 
//   },
// };
// const copyAccount =  Object.assign({},account);
// copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы


//account.changeDiscount(0.15);
//console.log(account.discount); // 0.15

//console.log(account.showOrders()); 
 //['order-1', 'order-2', 'order-3']

//account.addOrder(5000, 'order-4');
//console.log(account.balance); // 19000

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

//TASK-5

// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов

// inventory.add
// inventory.remove выступал объект inventory


// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   const act = action(itemName);
//   const msg =  `Invoking action on ${itemName}`;
//   return {act, msg};
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory)  // Write code in this line
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
//{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory)  // Write code in this line
// );

// const arrayRemove = [...inventory.items];


// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']


//hw5


//task-1
// function-constructor
// Напиши функцию - конструктор Account,
// которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(),
// который возвращает строку со значениями свойств login и email объекта.

 // Write code under this line
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
//   }
// Account.prototype.getInfo = function() {
//     console.log(`login: ${this.login}, email: ${this.email}`);
//      return `login : ${this.login}, email: ${this.email}`;
// }
// console.log(typeof Account.prototype.getInfo);
// 'function'

//  const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'


//task-2

// class
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку:
// User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers

 // Write code under this line
// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers
//     }
//      getInfo() {
//          console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`);
//          return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     }
//   }
//  console.log(typeof User);
// 'function'

//  const mango = new User('Mango', 2, 20);
//  console.log(mango.getInfo()); 
// 'User Mango is 2 years old and has 20 followers'

//  console.log(typeof mango.getInfo); 
// 'function'  

//  const poly = new User( 'Poly', 3, 17);
//  console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

//task-3

// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

 // Write code under this line
// class Storage {
//     constructor(items) {
//           this.items = items
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(item) {
// this.items.push(item)
//     }
//     removeItem(item) {
//         for (let i = 0; i < this.items.length; i+=1) {
//             const element = this.items[i];
//             console.log(element)
//             if (element === item) {
//               this.items.splice(i, 1)  
//             }
//         }
//     }
//   }

//  console.log(typeof Storage);
// 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

// const storage = new Storage(goods);
//  for (const item of goods) {
//      console.log(item)
//      if (condition) {
         
//      }
//  }

//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

//  storage.addItem('Дроид');
//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

//  storage.removeItem('Пролонгер');
//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */


//task-5

// переиспользование методов класса
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend


 // Write code under this line
// class StringBuilder {
//     constructor(string) {
//         this._value = string
//     }
//     get value() {
//         return this._value
//     }
//     append(str) {
//         return this._value = this._value + str
//     }
//     prepend(str) {
//         return this._value = str + this._value
       
//     }
//     pad(str) {
//         this.append(str) + this.prepend(str)
//     }
// }
//  console.log(typeof StringBuilder);
// 'function'


 //const builder = new StringBuilder('.');

 //builder.append('^');
 //console.log(builder.value); // '.^'

 //builder.prepend('^');
 //console.log(builder.value); // '^.^'

 //builder.pad('=');
 //console.log(builder.value); // '=^.^='

 //task-5

//  класс
// Напиши класс Car с указанными свойствами и методами.

// class Car {
  /*
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
  //constructor() {}

  /*
   * Добавь геттер и сеттер 
   * для свойства `price`, который будет 
   * работать с свойством цены автомобиля.
   * 
   * ВАЖНО: для записи методов get и set
   * значение параметра записывают с 
   * подчеркиванием. См. ниже пример 1.
   */

  /*
   * Метод, который заводит автомобиль
   * Записывает в свойство `isOn` значение `true`
   */
  //turnOn() {}

  /*
   * Метод, чтобы заглушить автомобиль
   * Этот метод должен записывать 
   * в свойство isOn значение false,
   * и сбрасывать текущую скорость до 0
   */
  //turnOff() {}

  /*
   * Этот метод должен добавлять 
   * к свойству `speed` полученное
   * значение, при условии, 
   * что результирующая скорость
   * не больше чем значение свойства `maxSpeed`
   */
  //accelerate(value) {}

  /*
   * Этот метод должен отнимать 
   * от свойства `speed` 
   * полученное значение, при условии, 
   * что результирующая скорость не меньше 0
   */

 //decelerate(value) {}

  /*
   * Этот метод должен добавлять к свойству 
   * `distance` пробег в километрах, 
   * т.е. hours * speed,
   * но только в том случае, 
   * если машина заведена!
   */
//   drive(hours) {}
// }

// #### Пример 1.

// ```js
// class Guest {
//   // Собственные свойства класса размещаем в конструкторе
//   constructor(name, roomNumber) {
//     /* параметр name не должен 
//      *   совпадать с названием свойства
//      *   но должен быть похож.
//      *   Поэтому используют прием смены
//      *   названия добавляя символ '_'.
//      *   Хотя это может любой другой символ
//      */
//     this._name = name;
//   }

//   // Используем геттеры и сеттеры для описания интерфейса доступа к свойствам
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }



class Car {
 // Write code under this line
   static getSpecs(car) {
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
  }
    constructor(obj) {
        this._price = obj.price;
        this.speed = 0;
        this.maxSpeed = obj.maxSpeed;
        this.isOn = false;
        this.distance = 0;
  }
    get price() {
        return this._price;
  }
    set price(value) {
        this._price = value;
  }
    turnOn() {
        this.isOn = true;
  }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
  }
    accelerate(value) {
        this.speed += value;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
  }
    decelerate(value) {
        this.speed -= value;
        if (this.speed < 0) {
            this.speed = 0;
        }
  }
    drive(hours) {
        if (this.isOn === true) {
            this.distance += hours * this.speed;
      }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000
