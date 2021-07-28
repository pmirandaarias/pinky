import React, { useContext, useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import FavoriteIcon from "@material-ui/icons/Favorite"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { HomeMadeCartContext } from "../../../globalstates"
import { Dialog } from "@material-ui/core"
import mascon_wave_blink from "../../../../assets/gif/mascon_wave_blink.gif"
import ConfirmationDialog from "../../../Dialogs/ConfirmationDialog"
import AddToBagDialog from "../../../Dialogs/AddToBagDialog"
import { navigate } from "gatsby"

import "./ProductCard.css"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { createFavoriteHelpers, getAllFavoriteProducts } from "../../helpers"

const buttonStyle = makeStyles((theme) => ({
  regularButton: {
    margin: "5px",
    background: "#ffcf10",
    border: 0,
    borderRadius: 10,
    color: "white",
    height: 60,
    padding: "0 30px",
  },
  outlinedButton: {
    margin: "5px",
    border: "2px solid #ffcf10",
    color: "#ffcf10",
    borderRadius: 10,
    height: 60,
    padding: "0 30px",
  },
}))

const ProductCard = ({ data }) => {
  //add the "count" field to data object with a value of 1
  let product = {
    ...data,
    count: 1,
  }

  const buttonClass = buttonStyle()
  const [bagItems, updateBag] = useContext(HomeMadeCartContext)

  const [dialogState, setDialogState] = useState({
    showDialog: false,
    dialogMessage: "",
    isError: false,
  })

  const [confirmDialogState, setConfirmDialogState] = useState({
    showDialog: false,
    dialogMessage: "",
    isError: false,
  })

  const [favorites, setFavorites] = useState(getAllFavoriteProducts())
  const favoriteHelpers = createFavoriteHelpers(favorites, setFavorites)

  //This function will check if the product is already in the bag
  function isProductInTheBag(product, productArray) {
    let result = false

    for (let index = 0; index < productArray.length; index++) {
      if (product._id === productArray[index]._id) {
        result = true
      }
    }

    return result
  }

  function addToBag(data) {
    console.log(product)

    //Check for duplicate item
    if (isProductInTheBag(data, bagItems)) {
      setDialogState((prevState) => ({
        ...prevState,
        showDialog: true,
        dialogMessage: "Item is already in the bag",
        isError: true,
      }))

      return
    } else {
      //check if item is on the same shop
      console.log(bagItems.length)
      if (bagItems.length > 0) {
        if (bagItems[0].shop._id === data.shop._id) {
          updateBag((prevState) => [...prevState, product])
          setDialogState((prevState) => ({
            ...prevState,
            showDialog: true,
            dialogMessage: "Product added to bag",
            isError: false,
          }))
        } else {
          setConfirmDialogState((prevState) => ({
            ...prevState,
            showDialog: true,
            dialogMessage:
              "This is a different shop, existing items will be removed do you wish to continue?",
            isError: false,
          }))

          return
        }
      } else {
        updateBag((prevState) => [...prevState, product])
        setDialogState((prevState) => ({
          ...prevState,
          showDialog: true,
          dialogMessage: "Product added to bag",
          isError: false,
        }))
      }
    }
  }

  return (
    <div className="ProductCard">
      <div>
        <Link to="/product" state={{ product: data }}>
          <LazyLoadImage
            className="ProductImage"
            src={data.imagePrimary}
            alt={data.name}
          />
        </Link>
        <div
          aria-hidden="true"
          className="AddButton"
          onClick={() => {
            addToBag(data)
            // useAddToBag(data)
          }}
          onKeyDown={() => {
            addToBag(data)
          }}
        >
          <AddIcon fontSize="small" />
        </div>
        <div className="FavButton">
          {favoriteHelpers.isProductInFavorites(data) ? (
            <FavoriteIcon
              fontSize="small"
              style={{ fill: "red" }}
              onClick={() => favoriteHelpers.removeFavorite(data)}
            />
          ) : (
            <FavoriteIcon
              fontSize="small"
              style={{ fill: "gray" }}
              onClick={() => favoriteHelpers.addFavorite(data)}
            />
          )}
        </div>
      </div>
      <div className="ProductCardDetails">
        <div className="NameAndPrice">
          <div className="ProductName">{data.name}</div>
          <div className="ProductPrice">P{data.price}</div>
        </div>
        <div className="Description"> {data.description}</div>
      </div>
      <AddToBagDialog
        showDialog={dialogState.showDialog}
        message={dialogState.dialogMessage}
        onGotoBag={() => {
          setDialogState((prevState) => ({
            ...prevState,
            showDialog: false,
          }))
          navigate("/bagpage")
        }}
        onAddMoreProducts={() => {
          setDialogState((prevState) => ({
            ...prevState,
            showDialog: false,
          }))
        }}
      />
      <ConfirmationDialog
        showDialog={confirmDialogState.showDialog}
        message={confirmDialogState.dialogMessage}
        onConfirm={() => {
          updateBag([])
          updateBag((prevState) => [...prevState, product])
          setConfirmDialogState((prevState) => ({
            ...prevState,
            showDialog: false,
          }))
          setDialogState((prevState) => ({
            ...prevState,
            showDialog: true,
            dialogMessage: "Product added to bag",
            isError: false,
          }))
        }}
        onDecline={() => {
          setConfirmDialogState((prevState) => ({
            ...prevState,
            showDialog: false,
          }))
        }}
      />
    </div>
  )
}

export default ProductCard
