import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();

// Connect to DB
mongoose.connect('mongodb+srv://admin:<password>@restapi.e0ypz.mongodb.net/<dbname>?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.listen('3000', () => {
  console.log('App listens to port 3000');
});