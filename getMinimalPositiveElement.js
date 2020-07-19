function getMinimalPositiveElement(arr, idx) {
    let finalItem = Math.max(...arr);
    function iter(arr, idx, acc) {
        if (finalItem < 0) {
            return -1;
        }

        if (arr.length === idx) {
            return acc;
        }

        if (finalItem >= arr[idx] && arr[idx] >= 0) {
            finalItem = arr[idx];
        }

        return iter(arr, idx + 1, finalItem);
    }

    return iter(arr, 0, 0);
}

const numbers = [45, -9, 15, 5, -78];

console.log(getMinimalPositiveElement(numbers, 0));