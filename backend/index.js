const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 3000
const rutas = require('./routes')

/*app.post('/guardar', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.send('Hello World!')
})*/


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(rutas)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})