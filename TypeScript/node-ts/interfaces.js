var User1 = {
    name: "yashraj",
    email: "",
    age: 22
};
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else
        return true;
}
var ans = isLegal(User1);
console.log(ans);
