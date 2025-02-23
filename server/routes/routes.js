const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {
    
   // const saltPassword = await bcrypt.genSalt(10)
   // const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const SignedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        password:request.body.password
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
