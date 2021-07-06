import React, { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { getProductsByShopId } from "../../../../api/public/products"
import "./Menu.css"

const Menu = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsByShopId(props.shopId).then((response) => {
      setProducts(response)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="MenuGrid">
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  )
}

export default Menu
