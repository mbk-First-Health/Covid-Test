const router = require('express').Router()
const CustCtrl = require('../controllers/customerController')

router.get('/', CustCtrl.getCustomers)
router.post('/', CustCtrl.newCustomer)
router.get('/:id', CustCtrl.findCustById)
router.delete('/:id', CustCtrl.delCustomer)
router.put('/:id', CustCtrl.updateCustomer)

module.exports = router

