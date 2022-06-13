const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    const SignedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        password:request.body.email
    })
    SignedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router
