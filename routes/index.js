import express from 'express';
import registerUser from "../controllers/registerUser.js" ;

const router = express.Router();
//register user route
router.post('/register',registerUser);

export default router;
