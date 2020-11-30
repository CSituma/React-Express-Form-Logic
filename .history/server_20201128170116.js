const express = require('express')
const app = express()
const port = 5000||Process.env.PORT
const cors = require ('cors')
const bodyParser = require('body-parser')


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening on port ${port}!`))


////middlewares///
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


