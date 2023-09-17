import '../components/shopcards.css';
import { addPunk } from "../api/addPunk"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPunk } from "../api/getPunk"
import { editPunk } from "../api/editPunk"
import { useNavigate } from "react-router-dom"
/* import Popup from './popup'; */
import Popup from 'reactjs-popup';
import { motion } from "framer-motion";   // animation module
import ad from '../images/adbanner.jpg';




const Beer = () => {
  const { id } = useParams()
  const [toUpdate, setToUpdate] = useState('')
  console.log(id)
  const [btnPopup, setBtnpopup] = useState(false)
  const navigate = useNavigate()
  const [item, setItem] = useState([]);
  const [orderItem, setOrderItem] = useState(0);
  const [basket, setBasket] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const orderNum = faker.number.int({ min: 1, max: 100 })
  const custNum = 1
  let itemNum = 1
  let basketItem =[]
  console.log('Welcome to the Shop')
  const handlerNextPage = () => {
    setStart(start + 10)
    setEnd(end + 10)
    if (end >= 80) {
      setStart(0)
      setEnd(10)
    }
  }
  const handlerAddBasket = async (product) => {
    let obj2 = await getPunk(id)  // get curent order 
    let array = []
    itemNum++
    let amount=1
    array = [product]  
    console.log(product)
    let obj = { /* _id:id,  */ /* orderNum: ourBasket.orderNum,
    custName: ourBasket.custName, */
    items: [{
        item: 1,    
        productID: product.id,
        productName: product.name,
        productImage: product.image_url,
        quantity: amount,
        price: product.price
}]}  // format chosen product in the right form to go into the basket
    /* let obj2 = null */
    console.log("New Item")
    console.log(obj)    
    console.log("Existing Order")
    console.log(obj2)
    /* if (currentBasketItems.length>0) {obj2 = currentBasketItems} else {obj2 = []} */
    // if there are items in the baseket store them in obj2 
    
    
    /* let ourBasketObject = Object.fromEntries(ourBasketItems) */
    /* ourBasketItems.push[{product.id, product.name, product.image_url, product.price}] */
    /* console.log(currentBasketItems)    
    console.log(obj2) */
    /* let nextItem = ourBasket.items */

  /* console.log(obj) */
  obj2.items.push(obj.items[0])  //add current items to new item
  console.log(obj2)
  let response = await editPunk(obj2,id)         
  console.log(response)
    /* let basketSize = ourBasket[0].length */

    
    /* let obj = {
      _id: toUpdate._id,
      item 
    } */
    
    /* setBasket(basketItem)
    console.log(basket) */
    /* let list = BasketAdd(basketItem)
    setBasket(list)
 */
  }
  const handlerGotoBasket = (e) => {
    
    navigate (`/Basket/${id}`) 
  }

  
  console.log(start, end)



  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const data = await response.json();
    
    console.log(data)
   
   const pricedData = data.map((price) => {
    return {
        price: parseFloat(faker.commerce.price({ min: 10, max: 30, dec: 2})),
        ...price
    }
});
console.log(pricedData)
  
setItem(pricedData)

  }

  useEffect(() => {
    getBeer();
  }, []);



  return (
    <div>
    <img className='adbanner' src={ad} alt="Logo"></img>
    <div className='contianer'>
     
    
      <div className="cards-grid-wrap">
    
        {
          item.slice(start, end).map((info, index) => {
            return (

              <div className="card_item" key={info.id}>
                <div className="card_inner">
                  <img className='card_img' src={info.image_url} alt="" />
                </div>

                  
                    <div className='txtcard'> 
                    <div className="gitDetail textcard avb">avb - {info.abv}</div>
                    <div className="gitDetail textcard vol">{info.volume.value} liters</div>
                    </div>
                    <div className="detail-box">
                    
                    <div className="beerName">{info.name}</div>
                    <div className="gitDetail"> {info.ingredients.malt[0].name}</div>
                    <div className="gitDetail">£{info.price}</div>
                  </div>

                  <button onClick={() => handlerAddBasket(info)} className="seeMore"> Add</button>
                  {/* <button onClick={() => handlerPopup(info)}> More Info</button> */}
                  
                  
    <Popup  trigger={<button>More Info</button>} position="right center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="popupclass" >{info.name} {info.description} </motion.div>
    </Popup>
 
                  {/* {setBtnpopup && < Popup productinfo = {info} /> } */}
                


              </div>
            )
          })
        }
        <button onClick={() => handlerNextPage()}> Next Page</button>
        <button onClick={(e) => handlerGotoBasket(e.target.value)}> Basket</button>

        

       {/* {<Popup trigger={btnPopup} setTrigger={setBtnpopup}>

 </Popup> } */}
      </div>

    </div>
    </div>
  );


}

export default Beer
