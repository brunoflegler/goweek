import express from 'express'
import * as mongodb from './db/connection'
import { routes } from './routes'
import cors from 'cors'
import http from 'http'
import socket from 'socket.io'

const app = express()
const server = http.Server(app)
const io = socket(server)

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  req.io = io
  return next()
})

const start = async () => {
  await mongodb.connection()
  await routes(app)

  server.listen(3000, () => {
    console.log('Listening the localhost:3000')
  })
}

start()
