const { createUser, getAllUsers } = require('./dbService')
const syncDatabase = require('./dbSync.js');

(async () => {
  console.log('syncDatabase')
  await syncDatabase() // För att synka databasen med vår modell

  console.log('skapa user')
  // Skapa en ny användare
  const user = await createUser('Test66', 'test66@example.com') // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON())

  // Hämta alla användare
  const users = await getAllUsers() // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()))

})()
/*
document.getElementById('btnsend').addEventListener('click', async () => {
  // Hämta data från input fält
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  // Skapa en ny användare
  const user = await createUser(name, email) // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON())
  document.getElementById('newuseroutput').innerText = ('Ny användare skapad:', user.toJSON())
})


// Function för att hämta DB data och skriva ut den i tabell
(async () => {
  // Hämta data från DB
  let resp = await fetch('/getAllUsers')

  // Gör response till en lista
  let data = await resp.json()

  // Skapa en HTML table komponent
  let table = document.createElement('table')

  let forbiddenAttr = ['id']

  // --------------------------
  // Deta har lagts till för att skapa Header rad i table
  // --------------------------
  // Skapa headers för öersta raden
  let headerRow = document.createElement('tr')
  // Skapa en ForIn loop för det första objektet i listan, för att hämta attribut-namn för header
  for (let attr in data[0]) {
    // Kontroll av att inte ta med förbjudna attribut i output
    if (forbiddenAttr.includes(attr)) continue

    let tableHead = document.createElement('th')
    tableHead.innerText = attr
    headerRow.appendChild(tableHead)
  }
  table.appendChild(headerRow)
  // --------------------------

  // Skapa en ForEach loop
  data.forEach((user) => {
    // Skapa en TR komponent
    let tr = document.createElement('tr')

    // Skapa en ForIn loop för att gå igenom varje attribut i Person
    for (let attr in user) {
      // Kontroll av att inte ta med förbjudna attribut i output
      if (forbiddenAttr.includes(attr)) continue

      // Skapa en TD komponent
      let td = document.createElement('td')
      // Fll den med data
      td.innerText = user[attr]
      // td.innerText = person['name']
      tr.appendChild(td)
    }

    // Placera den färdiga raden i Table
    table.appendChild(tr)
  })

  // Lägg till table i HTML-dokumentet
  document.getElementById('usersoutput').appendChild(table)
})()
*/
