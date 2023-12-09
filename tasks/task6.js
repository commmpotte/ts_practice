"use strict";
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'bigint':
        case 'symbol':
        case 'function':
        case 'boolean':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(toString(3));
console.log(toString('dfdf'));
console.log(toString(true));
console.log(toString(['a', 'b']));
console.log(toString({ a: 1 }));
