import Tweet from '../models/Tweet'

export const create = async (req, res) => {
  const tweet = await Tweet.create(req.body)

  req.io.emit('tweet', tweet)

  return res.json(tweet)
}

export const findAll = async (req, res) => {
  const tweets = await Tweet.find({}).sort('-createAt')
  return res.json(tweets)
}
