import {createReadStream} from 'fs'
import config from '../utils/config.js'
import path, {extname, join} from 'path'
import fsPromises from 'fs/promises'
const {
     _dir:{
         publicDir
     }
} = config

export class Bussines{
    createStream(path){
        return createReadStream(path)
    }

    async getFileInfo(file){
        const _fullFilePath = join(publicDir,file)

        await fsPromises.access(_fullFilePath)
        const _fileType = extname(_fullFilePath)
        return {
            _type:_fileType,
            _path:_fullFilePath
        }
    }

    async getFileStream(file){
        const {_path,_type} = await this.getFileInfo(file)


        return{
            stream:this.createStream(_path),
            _type
        }
    }
}