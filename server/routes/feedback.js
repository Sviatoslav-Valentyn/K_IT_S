import express from 'express';

const router = express.Router();

router.get('/', async (req,res) => {
    const feedbackList = await feedback.findAll();
    res.status(200).json(feedbackList);
});

router.post('/', async (req,res) => {
    const Feedback = req.body;
    await Feedback.create(Feedback);
    res.status(200).json(Feedback);
});

router.post('/', async (req,res) => {
    const Feedback = req.body;
    await Feedback.create(Feedback);
    res.status(200).json(Feedback);
});
export default router;