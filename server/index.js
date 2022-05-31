const express = require ('express');
const cors = require ('cors');

const db = require('./models');


const app = express();
app.use(express.json({ limit: '2mb' }));
app.use(cors());

const userRouter = require('./routes/user.js');
const productRouter = require('./routes/product.js');
const feedbackRouter = require('./routes/feedback.js');

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/feedback', feedbackRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('server is running');
    });
});






















/*//type = "module";
import express from 'express';
import cors from 'cors';


//const port = process.env.port || 4444;

//const db = require('./models');

const app = express();
app.use(express.json());
app.use(cors());

//const userRouter = require('./routes/user.js');
import userRouter from './routes/user.js';
//const productRouter = require('./routes/product.js');
//const feedbacxkRouter = require('./routes/feedback.js');

app.use('/user', userRouter);
/*app.use('/product', productRouter);
app.use('/feedback', feedbacxkRouter);*/