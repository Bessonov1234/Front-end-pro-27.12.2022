let question = prompt(`What action you want to do 
 (add(+));   (sub(-));    (mult(*));   (div(/));`);
let one = +prompt(`Give the number`);
let two = +prompt(`Give the number`);

// if (two && one) {
//  alert(`Вибачте але ви не ввели число`)

// }

if (question === `+`) {
  console.log(one + two);
}

if (question === `+`) {
  console.log(one + two);
}
if (question === `-`) {
  console.log(one - two);
}
if (question === `*`) {
  console.log(one * two);
}
if (question === `/`) {
  console.log(one / two);
}

if (question === `add`) {
  console.log(one + two);
}
if (question === `sub`) {
  console.log(one - two);
}
if (question === `mult`) {
  console.log(one * two);
}
if (question === `div`) {
  console.log(one / two);
}