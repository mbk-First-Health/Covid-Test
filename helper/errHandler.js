module.exports = function name(err, req, res, next) {
    switch (err.message) {
        case 'not found':
            res.status(404).json({
                msg: "pelanggan dengan id " + res.locals.id + " tidak ditemukan"
            })
            break;
    
        default:
            break;
    }
}