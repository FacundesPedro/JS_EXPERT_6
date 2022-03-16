import server from "./server.js"
import config from '../utils/config.js'

server.listen(config.port)
.on('listening',()=>{
    console.log('server running at ',`http://127.0.0.1:${config.port.toString()}`)
})

