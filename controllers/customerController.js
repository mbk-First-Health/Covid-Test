const Customer = require('../models/customer')
class CustomerController {
    static getCustomers() {
       return Customer.findAll()
    }
}

module.exports = CustomerController
