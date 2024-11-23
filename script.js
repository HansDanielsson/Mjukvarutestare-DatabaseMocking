const { createUser, getAllUsers } = require('./dbService');
const syncDatabase = require('./dbSync');

(async () => {
  await syncDatabase() // För att synka databasen med vår modell

  // Skapa en ny användare
  let user = await createUser('Test3', 'test3@example.com') // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON())

  // Hämta alla användare
  let users = await getAllUsers() // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()))

})()
