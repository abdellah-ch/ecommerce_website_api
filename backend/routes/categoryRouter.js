const router = require("express").Router();
const categorycontroller = require("../controllers/categorycontroller");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router
  .route("/category")
  .get(categorycontroller.getCategories)
  .post(auth, authAdmin, categorycontroller.createcategory);

router
  .route("/category/:id")
  .delete(auth, authAdmin, categorycontroller.deletecategory)
  .put(auth, authAdmin, categorycontroller.updatecategory);

module.exports = router;
