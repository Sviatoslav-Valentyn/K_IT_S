const express = require('express');
const {product} = require('../models');

const router = express.Router();

router.get('/', async (req,res) => {
    const Products = await product.findAll();
    res.status(200).json(Products);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'No id'})
    }
    const Product = await product.findByPk(id);
    if (Product == null)
    {
        res.status(464).json({message: 'product by id not found'})
    }
    else{
        res.status(200).json(Product);
    }
});

router.get(`/byType/:type`, async (req,res) => {
    const type = req.params.type;
    if (!type)
    {
        res.status(404).json({message: 'Enter the type please!'})
    }
    else{
        const Product = await product.findAll({where:{Type: type}});
    if (Product == null)
    {
        res.status(464).json({message: 'product by type not found'})
    }
    else{res.status(200).json(Product);}}
});

router.post('/', async (req,res) => {
    const Product = req.body;
    await product.create(Product);
    res.status(200).json(Product);
});

router.put(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const ProductBody = req.body;
    const ProductItem = await product.update(ProductBody, { where: { ID_Product: id} });
    if(!id) {
        res.status(404).json({message: 'product not found'})
    }
    else{
        if (!ProductItem) {
            res.status(464).json({message: 'could not update the product'})
        }
        else{
            res.status(200).json(ProductItem);
        }
    }
});


router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'No id'})
    }
    const Product = await product.destroy({
        where: {ID_Product: id}})
        if (!Product) {
            res.status(464).json({message: 'Failed to delete product'})
        }
        else{
            res.status(200).json(Product);
        }
});
module.exports = router;