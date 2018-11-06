import mongoose from 'mongoose'

export const connection = () => {
  return mongoose.connect(
    'mongodb://localhost:27017/api-node-twitter',
    { useNewUrlParser: true }
  )
}
