function rotateArray(arr, n) {
    function iter(arr, n, acc, idx) {
        if (n === arr.length) {
            return acc;
        }
        if (n === 0) {
            return acc;
        }

        acc.unshift(arr[idx]);
        return iter(arr, n + 1, acc, idx - 1);
    }
    return iter(arr, n, arr.slice(0, n), arr.length - 1);
}

console.log(rotateArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2)); // ["g","h","a","b","c","d","e","f"]