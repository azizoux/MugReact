let fruits = [
  {
    id: 1,
    name: "mangue",
  },
  {
    id: 2,
    name: "orange",
  },
  {
    id: 3,
    name: "fraise",
  },
  {
    id: 4,
    name: "banane",
  },
];
// let fruits_g = fruits.filter((fruit) => fruit.name.includes("n"));
// console.log(fruits_g);

let list_fruits = fruits.map((fruit) => {
  fruit.qty = 10;
  return fruit;
});

console.log(list_fruits);

// let index = fruits.findIndex((fruit) => fruit.includes("n"));
// console.log(index);
