[1, 2, 3, 4, 5].reduce(function (a, c) {
  console.log(a, c);
  return a + c;
}, 0);
