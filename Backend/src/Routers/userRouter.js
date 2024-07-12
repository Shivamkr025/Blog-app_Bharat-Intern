import express from 'express';
import { verifyToken } from '../Middleware/auth.js';
import {userSignup , userLogin , allUser , updateUser , deleteUser} from '../Controllers/user.js';
import Validator from '../Middleware/validator.js';
import { signupSchema } from '../Middleware/validation.js';

const router = express.Router()

router.post('/blog/users/signup', Validator.validate(signupSchema), userSignup);
router.post('/blog/users/login', userLogin);
router.get('/blog/users/view', verifyToken, allUser);
router.put('/blog/users/update', verifyToken, updateUser);
router.delete('/blog/user/delete', verifyToken, deleteUser);

export default router;
