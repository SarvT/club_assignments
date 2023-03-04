function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var L = new Array(n1);
  var R = new Array(n2);
  for (var i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  var i = 0,
    j = 0,
    k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
function msort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  msort(arr, l, m);
  msort(arr, m + 1, r);
  merge(arr, l, m, r);
  return arr;
}

earr = [78, 12, 56, 98, 02];
var n = earr.length;

console.log(msort(earr, 0, n - 1));