const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
