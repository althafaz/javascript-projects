const checkFive = require('../checkFive')

describe('checkFive',()=>{
    it('should be less than five', ()=>{
        let output = checkFive(4)
        expect(output).toEqual('4 is less than 5.')
    });

    it('throw an error if the value greater than five',()=>{
        let output = checkFive(6)
        expect(output).toEqual('6 is greater than 5.')
    });

    it('value is equal to five',()=>{
        let output = checkFive(5)
        expect(output).toEqual('5 is equal to 5.')
    });
})