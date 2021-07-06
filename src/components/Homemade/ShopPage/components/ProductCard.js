import React from "react"
import AddIcon from "@material-ui/icons/Add"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { Link } from "gatsby"

import "./ProductCard.css"

const ProductCard = ({ data }) => {
  return (
    <div className="ProductCard">
      <div>
        <Link to="/product" state={{ product: data }}>
          <img
            className="ProductImage"
            src={data.imagePrimary}
            alt={data.name}
          />
        </Link>
        <div className="AddButton">
          <AddIcon fontSize="small" />
        </div>
        <div className="FavButton">
          <FavoriteIcon fontSize="small" style={{ fill: "gray" }} />
        </div>
      </div>
      <div className="ProductCardDetails">
        <div className="NameAndPrice">
          <div className="ProductName">{data.name}</div>
          <div className="ProductPrice">P{data.price}</div>
        </div>
        <div className="Description"> {data.description}</div>
      </div>
    </div>
  )
}

export default ProductCard
