const Pool = require('pg').Pool
const pool = new Pool({
  user: 'docker',
  host: '0.0.0.0',
  database: 'postgres',
  password: 'docker',
  port: 25432,
})

const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with name: ${name} `)
  })
}

const deleteUser = (request, response) => {
  const id = request.params.id;
  pool.query('DELETE FROM users WHERE id=$1', [id], (error, results) => {
    if(error){
      throw error
    }
    response.status(200).send('deletado')
  })
}

const listUsers = (request, response) => {
  pool.query('SELECT * FROM users', [], (error, results) =>{
    if(error){
      throw error
    }
    response.status(200).send(results.rows);
  })
}

module.exports = {
    createUser,
    deleteUser,
    listUsers
}