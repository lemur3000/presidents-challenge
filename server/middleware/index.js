import express from 'express'
import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import DashboardPlugin from 'webpack-dashboard/plugin'
import webpackConfig from '../../config/webpack.dev.babel.js'

export default app => {
  if (process.env.NODE_ENV === 'development') {
    return devMiddleware(app)
  } else {
    // there ain't no production right now so just chill the hell out.
  }
}

function devMiddleware(app) {
  const compiler = webpack(webpackConfig)
  compiler.apply(new DashboardPlugin())

  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    silent: true,
    publicPath: '/',
    stats: 'errors-only',
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.use(express.static(path.join(process.cwd(), '/')))

  const file = fs.readFileSync(path.join(process.cwd(), 'build', 'index.html'))
  return (req, res, next) => res.send(file.toString())
}