const http = require('http')
const port = 3000

const server = http.createServer(function(req, res) {
    res.write('Hello world!')
    res.end()
})

server.listen(port, function(error) {
    if(error){
        console.log('Server went wrong', error)    
    } else {
        console.log('Server is working fine on port' + port)
    }
})