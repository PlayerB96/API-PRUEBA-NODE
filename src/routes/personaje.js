const {Router} = require('express')
const router = Router()
const personajes = require('./personajes.json')
// console.log(personajes)

router.get('/:nombre',(req, res)=> {

    const nombre = req.params.nombre

    let rpta= 'no hay'
    for(const row of personajes) { 
        if (nombre == row.nombre){
            rpta = row;
        }
    }
    res.json(rpta)
    // const {nombre} = req.params;
    
    // const personaje = personajes.find(personaje => personaje.nombre  nombre)
    // res.json(personajes["nombre"])

})
module.exports = router;