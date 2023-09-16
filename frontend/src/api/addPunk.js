const API_URL = `http://localhost:4000`

export const addPunk = async (punk) => {
    console.log(punk.items[0])
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { orderNum: punk.orderNum,
        custName: punk.custName,
        items: [{
            item: punk.items[0].item,    
            productID: punk.items[0].productID,
            productName: punk.items[0].productName,
            productImage: punk.items[0].productImage,
            quantity: punk.items[0].quantity,
            price: punk.items[0].price
    }]}
    console.log(obj)
    const response = await fetch(`${API_URL}/punks/item`,{
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type' : 'application/json'

        }
    })
    const json = await response.json()
    return json
}
