const user = {
  id: 2,
  name: "Akash",
  job: "shopkeeper",
  age: 25,
  isStudy: true,
  phone: "VIVO",
};
// console.log(user);
/**
 * {
  id: 2,
  name: 'Akash',
  job: 'shopkeeper',
  age: 25,
  isStudy: true,
  phone: 'VIVO'
} ==>> Javascript
 * {"id":2,"name":"Akash","job":"shopkeeper","age":25,"isStudy":true,"phone":"VIVO"} ==> JSON file
 * **/
//  Javascript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: "Bijli",
  age: 32,
  isMarried: false,
  sex: "female",
  address: {
    street: "sona potti vuter goli",
    city: "Modonpur",
    country: "Bangladesh",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 521000,
  isOpen: true,
  isNew: false,
};
const shopJson = JSON.stringify(shop);
console.log(shop);
console.log(shopJson);

const shoObj = JSON.parse(shopJson);
console.log(typeof shoObj);
