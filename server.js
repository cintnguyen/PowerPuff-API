const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'blossom': {
        'name': `Blossom`,
        'color': 'Pink',
        'personality': 'Everything nice',
        'image':'/images/blossom.png'
    },
    'bubbles':{
        'name': `Bubbles`,
        'color': 'Blue',
        'personality': 'Sugar',
        'image':'/images/bubbles.png'
    },
    'buttercup':{
        'name': `Buttercup`,
        'color': 'Green',
        'personality': 'Spice',
        'image':'/images/buttercup.png'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/css/style.css', (request, response)=>{
    response.sendFile(__dirname + '/css/style.css')
})

app.use(express.static(__dirname + `/css`))

// app.use("/css",express.static(__dirname + `/css`))

app.get('/api/:name',(request,response)=>{
    const powerPuffName = request.params.name.toLowerCase()

    if( characters[powerPuffName] ){
        response.json(characters[powerPuffName])
    }else{
        response.json(characters['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})