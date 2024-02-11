require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connectDB
const connectDB = require('./db/connect')

// router
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// middleware to parse the upcoming data 
app.use(express.json());

// base route
app.get('/', (req, res) => {
  res.send('<h1>Task API</h1><a href="">Documentation</a>');
});

// routes
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/task',taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
