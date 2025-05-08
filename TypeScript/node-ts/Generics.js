function identity(arg) {
    return arg;
}
var p1 = identity("yash");
var p2 = identity(22);
console.log(p1, p2);
// function getFirstElement<T>(arr: T[]) {
//     return arr[0];
// }
// const el = getFirstElement<string>(["Yash", 2]);   // Type 'number' is not assignable to type 'string'.
// console.log(el.toLowerCase())
function getFirstElement(arr) {
    return arr[0];
}
var el = getFirstElement(["Yash", "Raj"]);
console.log(el.toLowerCase());
