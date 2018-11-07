import express from 'express'
import '../db'
import cors from 'cors'
import http from 'http'
import socket from 'socket.io'
import TweetRouter from '../routes/TweetRouter'

const app = express()
const server = http.Server(app)
const io = socket(server)

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  req.io = io
  return next()
})

// routes
app.use('/api', TweetRouter)

export default app
