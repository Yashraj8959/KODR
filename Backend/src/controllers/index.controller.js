const UserModel = require('../models/user.model')

module.exports.indexController = (req,res)=>{
    res.render('index')
}
module.exports.registerController = async (req,res)=>{
    res.send('register')
    console.log(req.query)
    const {name, email,age, password} = req.query;
    const newUser = new UserModel({
        name,
        email,
        age,
        password
    })
    await newUser.save()
}


module.exports.getUsersController = async (req,res)=>{
    const users = await UserModel.find({
        name: 'Ali'
    })
    res.send(users)
}

module.exports.updateUserController = async (req,res)=>{
    const user
    = await UserModel.findOneAndUpdate({
        name: 'abc'
    },{
        name: 'xyz'
    })
    res.send(user)
}
module.exports.aboutController = (req,res)=>{
    res.send('About us')
}
