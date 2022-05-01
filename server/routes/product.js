import express from 'express';
//import {product} from '../models';
const router = express.Router();

router.get('/', async (req,res) => {
    const Products = await product.findAll();
    res.status(200).json(Products);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const Product = await Product.findAll(id);
    res.status(200).json(Product);
});

router.post('/', async (req,res) => {
    const Product = req.body;
    await Product.create(Product);
    res.status(200).json(Product);
});

export default router;