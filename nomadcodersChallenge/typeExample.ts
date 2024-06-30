type Product = {
  name: string;
  size: 230 | 240 | 250;
};

const shoes_1: Product = {
  name: "Nike Air Force",
  size: 250,
};

const shoes_2: Product = {
  name: "VANS Old Skool",
  size: 230,
};

console.log(shoes_1);
console.log(shoes_2);

console.log(Object.keys(shoes_1));
console.log(Object.values(shoes_1));
console.log(Object.keys(shoes_1).length);
