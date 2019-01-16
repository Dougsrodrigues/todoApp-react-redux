const mongoose = require('mongoose')
mongoose.Promise = global.Promise // tirar a mensagem de advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')



