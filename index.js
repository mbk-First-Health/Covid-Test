const express = require('express')
const app = express()
const port = 3330
const conn = require('./connection/connect')
const router =  require('./routes')
const errHandler = require('./helper/errHandler')

conn.run()
app.use(express.static('public'))
app.set('view engine', 'pug')
app.get('/', function(req, res) {
	res.render('index')
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(router)
app.use(errHandler)

app.listen(port, () => {
    console.log(`Server started on port:${port}`);
});
