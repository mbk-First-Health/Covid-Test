const Customer = require('../models/testResult')
class TestResultController {
    addTestResult(req, res, next) {

        Customer.addTestResult(req.body)
            .then(tr => {
                res.status(201).json(tr)
            })
            .catch(next)
    }

    getTestResultByCustId(req, res, next) {
        Customer.getTestResultByCustId(req.params.id)
            .then(tr => {
                if (!tr) {
                    throw new Error("not found")
                }
                res.status(200).json(tr)
            })
            .catch(next)
    }
}

module.exports = TestResultController