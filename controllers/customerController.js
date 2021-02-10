const Customer = require('../models/customer')
class CustomerController {
    static getCustomers() {
       return Customer.findAll()
    }
    static newCustomer(data) {
        Customer.create(data)
                .then(res => {
                    console.log("sukses", res.res)
                })
                .catch(console.log)
    }
}

module.exports = CustomerController
