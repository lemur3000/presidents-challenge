import 'babel-polyfill'
import express from 'express'
import c from 'chalk'
import bodyParser from 'body-parser'
import middleware from './middleware'
import mongoose from 'mongoose'
import * as presidents from './middleware/presidents'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1/presidents-challenge')
mongoose.connection.on('error', console.error.bind(console, c.red('Connection error:')))
mongoose.connection.once('open',  _ => console.log(c.green('DB connected 🖖🏽'), '\n'))

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
const sendFile = middleware(app)

app.get('/api/presidents', presidents.getAll)

app.get('*', sendFile)

app.listen(3000, _ => console.log('Listening 🌐'))