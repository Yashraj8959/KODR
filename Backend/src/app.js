const express = require('express')
const app = express()

const indexRoute = require('./routes/index.routes')

app.set('view engine', 'ejs')


// app.get('/', indexController )
// app.get('/about', aboutController )
// app.get('/users/profile', getProfileController )

app.use('/', indexRoute)

app.get('*',(req,res)=>{            // wild card routes must be create at end of the code or after all the routes defined
    res.render('not-found')
})



module.exports = app;