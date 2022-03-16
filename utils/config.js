import {
    join,
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'

const dir = dirname(fileURLToPath(import.meta.url))
const root = join(dir,'../')
const audioDir = join(root,'audio')
const publicDir = join (root,'public')

export default {
    port:process.env.PORT || 8080,
    _dir:{
        root,
        publicDir,
        audioDir,
        songsDir:join(audioDir,'songs'),
        fx: join(audioDir,'fx')
    },
    pagesHTML:{
        home:'home/index.html',
        controller:'controller/index.html'
    },
    location:{
        home:'/home'
    },
    constants:{
        CONTENT_TYPE:{
            '.html':'text/html',
            '.css':'text/css',
            '.js':'text/javascript',
        }
    }
}