function latefn(fn:Function):void{
    setTimeout(fn, 1000);
}
latefn(function(){
    console.log("hello!")
})