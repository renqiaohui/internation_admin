const path = require('path')
const Koa = require('koa')
const static = require('koa-static')

const app = new Koa()
const isProduction = process.env.NODE_ENV === 'production'
app.use(bodyParser())

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './dist'
app.use(static(path.join( __dirname, staticPath)))

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE')
  ctx.set('Access-Control-Allow-Headers', '*')
  ctx.set("Content-Type", "application/json; charset=utf-8")
  if (ctx.request.method == "OPTIONS") {
    ctx.response.status = 200
  }
  await next()
})

app.listen(6000, () => {
  console.log(`server start at port 3000`)
})
