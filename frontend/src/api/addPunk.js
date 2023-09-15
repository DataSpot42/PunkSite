const API_URL = `http://localhost:4000`

export const addPunk = async (punk) => {
    // pass paramter to function
    // create new object with 'text' key (depending on your Model)
    let obj = { orderNum: something.orderNum,
    custID: somethingelse,
    items: [
        item: something.product,    
        productID: something.productID,
        productName: something.productName,
        quantity: something.quantity,
        price: something.price
        ]}
    const response = await fetch(`${API_URL}/punk/item`,{
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
