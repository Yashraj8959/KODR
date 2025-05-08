function identity<T>(arg:T):T{
    return arg;
}

const p1 = identity<string>("yash")
const p2 = identity<number>(22)

console.log(p1,p2)

// function getFirstElement<T>(arr: T[]) {
//     return arr[0];
// }

// const el = getFirstElement<string>(["Yash", 2]);   // Type 'number' is not assignable to type 'string'.
// console.log(el.toLowerCase())

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement(["Yash", "Raj"]);
console.log(el.toLowerCase()) 