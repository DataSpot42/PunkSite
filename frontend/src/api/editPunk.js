const API_URL = `http://localhost:4000`

export const editPunk = async (punk) => {
    
    let obj = { orderNum: punk.orderNum,
        custID: punk.custID,
        items: [{
            item: punk.product,    
            productID: punk.productID,
            productName: punk.productName,
            quantity: punk.quantity,
            price: punk.price
        }]}
    const response = await fetch(`${API_URL}/punk/items/${punk._id}`, {       
    
        // method type?
        method: 'PATCH',
        // sending body, stringify data
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(obj)
        // content type?
        
        
    })
    const json = await response.json()
    return json
     
}