import 'dotenv/config'
import express from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url'

const { APP_PORT } = process.env
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../', '../', 'front', 'build')))

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../', '../', 'front', 'build', 'index.html'))
})

app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}!`))
