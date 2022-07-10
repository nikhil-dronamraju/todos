const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tdSchema = new Schema({
    todo: {
        type: String,
        required: [true, "Please enter a todo"]
    },

    deadline: {
        type: Date,
    }
})

const Todos = mongoose.model('Todos', tdSchema);

module.exports = Todos;