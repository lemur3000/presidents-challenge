import mongoose, { Schema } from 'mongoose'

const President = new Schema({
  name: String,
  image: String,
  drink: {
    name: String,
  }
})

export default mongoose.model('President', President)