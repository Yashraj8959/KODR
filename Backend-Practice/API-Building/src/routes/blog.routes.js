import express from "express"
import { authUser } from "../middlewares/user.middleware.js";
import { createBlogs } from "../controllers/blog.controller.js";
const router = express.Router();

router.get('/', authUser ,()=>{

})
router.post('/create',authUser,createBlogs)
router.patch('/update',authUser,)
router.delete('/delete',authUser,)

export default router;