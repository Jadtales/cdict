const express = require('express')

const route = express.Router()

route.get(
    ['/', '/home', '/cwords'],
    (req, res) => {

})

module.exports = route