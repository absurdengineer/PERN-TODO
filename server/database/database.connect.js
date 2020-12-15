const {Pool} = require('pg')
const config = require('config')

const pool = new Pool({
    host : config.get('PGHOST'),
    user : config.get('PGUSER'),
    password : config.get('PGPASSWORD'),
    database : config.get('PGDATABASE'),
    port : config.get('PGPORT')
})

pool.connect()
    .then( () => console.log(`Connected to ${config.get('PGDATABASE')} as ${config.get('PGUSER')} over port ${config.get('PGPORT')}`) )
    .catch( ({name, messsage}) => console.log(`${name} : ${message}`))

module.exports = pool