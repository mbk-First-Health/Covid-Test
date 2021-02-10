const Customer = require('../models/customer')
class CustomerController {
	static getCustomers(req, res, next) {
		Customer.findAll()
			.then(customers => {
				res.status(200).json(customers);
			})
			.catch(next)
	}

	static newCustomer(req, res, next) {
		Customer.create(req.body)
			.then(res => {
				req.status(201).json({
					message: 'Customer berhasil ditambahkan',
					res
				})
			})
			.catch(next)
	}
	
	static findCustById(req, res, next) {
		const { cust_id } = req.params
		Customer.findById(cust_id)
			.then(cust => {
				rest.status(200).json(cust)
			})
			.catch(next)
	}

	static delCustomer(req, res, next) {
		const {cust_id} = req.params
		Customer.deleteById(cust_id)
			.then(res => {
				res.status(200).json({
					msg: "berhasil menghapus record"
				})
			})
			.catch(nex)
	}
}

module.exports = CustomerController
