const conn = require('../connection/connect').connection

class Customer {
    static findAll() {
        const query = "select * from customers"
        return new Promise((resolve, reject) => {
           conn.query(query, function(err, res, field) {
                    if(err) {
                        reject(err)
                    }
                    resolve({res, field})
           })
        })
    }

    static findByName(name) {
        const query = "select * from customer where nama like '%?%'"
        return new Promise((resolve, reject) => {
            conn.query(query, [name], function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve({res, field})
            })
        })
    }

    static findbyId(id) {
        const query = "select * from customers where id = ?"
        return new Promise((resolve, reject) => {
            conn.query(query, id, function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    static create(data) {
        let { jenisKelamin,noHp, ...cust} = data
        cust.jenis_kelamin = jenisKelamin
        cust.no_hp = noHp
        const query = "insert into customers set ?"
        return new Promise((resolve, reject) => {
            conn.query(query, cust, function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve({res, field})
            })
        })
    }

    static update(data) {
        let {id, ...cust} = data
        const query = "update customers set ? where id = ?"
        return new Promise((resolve, reject) => {
            conn.query(query, [cust, id], function(err, res, field) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

}

module.exports = Customer