import  express  from "express"; 
import {getUsers,createUser,deleteUser,updateUser,getUser} from "../controllers/user.js"



const router =express()

router.get("/users",getUsers)
router.post("/users",createUser)
router.get("/user/:id",getUser)
router.delete("/user/:id",deleteUser)
router.put("/user/:id",updateUser)

export default router