const router = require("express").Router();
const usercontroller = require("../controllers/usercontroller");
const auth = require("../middleware/auth");
router.post("/register", usercontroller.register);
router.post("/login", usercontroller.login);
router.get("/logout", usercontroller.logout);
router.get("/refresh_token", usercontroller.refreshToken);
router.get("/infor", auth, usercontroller.getUser);

module.exports = router;
