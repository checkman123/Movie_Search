import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: {
        type: Date,
        default: new Date(),
    },
    watched: [],
    profile_img: String,
    status: String,
})

export default mongoose.model("User", userSchema);