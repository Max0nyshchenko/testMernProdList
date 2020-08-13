const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.post('/register', async (req, res) => {
    try {
        const {nickname, password} = req.body
        const candidate = await User.findOne({nickname})
        if(candidate) {
         return   res.status(400).json({msg: 'Nickname is already taken'})
        }
        const user = new User({nickname, password})
        await user.save()
        return res.status(201).json({msg: 'User created succecfully'})
    } catch (e) {
        console.error(e)
        return res.status(500).json({msg:'Something went wrong'})
    }
})

router.post('/login', async (req, res) => {
    try {
        const {nickname, password} = req.body
        const candidate = await User.findOne({nickname, password})
        if(candidate) {
            return res.status(200).json({msg: 'logged in'})
        } else {
            return res.status(500).json({msg:'no such user'})
        }
    } catch (e) {
        console.error(e)
        return res.status(500).json({msg:'Something went wrong'})
    }
})

module.exports = router