
const mongoose = require("mongoose");


const postSchema = mongoose.Schema({

    firstName: {
        type : String,
        require : true,
        minlength: 1,
        maxlength: 255
    },

    lastName: {
        type : String,
        require : true,
        minlength: 1,
        maxlength: 255
    },

    dateOfBorn: {
        type : Date,
        require : true,
        minlength: 1,
        maxlength: 255
    },

    email: {
        type : String,
        require : true,
        minlength: 1,
        maxlength: 255
    },
})

    

module.exports = mongoose.model('createNewStudent', postSchema);