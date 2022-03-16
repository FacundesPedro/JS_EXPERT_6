import {createServer} from 'http'
import {routes} from './routes.js'

export default createServer(routes)