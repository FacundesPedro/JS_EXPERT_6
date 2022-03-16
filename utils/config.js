import {
    join,
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'

const dir = dirname(fileURLToPath(import.meta.url))
const pwd = join(dir,'../')
const audioDir = join(pwd,'../','audio')
const publicDir = join (pwd,'../','public')

export default {
    port:process.env.PORT || 8080,
    _dir:{
        pwd,
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