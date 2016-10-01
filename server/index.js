import 'babel-polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import middleware from './middleware'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
const sendFile = middleware(app)

app.get('*', sendFile)

app.listen(3000, _ => console.log('Listening 🌐'))