// const products = [
//   { id: 31, name: "Mouse", price: 25, inStock: true },
//   { id: 2, name: "Keyboard", price: 70, inStock: false },
//   { id: 3, name: "Monitor", price: 210, inStock: true },
// ];

// let result = products.map( x => `${x.name} $ ${x.price} ${x.inStock === false? `(out of stock)` : ""}`)
// console.log(result)

// const users = [
//   { id: 1, age: 17, active: true, email: "a@mail.com" },
//   { id: 2, age: 22, active: true, email: "b@spam.com" },
//   { id: 3, age: 30, active: false, email: "c@mail.com" },
//   { id: 4, age: 35, active: true, email: "d@mail.com" },
//   { id: 5, age: 40, active: true, email: "e@mail.com" },
// ];

// let result = users.filter( x => x.active === true && x.age >= 18 && x.age <= 35 &&  !x.email.endsWith("@spam.com"))
// console.log(result)

// const tx = [
//   { id: 1, category: "food", amount: 12 },
//   { id: 2, category: "food", amount: 8 },
//   { id: 3, category: "taxi", amount: 15 },
//   { id: 4, category: "books", amount: 20 },
//   { id: 5, category: "taxi", amount: 7 },
// ];

// let result = tx.reduce( (acc, val) => { 
//     if (Object.hasOwn( acc, val.category)) {
//     acc[val.category] += val.amount
// } else {acc[val.category] = val.amount} return acc;}, {})
// console.log(result)

const orders = [
  { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
  { id: 102, items: [{ sku: "B2", qty: 1 }] },
  { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

let result = orders.find( x => (x.items).some(i => i.sku === "B2"))
console.log(result)