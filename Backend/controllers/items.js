const Punk = require("../models/punkshop")


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
    const items = await Punk.find({})
    // respond with and object that has a message and the items from the DB
    res.json({
        message: "all items",
        punk: items
    })
}

const editPunk = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    const punk = await Punk.findByIdAndUpdate(id, { text: req.body.text })
    res.status(200).json(punk)
}
module.exports = {

    getPunk,
    createPunk,
    editPunk
   
}