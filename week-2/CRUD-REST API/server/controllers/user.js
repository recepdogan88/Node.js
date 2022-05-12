export const getUsers = (req, res) => {
  res.send(users)
}

export const createUser = (req, res) => {
  const user = req.body
  users.push({ ...user, id: users.length + 1 })
  res.send(users)
}
export const getUser = (req, res) => {
  const singleUser = users.filter((user => user.id === (Number(req.params.id))))
  res.send(singleUser)
}
export const deleteUser = (req, res) => {

  users = users.filter((user) => user.id !== Number(req.params.id));
  res.send("okey")
  console.log(`user with id ${req.params.id} has been deleted`);
}
export const updateUser = (req, res) => {
  const { firstName, lastName, email } = req.body
  const user = users.find(user => user.id === Number(req.params.id))
  if (firstName) user.firstName = firstName
  if (lastName) user.lastName = lastName
  if (email) user.email = email

  res.send("sss")
}


let users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Meier",
    email: "john@hicoders.ch",
  },
  {
    id: 2,
    firstName: "Ugur",
    lastName: "dogan",
    email: "rdogan8891@gmail.com",


  },
  {
    id: 3,
    firstName: "Ramazan",
    lastName: "Yilmaz",
    email: "rdogan8891@gmail.com",


  },
  {
    id: 4,
    firstName: "Recep",
    lastName: "Dogan",
    email: "rdogan8891@gmail.com",


  }
]
