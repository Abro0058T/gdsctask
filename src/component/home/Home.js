import React, { Fragment, useEffect, useState } from 'react'
import "./Home.css"
import ProductCard from "./ProductCard.js"
import Search from "./Search.js"
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {getProduct} from "../../actions/productAction"
import Header from "./Header.js"

function Home() {
    const dispatch=useDispatch();
    const {products}=useSelector((state)=>state.products)
    console.log(products)
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
  return (
    <Fragment>
    <Header/>
    <div className='homeHeader'>
        <Search/>
        <h1 className='productHeading'>Featured Product </h1>
        <div className='products'>
            {
                products==undefined ? <p>No products</p>:
                (products.map(product=>(
                    <ProductCard  key={product.id} product={product} />)))
                }

        </div>
    </div>
                </Fragment>
  )
}

export default Home