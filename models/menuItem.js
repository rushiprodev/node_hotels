const mongoose= require("mongoose");

const menuItemScheama=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:String,
        required:true,
    },
    taste:{
        type:String,
        required:true,
        enum:["spicy","sweet","sour"],

    },
    is_drink:{
        type:Boolean,
        default:false,

    },
    ingredients:{
        type:String ,
        required:true,

    },
    num_sales:{
        type:Number,
        default:0,
    }

})

const menuItem=mongoose.model('menuItem',menuItemScheama);
module.exports=menuItem;
