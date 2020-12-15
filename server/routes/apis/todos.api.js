const router = require('express').Router()
const pool = require('../../database/database.connect')
const {validateTodo} = require('../../models/todo.model')

const checkTodo = async id => {
    try{
        const {rows, rowCount} = await pool.query(`SELECT * FROM todo where id=${id}`)
        if(!rowCount) return false
        return rows[0]
    } catch({name, message}){
        console.log(`${name} : ${message}`)
    }
}

router.get('/', async (req, res) => {
    try{
        const {rows, rowCount} = await pool.query(`SELECT * FROM todo ORDER BY id`)
        if(!rowCount) return res.status(200).send(`There is no data in this API !!!`)
        return res.status(200).json(rows)
    } catch({name, message}){
        console.log(`${name} : ${message}`)
        res.status(500).send(`Something Went Wrong!!!`)
    }
})
router.get('/:id', async (req, res) => {
    const todo = await checkTodo(parseInt(req.params.id))
    if(!todo) return res.status(404).send(`Invalid Id :  There is no todo with the provided Id!!!`)
    return res.status(200).json(todo)
})
router.post('/', async (req, res) => {
    const {error} = validateTodo(req.body)
    if(error) return res.status(400).send(`${error.name} : ${error.message}`)
    const {description} = req.body
    try{
        const {rows} = await pool.query(`INSERT INTO todo VALUES (DEFAULT, '${description}') RETURNING *`)
        return res.status(200).json(rows[0])
    } catch({name, message}){
        console.log(`${name} : ${message}`)
        res.status(500).send(`Something Went Wrong!!!`)
    }
})
router.put('/:id', async (req, res) => {
    const {error} = validateTodo(req.body)
    if(error) return res.status(400).send(`${error.name} : ${error.message}`)
    const {description} = req.body
    const {id} = req.params
    const todo = await checkTodo(id)
    if(!todo) return res.status(404).send(`Invalid Id :  There is no todo with the provided Id!!!`)
    try{
        const {rows} = await pool.query(`UPDATE todo SET description='${description}' WHERE id=${id} RETURNING *`)
        res.status(200).json(rows[0])
    } catch({name, message}){
        console.log(`${name} : ${message}`)
        res.status(500).send(`Something Went Wrong!!!`)
    }
})
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const todo = await checkTodo(id)
    if(!todo) return res.status(404).send(`Invalid Id :  There is no todo with the provided Id!!!`)
    try {
        const {rows} = await pool.query(`DELETE FROM todo WHERE id=${id} RETURNING *`)
        res.status(200).json(rows[0])
    } catch ({name, message}) {
        console.log(`${name} : ${message}`)
        res.status(500).send(`Something Went Wrong!!!`)
    }
})

module.exports = router