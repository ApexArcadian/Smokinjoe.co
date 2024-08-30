const myArray = ["this ", "array ", "contains", 2, "data", "types"]

const changedArray = doThingToArrayElements(myArray, (x)=> Number.isInteger(x));

console.log(changedArray);

function doThingToArrayElements(array, callback) {
    const _a = [];
    for (const x of array) {
        if(!callback(x)) {
            _a.push(x);
        } else {
            _a.push(x.toString());
        }
    }
    return _a;
}