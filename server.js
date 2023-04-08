const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})