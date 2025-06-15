import mongoose from 'mongoose'

const dataModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Data = mongoose.model('Data', dataModel);
export default Data