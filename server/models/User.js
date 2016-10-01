import mongoose, { Schema } from 'mongoose'

const User = new Scheme({
  name: String,
  password: String,
  team: {
    type: Scheme.Types.ObjectId,
    ref: 'Team'
  }
})