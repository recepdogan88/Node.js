import  express  from "express"; 
import {getUsers,createUser,getUser,deleteUser,updateUser} from "../controllers/user.js"


const router =express()

router.get("/users",getUsers)
router.post("/users",createUser)
router.get("/user/:id",getUser)
router.delete("/user/:id",deleteUser)
router.patch("/user/:id",updateUser)

export default router