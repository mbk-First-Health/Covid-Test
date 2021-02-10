const express = require('express')
const app = express()
const port = 3000
const conn = require('./connection/connect')

conn.run()

app.all('/*', (req, res) => {
    res.send('SANGE OMMMM!!');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
