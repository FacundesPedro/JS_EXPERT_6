import {createReadStream} from 'fs'

export class Bussines{
    createStream(filename){
        return createReadStream(filename)
    }
    async getFileInfo(file){
        
    }
}