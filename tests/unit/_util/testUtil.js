import {jest} from '@jest/globals'
import {Readable,Writable} from 'stream'
import { handler } from '../../../server/routes'

export default class Test_Utility{
    static createReadableStream(data){
        return new Readable({
            read(){
                for (const dataItem of data) {
                    this.push(dataItem)
                }
                this.push(null)
            }
        })
    }
    static createWritableStream(onData){
        return new Writable({
            write(chunk,encod,callB){
                onData(chunk)
                 
                callB(null,chunk)
            }
        })
    }

    static handleParams(){
        const reqStream = Test_Utility.createReadableStream(['alguma coisa'])
        const resStream = Test_Utility.createWritableStream(()=>{})

        const data ={
            request: Object.assign(reqStream,{
                headers:{},
                method:'',
                url:''
            }),
            response:Object.assign(resStream,{
                writeHead:jest.fn(),
                end:jest.fn()
            })
        }



        return {
             values: () =>Object.values(data),
             ...data,
        }
    }
}