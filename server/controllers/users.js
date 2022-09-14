const { User } = require("../models/user");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async function (req, res, next) {
    const schema = joi.object({
      email: joi.string().required().min(6).max(256).email(),
      password: joi.string().required().min(6).max(1024),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      console.log(error.details[0].message);
      res.status(401).send("Unauthorized");
      return;
    }

    try {
      const user = await User.findOne({ email: value.email });
      if (!user) throw Error;

      const validPassword = await bcrypt.compare(value.password, user.password);
      if (!validPassword) throw "Invalid password";

      const param = { email: value.email };
      const token = jwt.sign(param, config.JWT_SECRET, { expiresIn: "72800s" });

      res.json({
        token: token,
        id: user._id,
        email: user.email,
        name: user.name,
      });
    } catch (err) {
      console.log(`Error: ${err}`);
      res.status(401).send("Unauthorized");
    }
  },

  signup: async function (req, res, next) {
    const schema = joi.object({
      name: joi.string().required().min(2).max(256),
      email: joi.string().required().min(6).max(256).email(),
      password: joi.string().required().min(6).max(1024),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      console.log(error.details[0].message);
      res.status(400).send("error signing up");
      return;
    }

    try {
      const user = await User.findOne({ email: value.email });
      if (user) {
        return res.status(400).send("user already registered");
      }

      const hash = await bcrypt.hash(value.password, 10);

      const newUser = new User({
        name: value.name,
        email: value.email,
        password: hash,
      });

      await newUser.save();

      res.json({
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).send("error signup");
    }
  },
};