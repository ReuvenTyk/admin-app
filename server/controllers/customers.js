const { Customer } = require("../models/customer");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const result = await Customer.find();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error getting customers");
    }
  },

  add: async function (req, res, next) {
    try {
      const newCustomer = new Customer(req.body); // todo: add validation
      const result = await newCustomer.save();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(400).send("error adding customer");
    }
  },

  delete: async function (req, res, next) {
    try {
      await Customer.deleteOne({ _id: req.body._id }).exec();
      res.json({ _id: req.body._id });
    } catch (err) {
      console.log(err);
      res.status(400).send("error delete customer");
    }
  },
};
