import President from '../models/President'

export function getAll(req, res, next) {
  President
    .find()
    .exec()
    .then(x => {
      console.log(x)
      res.json(x)
    })
}