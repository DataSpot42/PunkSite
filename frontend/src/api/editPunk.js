const API_URL = `http://localhost:4000`

export const editPunk = async (punk,id) => {
    console.log(punk)
    let obj = { /* orderNum: punk.orderNum,
        custName: punk.custName, */
        items: [{
            item: punk.items.item,    
            productID: punk.items.productID,
            productName: punk.items.productName,
            productImage: punk.items.productImage,
            quantity: punk.items.quantity,
            price: punk.items.price
        }]}
        console.log(punk)
    const response = await fetch(`${API_URL}/punks/item/${id}`, {       
    
        // method type?
        method: 'PATCH',
        // sending body, stringify data
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(punk)
        // content type?
        
        
    })
    const json = await response.json()
    console.log(json)
    return json
     
}