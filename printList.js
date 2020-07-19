/**
 * @description gets Array from list values
 * @param {Object} list -list of a few of objects
 * @param {Object []} - an empty Array
 * @return {Object []}- Array which contains list values
 */

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

const printList = (tree, res = []) => {
    if (tree === null || tree === undefined) {
        return res;
    }

    return printList(tree.next, [...res, tree.value]);
};

console.log(printList(list));
