import express, { request } from 'express';
// init app
const app = express();
/**
 * TODO
 * create todo
 * update todo by id
 * delete todo by id
 * get todo by id
 */

/**
 * id
 * status = complete, in-progress, canceled
 * name
 */

const todoList = [];

app.post('/todos', (request,response)=>{
    response.send('Post todo')
})

//open port: 3000 (listen)
app.listen(3000, ()=>{  
    console.log('http://localhost:3000/');
});

