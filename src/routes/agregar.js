const {Router} = require('express')
const router = Router()
const personajes = require('./personajes.json')
// console.log(personajes)

router.post('/',(req, res)=> {

    res.json(personajes)
    
})

module.exports = router;
