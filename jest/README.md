#  JEST - JS testing framework.

Jest official site - https://jestjs.io
[Jest Documentation](https://jestjs.io/docs/getting-started)
Jest is a popular JavaScript testing framework developed by Facebook. It is widely used for testing JavaScript code, especially in React applications, although it can be applied to any JavaScript project. Jest provides a rich set of features that simplify the testing process and enhance developer productivity. Here's a breakdown of the key aspects of Jest:

1. **Test Runner**: Jest acts as a test runner, executing test suites and reporting results. It runs tests in parallel, which improves performance, especially in larger projects.

2. **Assertion Library**: Jest comes bundled with an assertion library called Expect. This library provides a wide range of assertion methods for verifying expected outcomes in your tests. For example, `expect(someValue).toBe(expectedValue)` is a common assertion used to check for equality.

3. **Mocking**: Jest simplifies the process of mocking dependencies in your tests. It provides built-in mocking capabilities that allow you to replace external dependencies with mock implementations. This is particularly useful when testing components that rely on external APIs or modules.

4. **Snapshot Testing**: Jest includes snapshot testing, a feature that enables you to capture the output of a component or function and compare it against a stored snapshot. This is useful for detecting unintended changes in the output of your code over time. Jest makes it easy to update snapshots when intentional changes occur.

5. **Code Coverage**: Jest includes built-in support for code coverage analysis. It generates detailed reports that indicate which parts of your codebase are covered by tests and which are not. This helps you identify areas that require additional testing and ensures that your codebase is thoroughly tested.

6. **Configuration**: Jest offers extensive configuration options that allow you to customize its behavior to suit your project's specific requirements. You can configure Jest to work with different testing environments, set up test-specific behavior, and integrate with other tools and libraries.

7. **Watch Mode**: Jest includes a watch mode that automatically re-runs tests when changes are detected in your codebase. This is useful for quickly iterating on tests during development and ensuring that your tests remain up-to-date as your code evolves.

8. **Support for Different Test Types**: Jest supports various types of tests, including unit tests, integration tests, and end-to-end tests. It provides a flexible testing environment that accommodates different testing strategies and methodologies.

Overall, Jest is a powerful and versatile testing framework that streamlines the testing process and helps developers write robust and reliable JavaScript code. Its comprehensive feature set, ease of use, and strong community support make it a popular choice for JavaScript testing.

## Matchers in Jest 
[Matchers](https://jestjs.io/docs/using-matchers) in jest are used to test different type of data, they basically let us assert values in different ways. so in the file example toBe is a matcher.
1. toBe - is used for numbers, strings & booleans
2. toEqual - It is used when comparing the value of objects & arrays 
3. toBeFalsy  - We use falsy to check if the value is null, undefined, if its zero, if its false, if its blank, 
4. toBeGreaterThan - It is used to check if the value is greater than the expected value
5. toBeTruthy - Opposite of Falsy, It is used to check if the value is not null, undefined, if its not zero, if its not false, if its not blank.
5. Error handling with toThrow - If use error handling to check whether function throus and error ? We can use to see if function is properly throwing error or not. So particularly used to test the functions that are designed to validate the input and throw error.
There are many more one can [Explore here](https://jestjs.io/docs/using-matchers)
## Asyncronous code testing -
Tetsing asynchronous code is bit complex, and not straignforward as testing normal functions. Its vital and imp, asynchronous code is part of the core of any web application and allows for the execution of some operations in the background and does not block the main execution of the program. Jest provides a way to test asynchronous code using Promises, callback, async/await.

### How to test Callbacks - 
In async files we have done the following steps -
1. Create a function that takes a callback function as an argument
2. Call the function and pass in a callback function as an argument
3. In the callback function, write the code that you want to test
4. Create test for the data the callback is talking and passing to the function.

### How to test Promises Resolve and Reject
To test promises resolving and rejecting using Jest, you can use the `expect` function along with `resolves` and `rejects` matchers. Here's a simple example:

```javascript
// myPromise.js
function myPromise(boolValue) {
  return new Promise((resolve, reject) => {
    if (boolValue) {
      resolve("Success!");
    } else {
      reject(new Error("Failure!"));
    }
  });
}

module.exports = myPromise;
```

And here's the corresponding test file:

```javascript
// myPromise.test.js
const myPromise = require('./myPromise');

test('Promise resolves correctly', () => {
  return expect(myPromise(true)).resolves.toBe("Success!");
});

test('Promise rejects correctly', () => {
  return expect(myPromise(false)).rejects.toThrow("Failure!");
});
```

Explanation:

- In the first test, we expect the promise to resolve successfully with the value `"Success!"`.
- In the second test, we expect the promise to reject with an error message `"Failure!"`.

Make sure you have Jest installed (`npm install --save-dev jest`) and configured in your project before running these tests.

### Async - await -
test('Async await testing', async () => {
    const data = await fetchPromise();
    expect(data).toBe('hemlo world');
});
1. async indicates function as a asynchronous, in testing it is very useful 
2.  await is a keyword that is used along side async, it tells js to wait till the promise settles and returns So it pauses the test untill async funtion results.

### Mock Functions And Spices
So unit testing isolate the components being tested.
Mocks are fake implementations of real functions and spices are tools that are used to track behaviours of those functions. So they track behaviours such as - whether the function has been called, how many times being called or with what arguments the function was called.

#### Mocking
Mocking basically allows you to replace or slow or unavailable dependency with simpler versions. This isolation prevents test being affected from external factors.

Jest FN is a way of creating moc functions in Jest - It can be implemented to return a specific value or perform a specific action.

`const mockCallback = jest.fn((x)=> { return 50 + (x*2)});`
Now it can be expect with - toBe, toHaveBeenCalledWith,etc

#### SPY

jest.spyOn is a function provided by the Jest testing framework for JavaScript. It allows you to create a "spy" or a mock function that tracks calls to another function or method. This is particularly useful in testing scenarios where you want to verify that certain functions or methods are being called and with what arguments.

1. Syntax: The syntax for jest.spyOn is jest.spyOn(object, methodName). It takes two parameters:

object: The object containing the method you want to spy on.
methodName: The name of the method you want to spy on.
2. Functionality: When you use jest.spyOn, it replaces the specified method on the object with a mock function. This mock function behaves similarly to the original method but also records information about its calls, such as how many times it was called and with what arguments.

3. Usage: Once you've created a spy using jest.spyOn, you can use it to assert that certain behaviors occur during your test. Common assertions include checking if the method was called (toHaveBeenCalled()), how many times it was called (toHaveBeenCalledTimes(n)), and with what arguments (toHaveBeenCalledWith(...args)).

4. Cleanup: After your test is complete, it's good practice to restore the original method. This is done using spy.mockRestore(), where spy is the variable holding the spy created by jest.spyOn. This ensures that subsequent tests or code execution aren't affected by the spy.

## User Logs -
We installed jest - npm install --save jest
Now change the test  value to jest in pkg.json so that jest runs our test files when `test` is commanded.

Unit Test - It is process of testing small pieces of code to deliver information early, to see if there are errors or not.
We can check functions, classes, etc
Create a function, import it in it's test file, write test -

test("description", ()=> {
    expect().toBe();
})
