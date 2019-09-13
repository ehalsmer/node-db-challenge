const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.put('/', (req, res) => {

})

router.get('/', (req, res) => {
    Resources.getResources()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})


module.exports = router;