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
    pagesURL:{
        home:'home/index.html',
        controller:'controller/index.html'
    },
    location:{
        home:'/home'
    }
}