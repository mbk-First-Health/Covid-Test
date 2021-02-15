const Customer = require('../models/customer')
const { validateNoHp } = require('../helper/validation')
class CustomerController {
	static getCustomers(req, res, next) {
		Customer.findAll()
			.then(customers => {
				res.status(200).json({statusCode: 200, customers});
			})
			.catch(next)
	}

	static newCustomer(req, res, next) {
		Customer.create(req.body)
			.then(cust => {
				res.status(201).json({
					message: 'Customer berhasil ditambahkan',
					statusCode: 201,
					cust
				})
			})
			.catch(next)
	}
	
	static findCustById(req, res, next) {
		const { id } = req.params
		Customer.findbyId(id)
			.then(cust => {
				if (!cust) {
					res.locals.id = id
					throw new Error('not found')
				}
				res.status(200).json({statusCode: 200, cust})
			})
			.catch(next)
	}

	static delCustomer(req, res, next) {
		const {id} = req.params
		Customer.deleteById(id)
			.then(data => {
				if (data.affectedRows == 0) {
					res.locals.id = id
					throw new Error('not found')
				}
				res.status(200).json({
					msg: "berhasil menghapus record",
					statusCode: 200,
					data
				})
			})
			.catch(next)
	}

	static updateCustomer(req, res, next) {
		const { id } = req.params
		const data = req.body
		Customer.update({id, ...data})
			.then(data => {
				if (data.affectedRows == 0) {
					res.locals.id = id
					throw new Error('not found')
				}
				res.status(200).json({
					msg: 'Berhasil ubah data customer',
					statusCode: 200,
					data
				})
			})
			.catch(next)
	}
}

module.exports = CustomerController
