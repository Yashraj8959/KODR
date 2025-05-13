import { configDotenv } from 'dotenv'
configDotenv();
import app from './src/app.mjs'
import { connectDB } from './src/db/db.js';
connectDB();


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})