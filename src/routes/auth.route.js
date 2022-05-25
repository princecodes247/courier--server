const router = require("express").Router();
const AuthController = require("./../controllers/auth.controller");
const upload = require("./../middlewares/multer.middleware")

router.post("/signUp", upload("image"), AuthController.signup);
router.post("/signIn", AuthController.signin);
router.post("/requestEmailVerification", AuthController.RequestEmailVerification);
router.post("/verifyEmail", AuthController.VerifyEmail);
router.post("/requestPasswordReset", AuthController.RequestPasswordReset);
router.post("/resetPassword", AuthController.resetPassword);

module.exports = router