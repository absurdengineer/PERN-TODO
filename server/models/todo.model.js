const Joi = require('joi')

const todoSchema = Joi.object({
    description : Joi.string().min(5).max(255).required()
})

const validateTodo = todo => todoSchema.validate(todo)

module.exports.validateTodo = validateTodo