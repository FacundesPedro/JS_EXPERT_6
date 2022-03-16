import {Controller} from './controller.js'
import config from '../utils/config.js'

const {
    location,
    pagesHTML,
    constants:{
        CONTENT_TYPE
    }

} = config

const controller = new Controller()


async function routes(req,res){
    const { method, url } = req

    if(method === "GET" && url === "/"){
        res.writeHead(302,{
            'location':location.home
        })
        return res.end()
    }
    if(method === "GET" && url === "/home"){
        const {
            stream,
            _type
        } = await controller.getFileStream(pagesHTML.home)

        return stream.pipe(res)
    }
    if(method === "GET" && url === "/controller"){
        const {
            stream,
            _type
        } = await controller.getFileStream(pagesHTML.controller)

        return stream.pipe(res)
    }

//load files to http server
    if(method === "GET"){
        const {
            stream,
            _type
        } = await controller.getFileStream(url) 

        const contentType = CONTENT_TYPE[_type]
        if(contentType){
            res.writeHead(200,{'Content-Type':contentType})
        }
        
        return stream.pipe(res)
    }

    res.writeHead(404)
    return res.end()
}

function handleError (err,res){
    if(err) {
        res.writeHead(500)
        console.error("ERROR ",err)
        return res.end()
    }
}

export function handler(req,res){
    return routes(req,res)
        .catch(err => handleError(err,res))
}