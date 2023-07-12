const app = require('express')()
const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./api/swagger.json')
import routes from "./routes/router"


http.createServer(app).listen(3000)
console.log("Listening at:// port:%s (HTTP)", 3000)


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);

// require('./endpoints')(app)