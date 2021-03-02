const mongoose = require('mongoose')

const personsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 0
    },
    gender: {
        type: String,
        required: false,
        default: "unknown"
    },
    weight: {
        type: Number,
        required: false,
        default: 0
    },
    height: {
        type: Number,
        required: false,
        default: 0
    },
    isMarried: {
        type: Boolean,
        required: false,
        default: false
    }

})

module.exports = User = mongoose.model("Persons", personsSchema, "Persons")