"use strict";
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(arr, key) {
    return arr.reduce((map, item) => {
        const itemKey = item[key];
        let currEl = map[itemKey];
        if (Array.isArray(currEl)) {
            currEl.push(item);
        }
        else {
            currEl = [item];
        }
        map[itemKey] = currEl;
        return map;
    }, {});
}
const res = group(data, 'group');
console.log(res);
