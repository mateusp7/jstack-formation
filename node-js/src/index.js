const http = require('http')
const { URL } = require('url')

const bodyParser = require('./helpers/bodyParser')
const routes = require('./routes')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)

  let { pathname } = parsedUrl
  let id = null

  const splitEndpoint = pathname.split('/').filter(Boolean)

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const route = routes.find(route => route.endpoint === pathname && route.method === request.method)

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    request.params = { id }

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'content-type': 'text/html' })
      response.end(JSON.stringify(body))
    }
    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      return bodyParser(request, () => route.handler(request, response))
  }
    return route.handler(request, response)
  } 
  response.writeHead(404, { 'content-type': 'text/html' })
  response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  
})

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})