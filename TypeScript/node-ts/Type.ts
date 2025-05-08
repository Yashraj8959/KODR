type Person = {
    name: string,
    age: number
}
type Person2 = {
    // name:string,
    id:id,
    salary: number,
    department: string
}

type Person3 = Person | Person2
// type Person3 = Person & Person2    // In & we must have to declare all properties of Person and Person2 
type id = string | number;

const user:Person3 = {
    id: 3242,
    name: "yashraj",
    age: 22,
    salary:243423,
    department: "CSE",
    // salary: 32344 // Object literal may only specify known properties, and salary does not exist in type Person 3.

}

console.log(user)