import { Router} from 'express'
import { logoutController,registerUserController } from '../controllers/user.controller.js'

import { loginController } from '../controllers/user.controller.js'
import { verifyEmailController } from '../controllers/user.controller.js'

const userRouter=Router()
userRouter.post('/register',registerUserController)
userRouter.post('/login',loginController)
userRouter.post('/logout',logoutController)
userRouter.post('/verify-email',verifyEmailController)

export default userRouter   