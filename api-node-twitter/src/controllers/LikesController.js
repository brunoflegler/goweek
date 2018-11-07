import Tweet from '../models/Tweet'

export const likes = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id)

  if (tweet === null) res.send(new Error()).status(500)

  tweet.set({
    likes: tweet.likes + 1
  })

  await tweet.save()

  req.io.emit('like', tweet)

  return res.json(tweet)
}
