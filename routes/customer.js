const router = require('express').Router()
const CustCtrl = require('../controller/customerController')

router.get('/customers', CustCtrl.getCustomers)
router.get('/customers/:id', CustCtrl.getCustById)
router.delete('/customers/:id', CustCtrl.delCustomer)
router.put('/customers/:id', CustCtrl.updateCustomer)

moduls.exports = router

