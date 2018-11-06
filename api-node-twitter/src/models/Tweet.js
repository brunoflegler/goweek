import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  author: String,
  content: String,
  likes: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Tweet', schema)
