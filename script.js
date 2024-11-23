const { createUser, getAllUsers } = require('./dbService')
const syncDatabase = require('./dbSync');

(async () => {
  await syncDatabase() // För att synka databasen med vår modell

  // Skapa en ny användare
  const user = await createUser('Test5', 'test5@example.com') // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON())

  // Hämta alla användare
  const users = await getAllUsers() // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()))
})()
