import express from "express"
const app = express()
const port = 3000

import path from 'path'
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) + '/view'

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(_, res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/produtos', (_, res) => {
    res.sendFile(__dirname + '/produtos.html')
})

app.get('/sobre', (_, res) => {
    res.sendFile(__dirname + '/sobre.html')
})

app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`)
})