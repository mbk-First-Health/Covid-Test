const express = require('express')
const app = express()
const port = 3000
const conn = require('./connection/connect')
const CustomerController =  require('./controllers/customerController')

conn.run()

app.all('/*', (req, res) => {
    CustomerController.getCustomers()
                    .then( result => {
                        res.send(result);
                    })
                    .catch(console.log)
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
