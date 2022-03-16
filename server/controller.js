import {Bussines} from './stream.js'

export class Controller{
    constructor(){
        this.bussines = new Bussines()
    }

    async getFileStream(file){
        return this.bussines.getFileStream(file)
    }
}