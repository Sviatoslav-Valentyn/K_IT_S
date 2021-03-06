const express = require ('express');
const cors = require ('cors');

const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(cors());

const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');
const feedbackRouter = require('./routes/feedback.js');
const promocodeRouter = require('./routes/promocode.js');

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/feedback', feedbackRouter);
app.use('/promocode', promocodeRouter);

module.exports = app;