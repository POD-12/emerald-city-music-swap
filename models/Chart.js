import mongoose from 'mongoose';
const { Schema } = mongoose;

const recordSchema = new Schema({
    chartTitle:  {
        type: String, 
        required: true
    },
    composer: {
        type: String, 
        required: true
    },
    arranger: {
        type: String,
        required: true
    },
    parts: {
        type: String, 
        required: true
    },
    chartType:  {
        type: String, 
        required: true
    },
    key:  {
        type: String, 
        required: true
    },
    instrument: {
        type: String, 
        required: true
    },
    genre: {
        type: String, 
        required: true
    },
    condition: {
        type: String, 
        required: true
    },
    comments: [{ 
        body: String, 
        date: Date 
    }],
    date: {
        type: Date,
        default: Date.now
    },
});