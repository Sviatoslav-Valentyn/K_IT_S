const express = require('express');
const {product} = require('../models');
//../models/products.cjs
const router = express.Router();

router.get('/', async (req,res) => {
    const Products = await product.findAll();
    res.status(200).json(Products);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const Product = await product.findByPk(id);
    if (Product == null)
    {
        res.status(464).json({message: 'ID не знайдено'})
    }
    res.status(200).json(Product);

});

router.post('/', async (req,res) => {
    const Product = req.body;
    await product.create(Product);
    res.status(200).json(Product);
});

router.put(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const ProductBody = req.body;
    const SearchProduct = await product.findAll({ where: { ID_Product: id} })
    if (!SearchProduct) {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const ProductItem = await product.update(ProductBody, { where: { ID_Product: id} });
    if (ProductItem == false) {
        res.status(464).json({message: 'ID не знайдено'})
    }
    res.status(200).json(ProductItem);
});


router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const Product = await product.destroy({
        where: {ID_Product: id}})
        if (Product == false) {
            res.status(464).json({message: 'ID не знайдено'})
        }
    res.status(200).json(Product);
});

module.exports = router;