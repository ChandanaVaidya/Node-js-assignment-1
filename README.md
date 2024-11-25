# Node-js-assignment-1
Promise, fs module and async/wait

This is a  Node js project that demonstrates using **Promises**, the **fs module**, and **async/await**. It also includes basic Git usage to manage version control and push the code to GitHub.

- Uses **Promises** to handle asynchronous operations.
- Demonstrates writing to a file using the **fs module** with **async/await**.

## Promises

A **Promise** in JS represents an asynchronous operation that will complete at some point in  future. It can be in one of three states:

1. **Pending**: The task is still ongoing.
2. **Resolved**: The task completed successfully.
3. **Rejected**: The task failed.

Promises allows to attach callbacks using `.then()` for when the promise resolves and `.catch()` for handling errors when the promise is rejected.

## async/await

`async/await` is a syntax in JavaScript for working with promises. It makes asynchronous code look and behave more like synchronous code, making it easier to read and understand.

- **`async`** is used to declare a function that will return a promise.
- **`await`** is used inside an `async` function to pause the function’s execution until the promise is resolved or rejected.

Using `async/await` allows for a more linear, readable flow of code compared to chaining `.then()` and `.catch()`.

