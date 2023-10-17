# jsES6import&export (Module, Export & Require)
- Download NodeJS and POSTMAN
### Setup Node.js Project
- start with create folder and cd to that folder(using Terminal)
- Run `npm init` to generate project (then repeat enter to create package.json)
### Setup Babel
- Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node` (Babel is big library, take time to download)
- Create file `.babelrc`
- Add setting to support ES6 version (just add this to `.babelrc` file) 
```
{
    "presets": ["@babel/preset-env"]
}
```
### Setup build and run command
- Add build command to generate ES5 & Add start commaand to run simple app, Changing "script" section in `package.json` to be
```
 "scripts": {
    "start": "node dist/main.js",
    "build": "babel src --out-dir dist"
  }
``` 
*after run the script, it'll create replicated folder as dist for running*
** from folder src to replicated as dist folder for running only **
- Type in Terminal: `npm run build` then `npm run start` to run


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