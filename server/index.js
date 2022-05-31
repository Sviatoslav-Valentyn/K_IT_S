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