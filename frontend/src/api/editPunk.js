const API_URL = `http://localhost:4000`

export const editPunk = async (punk,id) => {
    console.log(punk)
    let obj = { /* orderNum: punk.orderNum,
        custName: punk.custName, */
        items: [{
            item: punk.item,    
            productID: punk.productID,
            productName: punk.productName,
            productImage: punk.productImage,
            quantity: punk.quantity,
            price: punk.price
        }]}
        console.log(obj)
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