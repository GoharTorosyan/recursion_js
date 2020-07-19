const removeFirstElement = (arr) => {
    function iter(arr, acc) {
        if (arr.length === 0 || arr.length === 1) {
            return [];
        }

        const [first, ...rest] = arr;

        if (acc === 1) {
            return arr;
        }

        return iter(rest, acc + 1);
    }
    return iter(arr, 0);
};

const arr = [6, 78, "n", 0, 1];

console.log(removeFirstElement(arr)); //[78, "n", 0, 1]