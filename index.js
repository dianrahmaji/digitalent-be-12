import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router.js';

const app = express();

// Connect to DB
mongoose.connect('mongodb+srv://admin:admin@restapi.e0ypz.mongodb.net/jadwalin?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.use('/api', router);

app.listen('3000', () => {
  console.log('App listens to port 3000');
});