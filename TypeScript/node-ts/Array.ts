let arr1:number[] = [2,3,5,6,8]

function maxinarr(arr:number[]):number {
    let max = 0;
    for(let i:number = 0; i<arr.length;i++) {
        if(arr[i]>max) max = arr[i];
    }
    return max;
}
const mx:number = maxinarr(arr1)
console.log(mx);



interface User3 {
    name:string,
    age:number
}

const users:User3[] = [{
    name: "abc1",
    age:14
},{
    name: "abc2",
    age:19
},{
    name: "abc3",
    age:14
},{
    name: "abc4",
    age:8
}
]

const filtered = users.filter(x => x.age>18)
console.log(filtered)