const express = require('express')
const app = express()
const connectDB = require ('./config/Db');
const port = 5000||Process.env.PORT
const cors = require ('cors');



///connect Mongo////
connectDB();


/////middleware body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//////middleware cors
app.use(cors());


////routes

app.use('/api/login', require('./Routes/api/login'))
app.use('/api/register', require('./Routes/api/register'))



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening on port ${port}!`))
