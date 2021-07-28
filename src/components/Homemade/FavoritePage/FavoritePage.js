import React from "react"

import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Grid from "@material-ui/core/Grid"
import { favouriteProductsStorageKey } from "../SearchPage/ProductList"

import { Link } from "gatsby"

import "../../Homemade/ShopPage/components/ProductCard.css"

const useStyles = makeStyles({
  top: {
    paddingTop: "50%",
    fontFamily: "visby",
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  icon: {
    color: "red",
    fontSize: "25px",
  },
  backSize: {
    fontSize: "1.5em",
  },
  header: {
    fontFamily: "visby",
    fontWeight: "bold",
  },
  heading: {
    paddingTop: "0.2em",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
})

const FavoritePage = () => {
  const classes = useStyles()

  const getArray = JSON.parse(
    localStorage.getItem(favouriteProductsStorageKey) || "0"
  )

  return (
    <>
      <Grid container spacing={3} className={classes.heading}>
        <Grid item xs={2}>
          <Box pt={0.5}>
            <Link to="#">
              <ArrowBackIcon className={classes.backSize} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6" className={classes.header}>
            My Favorites
          </Typography>
        </Grid>
      </Grid>
      {getArray.length > 0 ? (
        <div className={classes.root}>
          {getArray.map((product) => (
            <div className="ProductCard" key={product._id}>
              <div>
                <Link to="#">
                  <img
                    className="ProductImage"
                    src={product.imagePrimary}
                    alt={product.name}
                  />
                </Link>
              </div>
              <div className="ProductCardDetails">
                <div className="NameAndPrice">
                  <div className="ProductName">{product.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className={classes.top}>
          Add your favorite products here by tapping the{" "}
          <span className={classes.icon}>♥</span> symbol on the product.
        </h4>
      )}
    </>
  )
}

export default FavoritePage
