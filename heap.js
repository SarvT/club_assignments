function hsort(arr) {
  let N = arr.length;

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(arr, N, i);
  }

  for (let i = N - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0);
  }
  return arr;
}

function heapify(arr, N, i) {
  let max = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < N && arr[l] > arr[max]) max = l;

  if (r < N && arr[r] > arr[max]) max = r;

  if (max != i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    heapify(arr, N, max);
  }
}

earr = [78, 12, 56, 98, 02];
let N = earr.length;
console.log(hsort(earr));
