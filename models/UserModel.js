import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTayps} = Sequelize;
const Users = db.define('users',{
    LastName:{
        type:DataTayps.STRING
    },

    photo:{
        type:DataTayps.STRING
    },

    FirstName:{
        type:DataTayps.STRING
    },
    email:{
        type:DataTayps.STRING
    },

    phone:{
        type:DataTayps.STRING
    },

    date:{
        type:DataTayps.STRING
    },

    country:{
        type:DataTayps.STRING
    },

    state:{
        type:DataTayps.STRING
    },

    city:{
        type:DataTayps.STRING
    },

    password:{
        type:DataTayps.STRING
    },

    refreshToken:{
        type:DataTayps.TEXT
    }
    },{
        freezeTableName:true
    

})

export default Users;