import express from 'express'
import { notFound } from './middleware/notFound.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


const app = express()

app.use(notFound)
app.use(errorHandlerMiddleware)

app.listen(3000, () => {
    console.log('app started');

})