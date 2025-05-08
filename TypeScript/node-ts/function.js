function latefn(fn) {
    setTimeout(fn, 1000);
}
latefn(function () {
    console.log("hello!");
});
