### terminal command
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

### resource
*PostMan: * [download link](https://www.postman.com/downloads/)
*Node.js: * [download link](https://nodejs.org/en/download)

**NPM (Node Package Manager)** and **Babel** are two different tools in the JavaScript ecosystem with distinct purposes and roles:

In summary, while both NPM and Babel are essential tools in JavaScript development, they serve different purposes. NPM is a package manager for managing dependencies and scripts, while Babel is a transpiler for converting modern JavaScript code into older versions for cross-browser compatibility. It's common to use both NPM and Babel in a JavaScript project, with NPM being used to manage project dependencies, including Babel itself, and Babel being used to handle code transformation.

**NPM (Node Package Manager):**

1. **Package Manager**: NPM is primarily a package manager for JavaScript. It is used to manage and install external libraries and packages that are available in the npm registry.

2. **Dependency Management**: NPM is used to specify and manage project dependencies in a `package.json` file. It allows you to define the packages your project relies on, their versions, and their interdependencies.

3. **Command-Line Utility**: NPM provides a command-line interface for installing, updating, and managing packages. It also allows you to run scripts defined in your `package.json`.

4. **Scripting**: NPM allows you to define custom scripts in your `package.json` file, which can be executed using the `npm run` command.

5. **Registry**: NPM hosts a registry of open-source JavaScript packages that developers can publish to and download from.

**Babel:**

1. **JavaScript Compiler**: Babel is a JavaScript compiler or transpiler. It is used to transform modern JavaScript code (often using the latest ECMAScript features) into older versions of JavaScript that are compatible with a wider range of browsers and environments.

2. **Transpilation**: Babel is used for transpiling (converting) code, making it compatible with older browsers. It doesn't manage dependencies or packages; its primary focus is on code transformation.

3. **ECMAScript Compatibility**: Babel is often used to write code using the latest ECMAScript features and syntax while ensuring compatibility with older JavaScript runtimes.

4. **Custom Configuration**: Developers can customize Babel's behavior by configuring it through a `.babelrc` file or other means. Babel allows you to specify which transformations or plugins to apply.

*Here are some reasons why Babel is commonly used in web development:*

1. **Cross-Browser Compatibility**: Browsers and JavaScript engines may not support the latest JavaScript features immediately. Babel helps ensure that your code can run on older or less-feature-rich environments by converting modern JavaScript into older versions that are widely supported.

2. **Use of Future JavaScript Features**: Babel allows developers to use the latest features and syntax introduced in ECMAScript specifications, like ES6 (ECMAScript 2015), ES7, ES8, and so on, without worrying about browser compatibility.

3. **Improved Code Readability**: Some modern syntax and features make code more concise and readable. Babel allows you to write code in a more developer-friendly way while still generating compatible code for various environments.

4. **Plugin System**: Babel is highly configurable through plugins. You can add or remove specific transformations according to your project's needs.

5. **React and JSX**: Babel is commonly used in the React ecosystem for transpiling JSX (React's JavaScript extension for building user interfaces) into plain JavaScript.

To use Babel, you typically set it up as part of your build process. You create a configuration file (usually named `.babelrc` or specified in `package.json`) to define the transformations you want to apply, and then you run Babel using build tools like Webpack, Gulp, or as part of your npm scripts.

In summary, Babel is a tool for transpiling modern JavaScript into older versions for better compatibility with a wide range of browsers and environments. It is widely used in the JavaScript community to write more maintainable and forward-compatible code.

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

**Bold text**

*text*

[title link](http://)

`inline code`

```
code block
```

==highlight==

###heading

![alt image](http://)

*copy from Github, return Markdown text*