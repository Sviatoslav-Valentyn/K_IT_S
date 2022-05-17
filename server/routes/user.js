const express = require('express');
const {user} = require('../models');

const router = express.Router();

router.get('/', async (req,res) => {
    const UserList = await user.findAll();
    res.status(200).json(UserList);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'ID відсутнє'})
    }
     const User = await user.findByPk(id);
    if (User == null)
    {
    res.status(464).json({message: 'ID не знайдено'})
    }
         res.status(200).json(User);
});

router.post('/', async (req,res) => {
    const User = req.body;
    await user.create(User);
    res.status(200).json(User);
});

router.put(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const UserBody = req.body;
    const SearchUser = await user.findAll({ where: { ID_User: id} })
    if (!SearchUser) {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const Useritem = await user.update(UserBody, { where: { ID_User: id} });
    if (Useritem == false) {
        res.status(464).json({message: 'ID не знайдено'})
    }
    res.status(200).json(Useritem);
});

router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const User = await user.destroy({
        where: {ID_User: id}})
     if (User == false) {
     res.status(464).json({message: 'ID не знайдено'})
      }
    res.status(200).json(User);
    });


module.exports = router;