interface User {
    name:string,
    email:string,
    age:number
}

const User1:User = {
    name: "yashraj",
    email: "",
    age:22

}
function isLegal(user:User):boolean{
    if(user.age<18){
        return false;
    }
    else return true;
}

const ans = isLegal(User1);
console.log(ans)