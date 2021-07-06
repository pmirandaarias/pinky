import React from "react"

import { Link } from "gatsby"

import FavoriteIcon from "@material-ui/icons/Favorite"
import { makeStyles } from "@material-ui/core/styles"

import "../../ShopPage/components/ProductCard.css"
import "../../ShopPage/components/Menu.css"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})

const ProductList = ({ products }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        {products?.map((product) => {
          return (
            <div className="ProductCard" key={product._id}>
              <div>
                <Link to="#">
                  <img
                    className="ProductImage"
                    src={product.imagePrimary}
                    alt={product.name}
                  />
                </Link>
                <div className="FavButton">
                  <FavoriteIcon fontSize="small" style={{ fill: "gray" }} />
                </div>
              </div>
              <div className="ProductCardDetails">
                <div className="NameAndPrice">
                  <div className="ProductName">{product.name}</div>
                  <div className="ProductPrice">P{product.price}</div>
                </div>
                <div className="Description"> by {product.shop.name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductList
