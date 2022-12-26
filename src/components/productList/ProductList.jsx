import React from 'react'
import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl block">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Lama</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, laboriosam tempore! Accusantium, quisquam hic beatae, repellat possimus modi quidem ratione suscipit, error sunt placeat. Nemo voluptatibus ut dolor aliquid alias?
            </p>
        </div>
        <div className="pl-list">
            {products.map((item)=>(
                <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList