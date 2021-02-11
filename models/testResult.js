const conn = require('../connection/connect').connection
class TestResult {
    addTestResult(rdata) {
        const query = "insert into test_result set ?"
        return new Promise((resolve, reject) => {
            conn.query(query, rdata, function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    getTestResultByCustId(cust_id) {
        const query = "select * from test_result where cust_id = ?"
        return new Promise((resolve, reject) => {
            conn.query(query, cust_id, function (err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }
}

module.exports = TestResult