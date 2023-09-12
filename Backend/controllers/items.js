const Todo = require("../models/punkshop")


const createPunk = (req, res) => {
    const { name } = req.body
    console.log(name)
    const punkObject = new Punk((
        name
    ))
}

const getPunk = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await punk.find({})
    // respond with and object that has a message and the items from the DB
    res.json({
        message: "all items",
        punk: items
    })
}

module.exports = {

    getPunk
   
}