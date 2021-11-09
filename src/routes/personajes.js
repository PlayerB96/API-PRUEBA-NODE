const {Router} = require('express')
const router = Router()
const personajes = require('./personajes.json')
// console.log(personajes)

router.get('/',(req, res)=> {

    res.json(personajes)
    
})

router.post('/',(req, res)=> {
    const { nombre, edad} = req.body;
    if(nombre && edad) {
        const newPersonaje = {...req.body};
        personajes.push(newPersonaje)
        res.json(personajes)
    }else{ res.send('Error...')}
})


module.exports = router;
