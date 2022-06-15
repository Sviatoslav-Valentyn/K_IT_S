const express = require('express');
const {promocode} = require('../models');

const router = express.Router();

router.get('/', async (req,res) => {
    const Promocode = await promocode.findAll();
    res.status(200).json(Promocode);
});

router.post('/', async (req,res) => {
    const Promocode = req.body;
    await promocode.create(Promocode);
    res.status(200).json(Promocode);
});

router.post('/enter', async (req,res) => {
    const Promocode = req.body.Promocode;
    const SearchPromocode = await promocode.findOne({ where: {Promocode: Promocode} })
    if(!SearchPromocode)
    {
        res.status(404).json({message: 'such promocode does not exist'})
    }
    else{
        res.status(200).json(SearchPromocode);
    }});

module.exports = router;