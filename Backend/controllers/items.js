const Punk = require("../models/punkshop")


const createPunk = async (req, res) => {
    const { orderNum } = req.body
    const { custID } = req.body
    const { items } = req.body
    console.log(orderNum, custID, items)
    const punkObj = new Punk({
        orderNum,custID,items
})
// await for it to be saved
    const newPunk = await punkObj.save()
    // respond with json()
    res.status(200).json(newPunk)
}

const getPunks = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Punk.find({})
    // respond with and object that has a message and the items from the DB
    res.json({
        message: "all items",
        punk: items
    })
}
const getPunk = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const punk = await Punk.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(punk)
}
const editPunk = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    const punk = await Punk.findByIdAndUpdate(id, ({
    orderNum: req.body.orderNum,
    custID: req.body.custName,    
    items: req.body.items /* [{
        item: req.body.item,     
        quantity: req.body.quantity,
        price: req.body.price,
        }]     */
    
}))
    res.status(200).json(punk)
}
const deletePunk = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
    const punk = await Punk.findByIdAndDelete(id)
    res.status(200).json(punk)
}


   


module.exports = {

    getPunks,
    getPunk,
    createPunk,
    editPunk,
    deletePunk
   
}