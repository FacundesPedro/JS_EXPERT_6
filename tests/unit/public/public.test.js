
import {jest,expect,describe,test,beforeEach} from '@jest/globals'

describe('#Routes - Test api response',()=>{
    beforeEach(()=>{
        jest.restoreAllMocks()
        jest.clearAllMocks()
    })
    test('myFirst_Test',()=>{
        expect(true).toBeTruthy()
    })
})