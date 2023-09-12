const Todo = require("../models/punkshop")


const createPunk = (req, res) => {
    const { orderNum } = req.body
    const { custID } = req.body
    const { items } = req.body
    console.log(orderNum, custID, items)
    const punkObject = new Punk((
        orderNum,custUDm,items
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

    getPunk,
    createPunk
   
}