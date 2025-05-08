var arr1 = [2, 3, 5, 6, 8];
function maxinarr(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}
var mx = maxinarr(arr1);
console.log(mx);
var users = [{
        name: "abc1",
        age: 14
    }, {
        name: "abc2",
        age: 19
    }, {
        name: "abc3",
        age: 14
    }, {
        name: "abc4",
        age: 8
    }
];
var filtered = users.filter(function (x) { return x.age > 18; });
console.log(filtered);
