import server from "./server.js"
import config from '../utils/config.js'
const {
    port
} = config

server.listen(port)
.on('listening',()=>{
    console.log('server running at ',`http://127.0.0.1:${port.toString()}`)
})

