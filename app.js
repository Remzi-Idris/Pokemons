const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())


const Pokemons = [
    {
        rarity: "Common", pokemons:[
            {name: "Eevee", type:"Normal"},
            {name:"Bulbasur", Type:"Grass" }, 
            {name: "Squirtle", Type:"Water"}
    ]},
    {
        rarity: "Rare", pokemons:[
            {name: "Raichu", type:"Electricity"},
            {name: "Picachu", type:"Electricity"},
            {name: "Charmander", type:"Fire"},
            {name: "Charizard", type:"Fire"}
        ]},
        {
        rarity: "Legendary", pokemons:[
            {name:"mew-two", type:"psychic"},
            {name:"Moltres", type:"Fire"},
            {name:"Articuno", type:"Ice"},
            {name:"Zapdos", type:"Electricity"}
        ]}
    ]

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/pokemon/all", (req, res) =>{   
    res.send(Pokemons)
})

app.get("/pokemon/:occurrence", (req, res)=>{
    const occurrence = req.params.occurrence.toLowerCase()
    const Pokemon = Pokemons.find(({rarity})=>rarity.toLowerCase() === occurrence)
    if(Pokemon){
            console.log(Pokemons)

            res.send(Pokemon)
        }else{
            res.status(404).send()
        }})

        app.get("/pokemon/pokemons/:name", (req, res)=>{
            // console.log(req.params.name)
           for (const [key, value] of Object.entries(Pokemons)){
            value.pokemons.forEach(pokemon => {
                if(req.params.name == pokemon){
                    res.send("sucess")
                }
            })
           }
        //     var result = Pokemons.pokemons.find(item=>item.name==="mew-two") 
        //   console.log(result)
           
           
        })
           
           
           
            // const pokemonname = req.params.name.toLowerCase()
            // console.log(pokemonname)
            // console.log(typeof(Pokemons))
            // console.log(Pokemons)
            // Pokemons.foreach((array )=>{
            //     console.log(array)
            // })
            

            // const pokemonnames = Pokemons.pokemons.name.find(({name}) => name.toLowerCase() === pokemonname)
            // console.log(Pokemons[0].pokemons[0].name)
            // if(pokemonnames){
            //         res.send(pokemonnames)
            //     }else{
            //         res.status(404).send()
            //     }})
        



app.post("/pokemons", (req, res) =>{
   Pokemons.push(req.body)
   res.send()
})

app.delete("/pokemons/occurrence", (req,res)=>{
    const occurrence = req.params.occurrence.toLowerCase()
    const id = Pokemons.findIndex(({rarity}) => rarity.toLowerCase() === occurrence)
    Pokemons.splice(id, 1)
    res.send()
})






app.listen(PORT, ()=>{
    console.log(`still active port ${PORT}`)
})

