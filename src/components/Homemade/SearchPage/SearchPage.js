import React, { useState, useEffect } from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Grid from "@material-ui/core/Grid"
// import FavoriteIcon from "@material-ui/icons/Favorite"

import { Link } from "gatsby"
import {
  getAllCategories,
  getAllProducts,
  searchProducts,
} from "../../../api/public/search"
import CategoryList from "./CategoryList"
import ProductList from "./ProductList"

import "../ShopPage/components/ProductCard.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  input: {
    width: "100%",
  },
  top: {
    paddingTop: "15%",
  },
  backSize: {
    fontSize: "1.5em",
  },
  product: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}))

const SearchPage = () => {
  const classes = useStyles()

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories)
      //   console.log(categories)
    })
  }, [])

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products)
    })
  }, [])

  useEffect(() => {
    if (query === "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    loadProducts()
  }, [query])

  const loadProducts = async () => {
    const results = await searchProducts(query)
    setResults(results)
    // console.log(results)
  }
  console.log("[x] (SearchPage) isActive", isActive)
  console.log("[x] (SearchPage) products", products)

  const handleChangeProducts = (newFilters) => {
    console.log('[x] handleChangeProducts products]', products)
    console.log('[x] handleChangeProducts newFilters]', newFilters)
    // here a map with a filter, something like that. You use the newFilters
    // loop on the products, and filter with those newFilters, but you have to
    // fix the click on the other side, where are adding each id to the array, that's wrong
    // const filteredProducts = products.filter((product) => )
    // const filteredProducts = products
    //console.log("[x] handleChangeProducts filteredProducts", filteredProducts)
    setProducts(products)
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Box pt={1.5}>
            <Link to="#">
              <ArrowBackIcon className={classes.backSize} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Paper className={classes.root}>
            <IconButton aria-label="menu"></IconButton>
            <InputBase
              className={classes.input}
              placeholder="Search for foods"
              onChange={(e) => {
                setQuery(e.target.value)
              }}
              value={query}
            />
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <Box pt={1}>
        <CategoryList
          categories={categories}
          changeProducts={handleChangeProducts}
        />
      </Box>
      <Box pt={1}>
        <ProductList products={isActive ? products : results} />
      </Box>
    </>
  )
}

export default SearchPage
