// test.js
const { fetchData, fetchPromise } = require('./async.js');

test('hemlo world callback testing', done => {
    function callback(data) {
        try {
            expect(data).toBe('hemlo world');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

//Testing Promise - 
test('Promise testing', () => {
    return expect(fetchPromise()).resolves.toBe('hemlo world');
});

//Adding a test if promise rejects - 
// test('Promise rejects testing', () => {
//     return expect(fetchPromise()).rejects.toThrow('Error');
// });
// this will fail as promise was resolved


//Asynchronous testing using async-await
test('Async await testing', async () => {
    const data = await fetchPromise();
    expect(data).toBe('hemlo world');
});
// async indicates function as a asynchronous, in testing it is very useful
// await is a keyword that is used along side async, it tells js to wait till the promise settles and returns
//So it pauses the test untill async funtion results.