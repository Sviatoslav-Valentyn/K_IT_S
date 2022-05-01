import express from 'express';

const router = express.Router();

router.get('/', async (req,res) => {
    const userList = await user.findAll();
    res.status(200).json(userList);
//    res.json("Hello")
});

router.post('/', async (req,res) => {
    const User = req.body;
    await User.create(User);
    res.status(200).json(User);
});

export default router;