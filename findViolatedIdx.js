const findViolatedIdx = (arr, idx) => {
    if (idx === arr.length - 1) {
        return -1;
    }

    if (arr[idx + 1] >= arr[idx]) {
        return findViolatedIdx(arr, idx + 1);
    }

    return idx + 1;
};

const arr = [-9, -4, -4, 3, 12, 4, 5];

console.log(findViolatedIdx(arr, 0)); // 5

