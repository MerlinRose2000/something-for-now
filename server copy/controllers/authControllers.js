const User = require('../models/user')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = (req, res) => {
    try {
        const {name, email, password} = req.body;
        //Check if name was entered//
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };
        //Check if password was entered//
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };
        //Check email *check to make sure await still works between '=' and 'User'// 
        const exist = User.findOne({email})
        if(exist) {
            return res.json({
                error:'Email is already taken'
            })
        }

        const user = User.create({
            name, email, password
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}