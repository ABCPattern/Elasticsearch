const restify = require('restify')

const server = restify.createServer()

//Middleware
server.use(restify.plugins.bodyParser({ mapParams: true }))
server.use(restify.plugins.queryParser())

//Routes
const methodsRoutes = require('./routes/methods')

methodsRoutes(server)

server.listen(3000, () => {
    console.log(JSON.stringify(`api is running on port 3000`));
})
