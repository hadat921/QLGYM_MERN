require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gateway-gym-mern.fwker.mongodb.net/gateway-gym-mern?retryWrites=true&w=majority`, {
            useNewUrlParser: true,

            useUnifiedTopology: true
        })
        console.log('Mongo DB conected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)

    }
}
connectDB()
const app = express()
app.use(express.json())



app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

const PORT = 5000

app.listen(PORT, () => console.log("server chay tren cong:" + PORT))