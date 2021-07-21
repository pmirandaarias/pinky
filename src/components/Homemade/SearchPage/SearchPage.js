import React, { useState, useEffect } from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
// import FavoriteIcon from "@material-ui/icons/Favorite"

import { Link } from "gatsby"
import {
  getAllCategories,
  getAllProducts,
  searchProducts,
  getProductsByCategory,
} from "../../../api/public/search"
// import CategoryList from "./CategoryList"
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
  button: {
    margin: theme.spacing(0.5),
    border: "1px solid black",
    borderRadius: "1em",
    boxShadow: "1px 1px",
  },
  buttonDark: {
    margin: theme.spacing(0.5),
    background: '#DDD',
    border: "1px solid black",
    borderRadius: "1em",
    boxShadow: "1px 1px",
  },
  scrollMenu: {
    overflow: "auto",
    whiteSpace: "nowrap",
  },
}))

const SearchPage = () => {
  const classes = useStyles()

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [filteredCategory, setFilteredCategory] = useState([])
  const [category, setCategory] = useState([])
  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)
  const [location, setLocation] = useState({
    long: 120.9868052,
    lat: 14.6038269,
  })
  const [dark, setDark] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories)
      //   console.log(categories)
    })
  }, [])

  //   useEffect(() => {
  //     getAllProducts().then((products) => {
  //       setProducts(products)
  //     })
  //   }, [])

  useEffect(() => {
    loadProducts()
  }, [query])

  useEffect(() => {
    // console.log(category)

    if (category.length != 0) {
      getProductsByCategory(
        location.long,
        location.lat,
        skip,
        limit,
        category
      ).then((data) => {
        //   console.log(data)
        //   console.log("[x] clickfilters", data)
        setFilteredCategory(data)
        //   console.log(filteredCategory)
        //   console.log(data.data.length)
      })
    }
    console.log(category)
  }, [category])

  useEffect(() => {
    if (typeof filteredCategory.data !== "undefined") {
      console.log("unang if")
      if (query != "") {
        setProducts(results)
      } else {
        setProducts(filteredCategory.data)
      }
    } else if (query != "") {
      if (query === "") {
        getAllProducts().then((products) => {
          setProducts(products)
        })
      } else {
        console.log("2nd if")
        setProducts(results)
      }
    } else {
      getAllProducts().then((products) => {
        setProducts(products)
      })
      console.log("3rd if")
    }
  }, [filteredCategory, results])

  const loadProducts = async () => {
    const results = await searchProducts(query)
    setResults(results)
    // console.log(results)
  }
  console.log(category)
  //   console.log("[x] (SearchPage) isActive", isActive)
  console.log("[x] (SearchPage) products", products)

  let categoryArray = []
  function clickFilters(categoryId) {
    console.log('[Y] clickFilters categoryId', categoryId);
    // categoryArray.push(categoryId)
    // console.log(categoryId)
    if (activeCategory === categoryId) {
      setActiveCategory('')
    } else {
      setActiveCategory(categoryId)
    }
    if (!category.includes(categoryId)) {
      console.log("test")
      setCategory((categoryArray) => [...categoryArray, categoryId])
    } else {
      const currentCategoryId = category.indexOf(categoryId)
      category.splice(currentCategoryId, 1)
      console.log(category)
    }
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
      <div className={classes.scrollMenu}>
        {categories.map((category) => {
          return (
            <>
              <Button
                key={category._id}
                className={activeCategory === category._id ? classes.buttonDark : classes.button}
                onClick={(e) => clickFilters(category._id)}
              >
                {category.name}
              </Button>
            </>
          )
        })}
      </div>
      {/* <Box pt={1}>
        <CategoryList categories={categories} />
    </Box> */}
      <Box pt={1}>
        <ProductList products={products} />
      </Box>
    </>
  )
}

export default SearchPage
