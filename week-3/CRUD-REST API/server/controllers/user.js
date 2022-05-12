import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yugo1910",
  database:"fakedatabase"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});




 export const getUsers = (req, res) => {
//   res.send(users)
db.query("SELECT * FROM users", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    res.send(result);
  }
});
 }

export  const  createUser = (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname
  const email = req.body.email
 // users.push({ ...user, id: users.length + 1 })
 // res.send(users)
  db.query(
  "INSERT INTO users (name, lastname, email) VALUES (?,?,?)",
  [name, lastname, email],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
);
}
 export const getUser = (req, res) => {
  const {id} = req.params;
 db.query(`SELECT * FROM users WHERE id = ${id}` , (err, result) => {
  if (err) {
    console.log(err);
  } else {
    res.send(result);
  }
});
  }

 export const deleteUser = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
 }
export const updateUser = (req, res) => {
  const  name = req.body.name
  const  lastname = req.body.lastname
  const  email = req.body.email
  const {id} = req.params;
  db.query(
    `UPDATE users SET name =${name} lastname =${lastname} email = ${email} WHERE id = ${id}`,
    
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
  res.send(name,lastname,email);
 }


// let users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Meier",
//     email: "john@hicoders.ch",
//   },
//   {
//     id: 2,
//     firstName: "Ugur",
//     lastName: "dogan",
//     email: "rdogan8891@gmail.com",


//   },
//   {
//     id: 3,
//     firstName: "Ramazan",
//     lastName: "Yilmaz",
//     email: "rdogan8891@gmail.com",


//   },
//   {
//     id: 4,
//     firstName: "Recep",
//     lastName: "Dogan",
//     email: "rdogan8891@gmail.com",


//   }
// ]
