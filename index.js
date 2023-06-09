const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.use(express())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Coffee Store Server is Running........')
})

app.listen(port, (req, res) => {
    console.log(`Coffee store is running port :${port}`);
})