# WebApp understanding
- eg.) how the event loop works, blocking I/O operation, DB queries, etc.

- software model (software engineer course101 on UDEMY) to not make Bad Code(cost alot to fix it); design is important.

- Typical Software Development LifeCycle(SDLC)
Requirement: what are we going to build
Design: How're we going to do it(important, but people always skip it)
Implementation: just build the thing
Verification: Testing
Maintenance: fixing bug, feature(cycle all the way back)

# **Software Development Lifecycle Notes**

### **Software Development Lifecycle Intro**

The typical software development lifecycle details how a piece of software is built. It covers inception, creation, and maintenance. This model is very high-level, meaning it covers only the large areas of the cycle. Each area can be further expanded to more specifically define the process.

This cycle does not have to be completed in order. There are many different ways to accomplish each task. Depending on the problem at hand, certain solutions will work better than others.

### **Software Development Lifecycle Steps**

**Requirements** – This section covers how to define the problem at hand. Here we take the idea of the problem, and represent it into more concrete and real world explanations. For example, we might take the idea of a website, and come up with a list of things the website should be able to do.

**Design** – After detailing the problem, we work on coming up with how we are going to solve that problem. In design we come up with the exact plans on how we can create a product which satisfies our requirements.

**Implementation** – This is step where we actually begin creating the solution. Here we work on building out all areas set forth in the design step.

**Verification** - With verification we work on making sure our solution actually solves the problem. We test the product, look for bugs, and adjust any areas which are incorrect.

**Maintenance** – After verification, we launch the product. From this point on, we begin working on maintaining the product. Bugs will come up, and new features will need to be implemented. This part of the cycle can go on indefinitely.

### **Lifecycle Importance**

Knowing each step in this cycle is crucial for understanding the rest of the course, and software engineering in general. Every project needs to pay attention to each of these areas to be successful in the long-term.

### **Additional Resources**

https://www.tutorialspoint.com/sdlc/sdlc_overview.htm

https://medium.com/omarelgabrys-blog/software-engineering-software-process-and-software-process-models-part-2-4a9d06213fdc

- **Express:** It is primarily used for connecting the frontend (client-side) with the backend (server-side). It handles routing, HTTP requests, middleware, and the overall structure of your application. Express can also be used to manage interactions between the frontend and backend components.

- **Prisma:** Prisma is primarily used for connecting to the database and handling database queries. It provides an elegant, type-safe API for working with databases, including creating, reading, updating, and deleting data. Prisma abstracts the underlying SQL database and simplifies database operations.

**1. How Data Flows Between Front-End and Back-End:**

The code you provided is an Express route for handling a `PUT` request. In a real application, this route can be accessed by your React front-end. Here's how it works:

- Your React front-end makes a `PUT` request to the Express server's endpoint, which corresponds to this route.
- In your Express route, you process the request using the provided parameters (e.g., `request.params.id` for the `id` of the todo item).
- You find the corresponding todo item, overwrite it with the new data from the request (`request.body`), and send the updated item back as the response using `response.send(todoList[todoIndex])`.

This updated data is sent back to the React front-end as an HTTP response. In a real coding scenario, your React application would make the request using Axios or Fetch, and when the response is received, you can handle it in your React application as needed.

**2. The Role of the Back-End:**

The back-end of a web application, such as the Node.js server you're using, serves several critical roles:

- **Business Logic:** It handles the business logic and core functionality of your application. This includes processing user requests, performing operations, and interacting with the database.

- **Data Management:** The back-end manages data, including storing, retrieving, updating, and deleting data in the database. It ensures data integrity and security.

- **API:** It provides an API for the front-end to communicate with. This API defines the routes, endpoints, and methods (e.g., GET, POST, PUT, DELETE) that the front-end can use to interact with the back-end.

- **Security:** The back-end is responsible for handling user authentication, authorization, and security measures to protect the application from vulnerabilities.

- **Server:** It acts as a server to handle client requests, manage sessions, and respond to those requests with the appropriate data or actions.

- **Middleware:** It can use middleware to process and manipulate requests and responses. Middleware can include functions for authentication, logging, and more.

- **Integration:** It integrates with external services, databases, and other systems as needed.

**3. Different Programming Languages:**

In a modern web application, the front-end and back-end often use different programming languages. React, which is a JavaScript library, is commonly used for front-end development, while Node.js, a JavaScript runtime, is frequently used for the back-end. Python is another programming language that's popular for various applications, including data analysis and AI.

To call a Python function from a React application, you typically need to set up an API on your back-end (Node.js, for example) that can execute the Python code when requested by the front-end. The back-end serves as a bridge between the React front-end and the Python code. When the React application makes a request to the back-end (via an API endpoint), the back-end can trigger the Python function, obtain the results, and send them back to the React application as a response.

In summary, the back-end of a web application plays a crucial role in processing requests, managing data, and acting as an intermediary between the front-end and external services or languages like Python. It is responsible for handling the complex server-side logic, allowing the front-end to focus on user interactions and presentation.

The back end of a web application, which includes server-side logic, can perform a wide range of tasks beyond just database queries. Here are some of the many things that the back end can do:

