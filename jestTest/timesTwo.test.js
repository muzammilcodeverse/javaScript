let timesTwo = require('./timesTwo');

test("It rturns the Two times of a Number",()=>{
    expect(timesTwo(10)).toBe(20);
})