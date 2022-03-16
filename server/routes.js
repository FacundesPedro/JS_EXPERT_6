import {Controller} from './controller.js'
import config from '../utils/config.js'

const {
    location,
    pagesURL
} = config

const controller = new Controller()


export async function routes(req,res){
    const { method, url } = req

    if(method === "GET" && url === "/"){
        res.writeHead(302,{
            'location':location.home
        })
        res.end()
    }
    if(method === "GET" && url === "/home"){
        const {
            stream,
            _type
        } = await controller.getFileStream(pagesURL.home)

        return stream.pipe(res)
    }
    if(method === "GET" && url === "/controller"){
        const {
            stream,
            _type
        } = await controller.getFileStream(pagesURL.controller)

        return stream.pipe(res)
    }

    res.writeHead(404)
    return res.end()
}