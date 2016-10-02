import c from 'chalk'
import mongoose from 'mongoose'
import presidents from './presidents.json'
import President from '../server/models/President'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/presidents-challenge')
mongoose.connection.on('error', console.error.bind(console, c.red('Connection error:')))
mongoose.connection.once('open', _ => console.log(c.green('DB connected 🖖🏽'), '\n'))

President
  .remove()
  .then(_ => seedDB(presidents.data))

function seedDB(data) {
  data.map(x =>
    new President({
      name: x.name,
      image: x.image,
      drink: { name: x.drink }
    })
  )
  .map(x => x.save((err, president) => {
    if (err) {
      console.log(c.bgRed(err))
    } else {
      console.log(c.green(president.name, 'added'))
    }
  }))
}