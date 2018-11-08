import Tweet from '../models/Tweet'

export const likes = async (req, res) => {
  const tweet = await Tweet.findById(req.params.id)

  tweet.set({
    likes: tweet.likes + 1
  })

  await tweet.save()
  req.io.emit('like', tweet)

  console.log('like')

  return res.json(tweet)
}
