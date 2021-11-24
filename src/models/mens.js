const mongoose = require('mongoose');

const mensSchema = new mongoose.Schema({
    ranking:{
        type: 'Number',
        required: true,
        unique: true
    },
    name:{
        type: 'string',
        required: true,
        trim: true
    },
    dob:{
        type: 'Date',
        required: true,
        trim: true
    },
    country:{
        type: 'string',
        required: true,
        trim: true
    },
    score:{
        type: 'Number',
        required: true,
        trim: true
    },
    event:{
        type: 'string',
        default: "100m"
    }
})

// i am creating a new collection here

const MensRanking = new mongoose.model("MensRanking",mensSchema )

module.exports = MensRanking;