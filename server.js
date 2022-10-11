const express = require('express')
const app = express()
const PORT = 9000

require('./config/db')

// Start Middlewares 

//End Middlewares / Start Routes 




app.listen(PORT, () => {
    console.log('im on port ' + PORT)
})