const mongoose=require('mongoose')
const introdutionSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    streetaddress:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:String}
})
module.exports=mongoose.model('introdution',introdutionSchema)
