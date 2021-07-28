import React, { useState } from "react"

import { Link } from "gatsby"

import FavoriteIcon from "@material-ui/icons/Favorite"
import { makeStyles } from "@material-ui/core/styles"

import { createFavoriteHelpers, getAllFavoriteProducts } from "../../helpers"

import "../../ShopPage/components/ProductCard.css"
import "../../ShopPage/components/Menu.css"

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "-20px 0 100px 0",
  },
})

const ProductList = ({ products }) => {
  const classes = useStyles()

  const [favorites, setFavorites] = useState(getAllFavoriteProducts())
  const favoriteHelpers = createFavoriteHelpers(favorites, setFavorites)

  return (
    <>
      <div className={classes.root}>
        {products?.map((product) => {
          return (
            <div className="ProductCard" key={product._id}>
              <div>
                <Link to="/shop" state={{ shop: product.shop }}>
                  <img
                    className="ProductImage"
                    src={product.imagePrimary}
                    alt={product.name}
                  />
                </Link>
                <div className="FavButton">
                  {favoriteHelpers.isProductInFavorites(product) ? (
                    <FavoriteIcon
                      fontSize="small"
                      style={{ fill: "red" }}
                      onClick={() => favoriteHelpers.removeFavorite(product)}
                    />
                  ) : (
                    <FavoriteIcon
                      fontSize="small"
                      style={{ fill: "gray" }}
                      onClick={() => favoriteHelpers.addFavorite(product)}
                    />
                  )}
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
