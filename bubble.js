function bub(arr) {
  var a, b;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      a = arr[i];
      b = arr[j];
      if (a > b) {
        arr[i] = b;
        arr[j] = a;
      }
    }
  }
  return arr;
}

earr = [78, 12, 56, 98, 02];
console.log(bub(earr));