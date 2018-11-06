import express from 'express'
import { create, findAll } from '../controllers/TweetController'
import { likes } from '../controllers/LikesController'
const routes = express.Router()

routes.get('/tweets', findAll)
routes.post('/tweets', create)
routes.put('/tweets/likes/:id', likes)

export default routes
