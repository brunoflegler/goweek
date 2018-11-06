import TweetRouter from './TweetRouter'

const baseUrl = '/api'

export const routes = async app => {
  app.use(baseUrl, TweetRouter)
}
