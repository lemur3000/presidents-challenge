import mongoose, { Schema } from 'mongoose'

const Challenge = new Schema({
  presidents: [Schema.Types.ObjectId],
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }
})

export default mongoose.model('Challenge', Challenge)