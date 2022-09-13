var express = require("express");
var router = express.Router();
const customers = require("../controllers/customers");

/* GET users listing. */
router.get("/", customers.getAll);
router.post("/", customers.add);
router.delete("/", customers.delete);

module.exports = router;
