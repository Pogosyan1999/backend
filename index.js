import express from "express";
import db from "./config/database.js";
import Users from "./models/UserModel.js";

const app = express();

try{
    await db.authenticate();
    console.log("Databace connected");
    await Users.sync();
}catch(error){
 console.error(error);
}





app.listen(5000, ()=>console.log("Server running at port 5000"));