import './shopcards.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { BasketAdd } from './basket';
/* import Popup from './popup'; */
import Popup from 'reactjs-popup';
import { motion } from "framer-motion";   // animation module



const Beer = () => {
  const [btnPopup, setBtnpopup] = useState(false)
  const randomPrice = faker.commerce.price({ min: 10, max: 30, dec: 2, symbol: '£' })
  const [item, setItem] = useState([]);
  const [basket, setBasket] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const orderNum = faker.number.int({ min: 1, max: 100 })
  const custNum = 1
  let itemNum = 1
  let basketItem =[]
  const handlerNextPage = () => {
    setStart(start + 10)
    setEnd(end + 10)
    if (end >= 80) {
      setStart(0)
      setEnd(10)
    }
  }
  const handlerAddBasket = (product) => {
    let array = []
    itemNum++
    array = [product]
    console.log(product)
    basketItem.push([product.id, product.name, product.price])
    console.log(basketItem)
    /* setBasket(basketItem)
    console.log(basket) */
    /* let list = BasketAdd(basketItem)
    setBasket(list)
 */
  }
const handlerPopup = (product) =>{
 setBtnpopup(true)
 console.log(product)
 Popup(product)
 
 
}
  
  console.log(start, end)



  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const data = await response.json();
    
    console.log(data)
   
   const pricedData = data.map((price) => {
    return {
        price: faker.commerce.price({ min: 10, max: 30, dec: 2, symbol: '£' }),
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
    <div className='contianer'>
      <div className="cards-grid-wrap">

        {
          item.slice(start, end).map((info, index) => {
            return (

              <div className="card_item" key={info.id}>
                <div className="card_inner">
                  <img className='card_img' src={info.image_url} alt="" />
                </div><div className="beerName">{info.name}

                  <div className="detail-box">
                    <div className="gitDetail">{info.price}</div>
                    <div className="gitDetail">{info.volume.value} liters</div>
                    <div className="gitDetail"> {info.ingredients.malt[0].name}</div>
                  </div>
                  <button onClick={() => handlerAddBasket(info)} className="seeMore"> Add</button>
                  {/* <button onClick={() => handlerPopup(info)}> More Info</button> */}
                  
                  
    <Popup  trigger={<button>Trigger</button>} position="right center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="popupclass" >{info.name} {info.description} </motion.div>
    </Popup>
 
                  {/* {setBtnpopup && < Popup productinfo = {info} /> } */}
                </div>


              </div>
            )
          })
        }
        <button onClick={() => handlerNextPage()}> Next Page</button>

        

       {/* {<Popup trigger={btnPopup} setTrigger={setBtnpopup}>

 </Popup> } */}
      </div>

    </div>
  );


}

export default Beer























