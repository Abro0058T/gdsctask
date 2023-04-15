import React, { useEffect, useState } from 'react'
import productimg from "../../images/product.jpg"

import {firestore} from "../../firebase"
import {addDoc,collection,getDocs} from "@firebase/firestore"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails ,addToCart} from '../../actions/productAction'
import { Fragment } from 'react'
import Cart from '../Cart/Cart'
import Header from '../home/Header'
import Button from '@mui/material/Button';

function ProductDetails() {
  const {id,userID}=useParams()
  console.log(userID)
  const dispatch=useDispatch();
  const [quantity,setquantity]=useState()
  const  {product}=useSelector(state=>state.product)
  const  {addtocart}=useSelector(state=>state.usercart)
  console.log(addtocart.orders)
//   console.log(product)
  const ref=collection(firestore,"product");
  useEffect(()=>{
    dispatch(

        getProductDetails(id)
    )
  },[dispatch])
  const addtocartbutton =async ()=>{

     dispatch(addToCart(userID,quantity,id,product.name,product.price))
     alert("Product added to cart")
  }
  return (
    <Fragment>
    <Header/>
    <div className='productDetails'>
        <img src={productimg} className='productImage' alt="" />
        <div className="details">
            <h1 className="heading">{product.name}</h1>
            <p className="price">{product.price}</p>
            <input type="number" value={quantity} onChange={(e)=>setquantity(e.target.value)}placeholder='enter the quantity' />
            <Button variant="outlined" onClick={addtocartbutton}>
Add to cart
      </Button>
        </div>
    </div>
    </Fragment>
  )
}

export default ProductDetails