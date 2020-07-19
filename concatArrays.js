const concatArrays = (arr) => {
    function iter(arr, acc) {
        if (arr.length === 0) {
            return acc;
        }
        const [first, ...rest] = arr;

        if (Array.isArray(first)) {
            return iter([...first, ...rest], acc);
        }

        return iter(rest, [...acc, first]);
    }
    return iter(arr, []);
};

const arr = [14, [1, [[[3, []]], 1], 0]];

console.log(concatArrays(arr, [])); // [14,1,3,1,0]