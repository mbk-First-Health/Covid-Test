const conn = require('../connection/connect').connection

class Customer {
    constructor(nama, alamat, umur, jk, noHp, suhu) {
        this.nama = nama
        this.alamat = alamat
        this.umur = umur
        this.jeniKelamin = jk
        this.noHp = noHp
        this.suhu = suhu
    }

    static findAll() {
        const query = 'select * from customers'
        return new Promise((resolve, reject) => {
           conn.query(query, function(err, res, field) {
                    if(err) {
                        reject(err)
                    }
                    resolve({res, field})
           })
        })
    }
}

module.exports = Customer
