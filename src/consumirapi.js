const fetch = require('node-fetch')

r = fetch("https://rickandmortyapi.com/api/character/?page=2")
    .then((res)=>{
        return  res.json(r)
    }).then((res) => {
        console.log(res)
    })

print(r)