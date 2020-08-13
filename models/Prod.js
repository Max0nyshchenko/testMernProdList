const {Schema, model}  = require('mongoose')

const shema = new Schema({
    name: {type:String, required:true},
    qty: {type:Number, required:false},
    owner: {type:String, required:true}
})

module.exports = model('Prod', shema)