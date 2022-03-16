import {jest,expect,describe,test} from '@jest/globals'
import { handler } from '../../../server/routes'
import config from '../../../utils/config'
import Test_Utility from '../_util/testUtil'

const {
    location,
    pagesHTML:{
        home,
        controller
    }
} = config

describe('#Routes',()=>{
    beforeEach(()=>{
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })

    test("GET / - Should Go to Home Page",async ()=>{
        const params = Test_Utility.handleParams()
        params.request.method = "GET"
        params.request.url = "/"

        await handler(...params.values())

        expect(params.response.writeHead).toBeCalledWith(
            302,
            {
                "location":location.home
            }
        )
        
    })
    test.todo(`GET /home - Should Return ${home} Page Stream`)
    test.todo(`GET /controller - Should return ${controller} Page Stream`)
    test.todo(`GET /file.ext - Should response with file stream`)
    test.todo(`GET /unknown - Should response as inextent route and status of 404`)
    
    describe('exceptions',()=>{
        test.todo('Asking for inexistent file should return status 404')
        test.todo('given a error shold response with status 500')
    })
})