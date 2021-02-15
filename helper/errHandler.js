module.exports = function name(err, req, res, next) {
	console.log(err)

	if (err.message == 'not found') {
            res.status(404).json({
                msg: "pelanggan dengan id " + res.locals.id + " tidak ditemukan"
            })
	} else if (err.code == 'ER_NO_DEFAULT_FOR_FIELD') {
		const field = err.sqlMessage.split(" ")[1];
		res.status(400).json({
			msg: "field " + field + " tidak boleh kosong!"
		})
	}

}
