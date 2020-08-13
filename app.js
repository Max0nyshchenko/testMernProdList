const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes.js'))
app.use('/api/prod', require('./routes/prod.routes.js'))

async function start ( ) {
    try {
        await mongoose.connect('mongodb+srv://max:1234@cluster0.r7vtg.azure.mongodb.net/product-list?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, ()=>console.log('App running on port ' + PORT))
    }
    catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()