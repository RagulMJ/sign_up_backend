const User = require('../models/user.js');
const express = require('express');
const { param } = require('express/lib/request');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const user = await newUser.save();
    res.send({ user });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user.password == password) {
      await user.save();
      const id = user._id;
      res.status(200).json({ id });
    } else {
      res.send('Invalid Credentials');
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.put('/profile/:id', async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: mongodb.ObjectId(req.param.id) },
      { $set: req.body }
    );
    res.status(200).json('Profile updated');
    res.send({ data });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
