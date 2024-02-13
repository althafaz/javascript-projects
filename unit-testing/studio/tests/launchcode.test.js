// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!

  it('value of organization should be nonprofit',()=>{
      expect(launchcode['organization']).toEqual('nonprofit')
  })

  it('value of executive director name should be Jeff',()=>{
    expect(launchcode).toHaveProperty('executiveDirector','Jeff')
  })

  it('value of percentage cool employees should be launchcode',()=>{
    expect(launchcode['percentageCoolEmployees']).toBeLessThanOrEqual(100)
  });

  it('should contain "Web Development", "Data Analysis", "Liftoff" and the array length is 3',()=>{
    const arr = ["Web Development", "Data Analysis", "Liftoff"]
    expect(launchcode['programsOffered']).toEqual(expect.arrayContaining(['Web Development']))
    expect(launchcode['programsOffered'][1]).toEqual('Data Analysis')
    expect(launchcode['programsOffered']).toStrictEqual(expect.arrayContaining(arr))
    expect(launchcode['programsOffered']).toHaveLength(3)
  })

  it('launchouput function to met all the requirement',()=>{
    expect(launchcode.method(4)).toEqual('Launch!')
    expect(launchcode.method(9)).toEqual('Code!')
    expect(launchcode.method(25)).toEqual('Rocks!')
    expect(launchcode.method(12)).toEqual('LaunchCode!')
    expect(launchcode.method(15)).toEqual('Code Rocks!')
    expect(launchcode.method(10)).toEqual('Launch Rocks!')
    expect(launchcode.method(30)).toEqual('LaunchCode Rocks!')
    expect(launchcode.method(7)).toEqual(`Rutabagas! That doesn't work.`)
  })

});