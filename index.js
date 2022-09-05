require('dotenv').config();
const PORT = process.env.PORT || 5001;
const express = require('express');
const app = express();
const defaultRoutes  = require('./routes/defaultRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');


// all routes
// app.use('/api/trade')
app.use(cors())
app.use('/api', defaultRoutes )
app.use('/user', userRoutes )

app.listen(PORT, ()=>{
    console.log('server started at', PORT)
})