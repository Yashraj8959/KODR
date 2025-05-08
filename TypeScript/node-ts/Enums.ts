enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(key : Direction){
    if(key==Direction.Down)
        console.log("hello yash")
    console.log("hey yash")
}

doSomething(Direction.Down)



enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get('/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })