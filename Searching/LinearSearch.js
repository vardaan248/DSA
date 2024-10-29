let arr = [3, 15, 12, 9, 6];

console.log(linearSearch(arr, 9));

function linearSearch(arr, key) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
}