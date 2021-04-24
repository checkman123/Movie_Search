import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String},
    createdAt: {
        type: Date,
        default: new Date(),
    },
    watched: [],
})

export default mongoose.model("User", userSchema);