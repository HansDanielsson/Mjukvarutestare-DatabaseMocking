const User = require('./Models/user') // Hämtar User klassen
const { createUser } = require('./dbService')

jest.mock('./Models/user') // Gör alla instanser av User till en mockad version
describe ("Tester mot Databas", () => {

  test("Posta en ny användare", async () => {
    // Mockad respons för User.create
    const mockUser = {id:1, name:'Test10', email:'Test10@exampel.com'}
    User.create.mockResolvedValue(mockUser)

    // Kör funktionen och verifiera
    const result = await createUser('Test10', 'Test10@examlpe.com')
    // expect(User.create).toHaveBeenCalledTimes(1)
    // expect(User.create).toHaveBeenCalledWith({name: 'Test10', email: 'Test10@example.com'})
    expect(result).toEqual(mockUser)
  })

})
