function divi(arr, l, r){
    pivot = arr[r];
    i=(l-1);
    for (let j = l; j < r; j++){
        if (arr[j]<pivot) {
            i++;
            [arr[i] , arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1] , arr[r]] = [arr[r], arr[i+1]];
    return i+1;
}

function qui(arr, l, r){
    if (l<r) {
        pivot = divi(arr, l, r);
        qui(arr, l, pivot-1);
        qui(arr, pivot+1, r);
        return arr;
    }
}

earr = [78, 12, 56, 98, 02];
n = earr.length;
console.log(qui(earr, 0, n-1));