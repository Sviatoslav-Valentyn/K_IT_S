const express = require('express');
const {users} = require('../models');

const router = express.Router();

router.get('/', async (req,res) => {
    const UserList = await users.findAll();
    res.status(200).json(UserList);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const User = await users.findByPk(id);
    if (User == null)
    {
    res.status(464).json({message: 'ID не знайдено'})
    }
    res.status(200).json(User);
});

router.post('/registration', async (req,res) => {
    const User = req.body;
    await users.create(User);
    res.status(200).json(User);
});

router.post('/login', async (req,res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;
    if (!Email || !Password) 
    {
        res.status(404).json({message: 'Login or Password --- Error'})
    }
    const SearchUser = await users.findOne({ where: { Email: Email} })
    if(!SearchUser)
    {
        res.status(404).json({message: 'such user does not exist'})
    }
    else
    {
        const SearchPassword = await users.findOne({ where: { Password: Password, Email:Email} })
    if(!SearchPassword)
      {
       res.status(404).json({message: 'password is incorrect'})
      }
      else{
        res.status(200).json(SearchUser);
      }
    }
});

router.put(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const UserBody = req.body;
    const SearchUser = await users.findAll({ where: { ID_User: id} })
    if (!SearchUser) {
        res.status(404).json({message: 'ID відсутнє'})
    }
    const Useritem = await users.update(UserBody, { where: { ID_User: id} });
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
    const User = await users.destroy({
        where: {ID_User: id}})
     if (User == false) {
     res.status(464).json({message: 'ID не знайдено'})
      }
    res.status(200).json(User);
    });


module.exports = router

/*
1)найти юзера по імейлу,
якщо не знайшли то вертаєм помилку

2) якщо знайшли , то перевіряєм чи у цього користувача такий самий пароль який нам прийшов
якщо ні то вертаєм помилку

3)якщо ми знайшли і пароль такий самий то вертаєм статус код 200 і вертаєм всі дані про користувача

*/