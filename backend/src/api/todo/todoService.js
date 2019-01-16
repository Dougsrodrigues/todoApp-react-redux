const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true }) // quando mandar uma att ira retornar um registro att e valida as att

module.exports = Todo