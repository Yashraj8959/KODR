const app = require('./src/app')
const port = 3000

const {connect} = require('./src/db/db')
connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })