let arr = [3, 6, 9, 12, 15]; // the array should be sorted

console.log(binarySearch(arr, 3));

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.ceil((left + right) / 2);
        
        if (arr[mid] == key) {
            return mid;
        }

        if (arr[mid] < key) {
            left = mid + 1;
        }

        if (arr[mid] > key) {
            right = mid - 1;
        }
    }

    return -1;
}