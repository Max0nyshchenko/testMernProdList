const {Schema, model, Types} = require('mongoose')

const shema = new Schema({
    nickname: {type:String, unique:true, required:true},
    password: {type:String, required: true},
    products: [{type:Types.ObjectId, ref:'Prod'}]
})

module.exports = model('User', shema)