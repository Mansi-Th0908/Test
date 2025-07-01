
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    channelName: {
        type: String,
        type: String,
        required: true
    },
    channelId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    logoURL: {
        type: String,
        required: true
    },
    logoID: {
        type: String,
        required: true
    },
    subscription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
})

module.exports = mongoose.model('user', userSchema);