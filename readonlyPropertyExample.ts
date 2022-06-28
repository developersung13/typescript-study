function addTwoNumbers(config: { readonly a: number; readonly b: number }) {
  return config.a + config.b;
}

console.log(addTwoNumbers({ a: 100, b: 200 }));
