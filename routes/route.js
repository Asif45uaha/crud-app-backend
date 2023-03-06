import express from 'express'
import  {CreateUser, getSingleUser}  from '../controllers/user.js';
import { GetUsers,UpdateUser,DeleteUser } from '../controllers/user.js';
const Router = express.Router();


//All Routes

Router.post("/users/create",CreateUser);
Router.get("/users/all",GetUsers);
Router.get("/users/single/:id",getSingleUser);
Router.put("/users/:id",UpdateUser)
Router.delete("/users/:id",DeleteUser)



export default Router;