1. **Handle HTTP Requests:** The back end receives and processes incoming HTTP requests from the front end. It can handle various HTTP methods like GET, POST, PUT, DELETE, and PATCH.

2. **Database Operations:** As you mentioned, the back end interacts with the database to perform CRUD operations (Create, Read, Update, Delete) and manage data.

3. **Authentication and Authorization:** The back end can implement user authentication and authorization systems to secure the application. It manages user accounts, login sessions, and access control.

4. **Business Logic:** It executes the core business logic of the application. This includes calculations, validations, and data processing.

5. **File Handling:** The back end can upload, store, and serve files, such as images, documents, and media files.

6. **API Endpoints:** It defines API endpoints for the front end to communicate with and access data or services. These endpoints are often in RESTful or GraphQL formats.

7. **Middleware:** Middleware functions can be used to perform tasks like logging, error handling, and request parsing. They are executed before the main request handler.

8. **Caching:** Implementing caching mechanisms to improve performance by reducing database queries or data processing.

9. **Security:** Handling security aspects like input validation, data sanitization, protection against common web vulnerabilities (e.g., SQL injection, cross-site scripting), and encrypting sensitive data.

10. **Email and Notifications:** Sending emails and push notifications to users for various purposes, such as account verification, password reset, or notifications of events.

11. **Session Management:** Managing user sessions and maintaining state information as users navigate through the application.

12. **Integration with External Services:** Connecting to external APIs and services, such as payment gateways, third-party authentication (e.g., OAuth), and data sources.

13. **Scalability:** Implementing strategies for scaling the application to handle increased traffic and demand, such as load balancing and caching.

14. **Logging and Monitoring:** Keeping track of application activity, errors, and performance using logging and monitoring tools.

15. **Real-Time Features:** Implementing real-time functionality, such as chat, notifications, and live updates, using technologies like WebSockets.

16. **Content Generation:** Generating dynamic content or reports based on user input or data from the database.

17. **Background Processing:** Running tasks in the background, such as sending bulk emails, processing data, and performing maintenance tasks.

18. **API Documentation:** Creating documentation for API endpoints to assist front-end developers and third-party integrators.

These are just some of the tasks that the back end can handle. The specific responsibilities of the back end will vary depending on the requirements of the application and the architecture chosen for its development.


I'll guide you through the process of connecting your front-end (React) to your back-end (Node.js with Express) and a SQL database using Prisma. Let's break it down step by step:

**1. Connecting Front-End (React) with Back-End (Node.js and Express):**

   - **Study Axios or Fetch:** To connect your React front-end to your Node.js/Express back-end, you need to learn how to make HTTP requests from your React components to your server. Axios and the built-in `fetch` API are commonly used for this purpose.
     - **Study Material:**
       - Axios Documentation: https://axios-http.com/docs/intro
       - React Axios Tutorial: https://www.youtube.com/watch?v=V6d-8T3eQOg

   - **Create API Endpoints:** In your Express back-end, you should define API endpoints to handle HTTP requests from your React front-end. These endpoints should correspond to the RESTful routes (e.g., GET, POST, PUT, DELETE) for your To-Do list.
     - **Study Material:**
       - Express.js Routing: https://expressjs.com/en/guide/routing.html

   - **Handling JSON Data:** Ensure that your Express server can handle JSON data sent from your React front-end. You'll need to use body parsers and middleware for this purpose.

   - **Cross-Origin Resource Sharing (CORS):** You may need to handle CORS to allow your React application (running on a different domain) to make requests to your Express server.
     - **Study Material:**
       - Understanding CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

**2. Connecting React to a SQL Database using Prisma:**

   - **Prisma Setup:** Set up Prisma in your Node.js/Express back-end to interact with your SQL database. Prisma simplifies database access by generating type-safe client code.
     - **Study Material:**
       - Prisma Documentation: https://www.prisma.io/docs/
       - Prisma Setup Tutorial: https://www.youtube.com/watch?v=6RiWr0f9lQY

   - **Create Prisma Models:** Define data models in Prisma that represent your database tables (e.g., To-Do items). These models will be used to generate database queries.

   - **Prisma Client:** Use the Prisma client (auto-generated by Prisma) to perform database operations from your Node.js/Express back-end. This includes inserting, updating, and retrieving data from the SQL database.

   - **Expose Prisma Queries as API Endpoints:** Create API endpoints in your Express server that use Prisma queries to interact with the database and return data to your React front-end.

**3. Project Overview:**

Your project can be structured as follows:

- **Front-End (React):**
   - User interface components for the To-Do list.
   - Axios or Fetch to send HTTP requests to the Express API.

- **Back-End (Node.js with Express):**
   - Define API endpoints for CRUD operations.
   - Use Prisma for database access.
   - Set up CORS handling.

- **Database (SQL):**
   - Create tables for To-Do items.

- **Prisma:**
   - Define Prisma models based on your database schema.
   - Use Prisma Client to interact with the database.

By following these steps and materials, you'll be able to connect your React front-end to your Node.js/Express back-end, and use Prisma for smooth database interaction. Take your time to study each topic and practice building the connections between your project's components. This will enable you to complete your database lab project successfully.