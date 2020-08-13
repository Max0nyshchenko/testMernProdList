const {Router} = require('express')
const router = Router()
const Prod = require('../models/Prod')

router.post('/add', async (req,res) => {
    try {
        const {name, qty, owner} = req.body
        const item = new Prod({name, qty, owner})
        await item.save()
        return res.status(201).json({msg: "item created, prod in fucken list"})
    } catch (e) {
        console.error(e)
        return res.status(500).json({msg:"prod fucked off..."})
    }
})

router.get('/get', async (req, res) => {
    try {
        const data = await Prod.find()
        res.send(data)
        return res.status(200).json({msg:"OK"})
    } catch (e) {
        console.error(e)
        return res.status(500).json({msg:"prod fucked off..."})
    }
})

module.exports = router