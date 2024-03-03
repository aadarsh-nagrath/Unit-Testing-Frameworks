const sum = require('./sum');
test ('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

//test takes description & expect and toBe

//example of toBe
test ('adds 2 + 2 to equal 4', () => {
    expect(2+2).toBe(4);
});

//example of toEqual
test ('object assignkment', () => {
    const dict = {one: 1};
    dict['two'] = 2;
    expect(dict).toEqual({one: 1, two: 2});
    expect();
});

//example of falsy
test('null & 0 is false, 3 is truthy', () => {
    const val = null;
    const a = 0;
    const b = 3;
    expect(a).toBeFalsy();
    expect(val).toBeFalsy();
    expect(b).toBeTruthy();
})

// example to check whether the function sum is properly giving error or not
test('throws error', ()=>{
    expect(sum).toThrow();
})
// If we enter wrong input like sum('hello','world') - It passes as the error occurs
// If we enter right input like sum(1,2) - It fails as the input is right so no error occurs, so fails
