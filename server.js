// Fil för attt hantera Express server
const express = require('express')
const bodyParser = require('body-parser')
const { createUser, getAllUsers } = require('./dbService')

const portNr = 5000

// Konfigurera server med Body-parser
const application = new express()
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({ extended: false }))

// Starta upp server
application.listen(portNr, () => {
  console.log(`Nu ligger servern på portNr ${portNr} och lyssnar efter inkommande requests`)
})

// Get-request på root-address för att returnera index.html
application.get('', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

application.get('/script', (req, res) => {
  res.sendFile('./script.js', { root: __dirname })
})

application.post('/addUser', async (req, res) => {
  // Hämta data från Payload
  const data = req.body

  // Spara data till databas
  let respUser = await createUser(data.name.trim(), data.email.trim())

  console.log('Ny användare skapad: ', respUser.toJSON())

  // Returnera respons till User
  // res.sendFile('./index.html', {root: __dirname })
  res.redirect('/')
})

// Get Endpoint för att hämta all data från DB
  application.get('/getAllUsers', async (req, res) => {

    // Hämta data från DFatabasen
    let users = await getAllUsers()

    // console.log(users)

    res.send(users)
  })
