function test(config: { readonly a: number; readonly b: number }) {
  return config.a + config.b;
}

console.log(test({ a: 5, b: 20 }));
