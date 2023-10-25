### terminal command (emitter import export)
1. ``cd ..`` to access back to the Freetime Project directory
2. ``mkdir event-emitter`` to create the folder
3. ``cd event-emitter`` to access to that directory
4. ``code .`` to open this folder on VScode
5. set up NPM again ``npm init``
6. `` npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node `` install babel to transplier older version
- Create file `.babelrc`
- Add setting to support ES6 version (just add this to `.babelrc` file) 
```
{
    "presets": ["@babel/preset-env"]
}
```
7. This program will run on `dist/main.js` when tpye `npm run build` % `npm run start` because we changed script section in `package.json` to be
```
 "scripts": {
    "start": "node dist/main.js",
    "build": "babel src --out-dir dist"
  }
``` 
8. type `ctrl c` in terminal to stop interval function that keep sending data every timeout

**description**
The 'events' module is not typically found in the 'node_modules' folder because it's a core module provided by Node.js itself. Core modules are built-in and are available as part of the Node.js runtime, so you don't need to install them separately, and they are not stored in the 'node_modules' directory.

You can import the 'events' module directly in your Node.js application without specifying a path, like this:

```javascript
import EventEmitter from 'events';
```

Node.js will automatically provide the 'events' module for you, and you don't need to locate it in the 'node_modules' folder because it's not installed as an external package. It's part of the Node.js runtime, so it's always available when you run Node.js applications.

### sync vs async
Let's explore the concepts of asynchronous and synchronous interactions in the context of backend development.

**Synchronous Interaction:**

Synchronous interaction means that tasks or operations are executed one after the other in a sequential manner. In the context of a web server, this would work as follows:

1. A client (e.g., a web browser) sends a request to the server.
2. The server receives the request and processes it immediately.
3. The server performs any necessary operations, like reading from a database or performing some computation.
4. The server sends a response back to the client.
5. The client receives the response.

During this process, each step is completed before moving on to the next. This is analogous to standing in a queue. Each task waits for the previous one to finish before starting, and the order is strictly maintained.

**Asynchronous Interaction:**

Asynchronous interaction, on the other hand, allows tasks to execute independently and in parallel, without waiting for each other to complete. In a web server, this might look like:

1. A client sends a request to the server.
2. The server receives the request and starts processing it but doesn't wait for it to finish.
3. The server can initiate multiple parallel tasks, such as making database queries, sending requests to external services, or performing other non-blocking operations.
4. As each task is completed, it can notify the server.
5. The server can continue processing other tasks in parallel.
6. Once all tasks are completed, the server sends a response back to the client.

Asynchronous interactions are more like juggling multiple balls; you can throw one in the air and keep juggling others while it's still in the air. This approach can significantly improve the efficiency of a system, especially when tasks take time, such as I/O operations (e.g., reading from a database or making API requests).

**Normal Interaction in Backend:**

In the backend, the "normal" or typical interaction depends on the specific use case and the design of the system. Both synchronous and asynchronous interactions are commonly used in backend development.

- For simple, straightforward tasks where one operation doesn't depend on the outcome of another, synchronous interactions might be sufficient.

- For more complex and scalable applications, where tasks can be parallelized and where you want to avoid blocking the server while waiting for external resources, asynchronous interactions are often preferred.

In modern web development, many backend systems use a combination of both synchronous and asynchronous approaches, depending on the requirements of the task. Asynchronous interactions are often used for I/O-bound tasks, while synchronous interactions are used for tasks that require immediate responses or where one operation depends on the outcome of another. This flexibility allows developers to design efficient and responsive backend systems that can handle a wide range of use cases.