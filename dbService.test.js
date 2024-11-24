const User = require('./Models/user') // Hämtar User klassen
const { createUser, getAllUsers } = require('./dbService')

jest.mock('./Models/user') // Gör alla instanser av User till en mockad version
describe('Tester mot Databas', () => {

  afterEach(() => {
    jest.clearAllMocks() // Töm mockade metoder
  })

  test('Posta en ny användare', async () => {
    // Mockad respons för User.create
    const mockUser = { id: 1, name: 'Test10', email: 'Test10@exampel.com' }
    User.create.mockResolvedValue(mockUser)

    // Kör funktionen och verifiera
    const result = await createUser('Test10', 'Test10@exampel.com')
    expect(User.create).toHaveBeenCalledTimes(1)
    expect(User.create).toHaveBeenCalledWith({name: 'Test10', email: 'Test10@exampel.com'})
    expect(result).toEqual(mockUser)
  })

  test('getAllUsers ska returnera alla användare', async () => {
    // Mockad respons för User.findAll
    const mockUsers = [
      { id: 1, name: 'Test1', email: 'Test1@exampel.com' },
      { id: 2, name: 'Test2', email: 'Test2@exampel.com' }
    ]
    User.findAll.mockResolvedValue(mockUsers)

    // Kör funktionen och verifiera
    const result = await getAllUsers()
    expect(User.findAll).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockUsers)
  })
})
