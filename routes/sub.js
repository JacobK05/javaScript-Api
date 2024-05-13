const express = require('express')
const router = express.Router()
const Sub = require('../models/sub')


router.get('/',  async (req, res) =>{
    try{
        const subs = await Sub.find()
        res.json(subs)
    }catch (err){
        res.status(500).json({message: err.message})
    }
} )

router.get('/:id', async (req, res) =>{
    
} )

router.post('/', async (req, res) =>{
    const sub = new Sub({
        name: req.body.name,
        subbed: req.body.subbed
    })

    try{
        const newSub = await sub.save()
        res.status(201).json(newSub)
    }catch(err){
        res.status(400).json({message: err.message})
    }
} )

router.patch( '/:id', (req, res) => {
    
})
router.delete( '/:id', (req, res) => {

})

module.exports = router