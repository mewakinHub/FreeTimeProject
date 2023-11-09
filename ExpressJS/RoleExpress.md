To connect React with Node.js and to connect Node.js with a database (e.g., SQL), you'll need to learn several technologies and concepts. Here's a step-by-step guide on what to study for each of these tasks:

**Connecting React with Node.js:**

1. **React (Front-End):**
   - Study React to build the front-end of your application. Learn how to create components, manage state, and handle user interactions.
   - Topics to cover: React components, state management (useState, useContext, Redux), routing (React Router), and HTTP requests.

2. **Node.js (Back-End):**
   - Learn Node.js to create the server-side of your application. Node.js is commonly used with Express.js to build REST APIs.
   - Topics to cover: Basic Node.js concepts, asynchronous JavaScript (Promises, async/await), and npm (Node Package Manager).

3. **Express.js (Back-End):**
   - Study Express.js to create a RESTful API. Express simplifies the process of building APIs and handling HTTP requests.
   - Topics to cover: Routing, middleware, handling HTTP requests (GET, POST, PUT, DELETE), and error handling.

4. **API Integration:**
   - Learn how to make HTTP requests from your React application to your Node.js server. You can use libraries like Axios or the built-in `fetch` API.

5. **Cross-Origin Resource Sharing (CORS):**
   - Understand CORS and how to handle cross-origin requests in your Node.js server.

**Connecting Node.js with a SQL Database:**

1. **SQL Database:**
   - Choose an SQL database like MySQL, PostgreSQL, or SQLite.
   - Learn SQL to perform database operations (CRUD) and manage the database schema.

2. **Node.js Database Drivers:**
   - Study database drivers or libraries that allow Node.js to connect to and interact with the chosen SQL database. For example, for MySQL, you can use the `mysql2` library.

3. **Connecting and Querying:**
   - Learn how to establish a connection between your Node.js application and the SQL database.
   - Understand how to execute SQL queries from your Node.js code and handle the results.

4. **ORM (Optional):**
   - Consider learning Object-Relational Mapping (ORM) libraries like Sequelize or TypeORM. ORMs provide a higher-level, JavaScript-based approach to database interactions.

**Role of Express.js and REST API:**

- **Express.js** serves as the middleware framework for your Node.js server. It simplifies the creation of routes, handling of requests, and overall server setup.

- **REST API** stands for Representational State Transfer Application Programming Interface. It is a set of architectural principles and conventions that define how resources should be exposed and manipulated over the web. In your context, REST API is implemented using Express.js, and it acts as the interface through which your front-end (React) communicates with your back-end (Node.js) to perform Create, Read, Update, and Delete (CRUD) operations on resources (e.g., database records).

In summary, to connect React with Node.js and connect Node.js with a SQL database, you need to study the mentioned technologies and concepts. React handles the front-end, Node.js with Express.js provides the server and API, and the SQL database stores and manages the data. This combination allows you to build a full-stack web application where the front-end communicates with the back-end through a REST API, and the back-end interacts with the database to perform CRUD operations.