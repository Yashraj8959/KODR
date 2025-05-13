import express from "express";
import cookie from "cookie-parser"
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js"

const app = express();

app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({extended:true}))




app.get('/', (req,res)=>{
    res.status(200).json({
        "message": "welcome to my Api"
    })
});
app.use('/users',userRoutes)
app.use('/blogs',blogRoutes)


export default app;
