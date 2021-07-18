import React, { useState, useEffect } from "react"

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

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export const favouriteProductsStorageKey = "favorites_products"

const ProductList = ({ products }) => {
  const classes = useStyles()

  const [favorites, setFavorites] = useState(getAllFavouriteProducts())

  function addFavorite(product) {
    const isProductAlreadyFavourite = isProductInFavourites(product)

    if (isProductAlreadyFavourite) return

    const newFavouriteProducts = [...favorites, product]

    setFavorites(newFavouriteProducts)
    setToLocalStorage(favouriteProductsStorageKey, newFavouriteProducts)
  }

  function removeFavorite(product) {
    const newFavouriteProducts = favorites.filter(
      (iteratedProduct) => iteratedProduct._id !== product._id
    )

    setFavorites(newFavouriteProducts)
    setToLocalStorage(favouriteProductsStorageKey, newFavouriteProducts)
  }

  function isProductInFavourites(product) {
    return favorites.some(
      (iteratedProduct) => iteratedProduct._id === product._id
    )
  }

  function getAllFavouriteProducts() {
    return getFromLocalStorage(favouriteProductsStorageKey) || []
  }

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
                  {isProductInFavourites(product) ? (
                    <FavoriteIcon
                      fontSize="small"
                      style={{ fill: "red" }}
                      onClick={() => removeFavorite(product)}
                    />
                  ) : (
                    <FavoriteIcon
                      fontSize="small"
                      style={{ fill: "gray" }}
                      onClick={() => addFavorite(product)}
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
