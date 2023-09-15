import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';



export const BasketAdd = (basketItem) => {
    const [shoppingList,setShoppingList] = useState([])
    console.log(basketItem)

    setShoppingList(basketItem)

    return shoppingList




}