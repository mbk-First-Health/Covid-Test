const express = require('express')
const app = express()
const port = 3000
const conn = require('./connection/connect')
const CustomerController =  require('./controllers/customerController')

conn.run()

app.all('/', (req, res) => {
    CustomerController.getCustomers()
                    .then( result => {
                        res.send(result.res);
                    })
                    .catch(console.log)
});

app.get('/test', (req, res) => {
    CustomerController.newCustomer({
        nama: "david",
        alamat: "cheers.com",
        umur: 27,
        jenisKelamin: "laki - laki",
        noHp: '082980932',
        suhu: 60
    })
    res.send("masuk pak")
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
