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
    let qtyFlag = 0
    let obj = { /* _id:id,  */ /* orderNum: ourBasket.orderNum,
    custName: ourBasket.custName, */
    items: [{
        item: 1,    
        productID: product.id,
        productName: product.name,
        productImage: product.image_url,
        quantity: amount,
        price: product.price
}]}  
console.log(obj)
console.log(obj2)
// format chosen product in the right form to go into the basket
for (let k=0; k<obj2.items.length; k++) {  
if (obj.items[0].productID === obj2.items[k].productID) {obj2.items[k].quantity++; qtyFlag++}}
console.log(qtyFlag)
if (qtyFlag===0){
  obj2.items.push(obj.items[0])} //add current items to new item
  
  let response = await editPunk(obj2,id)         
  
   
} 
  const handlerGotoBasket = (e) => {
    
    navigate (`/Basket/${id}`) 
  }

  
  



  const getBeer = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=80");
    const data = await response.json();
    
    
   
   const pricedData = data.map((price) => {
    return {
        price: parseFloat(faker.commerce.price({ min: 10, max: 30, dec: 2})),
        ...price
    }
});

  
setItem(pricedData)

  }

  useEffect(() => {
    getBeer();
  }, []);



  return (
    <div>
    <img className='adbanner' src={ad} alt="Logo"></img>
    <div className='next-btn'>
    <button onClick={() => handlerNextPage()}> Next Page</button>
        <button onClick={(e) => handlerGotoBasket(e.target.value)}> Basket</button>
        </div>
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
                    <div className="gitDetail textcard avb">avb - {info.abv}%</div>
                    <div className="gitDetail textcard vol">{info.volume.value} liters</div>
                    </div>
                    <div className="detail-box">
                    
                    <div className="beerName">{info.name}</div>
                    <div className="gitDetail"> {info.ingredients.malt[0].name}</div>
                    <div className="gitDetail">£{info.price}</div>
                  </div>
<div className='.bottom-btn'>
                  <button onClick={() => handlerAddBasket(info)} className="seeMore addto"> Add</button>
                  {/* <button onClick={() => handlerPopup(info)}> More Info</button> */}
                  
                  
    <Popup  trigger={<button className='moreinfo'>More Info</button>} position="right center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="popupclass moreinfo" >{info.name} <br></br> <br></br> {info.description} </motion.div>
    </Popup>
 </div>
                  {/* {setBtnpopup && < Popup productinfo = {info} /> } */}
                


              </div>
            )
          })
        }
        

        

       {/* {<Popup trigger={btnPopup} setTrigger={setBtnpopup}>

 </Popup> } */}
      </div>

    </div>
    </div>
  );


}

export default Beer
