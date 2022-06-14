const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())
const port = 3030

app.get('/service', (req, res) => {
    res.json({data:[405,345,850,800]})
})

app.get('/type', (req, res) => {
    console.log("in")
    res.json({data:[50,45,60,80,130]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})