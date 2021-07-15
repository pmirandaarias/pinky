import React, { useState, useEffect } from "react"

import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { getProductsByCategory } from "../../../../api/public/search"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0.5),
    border: "1px solid black",
    borderRadius: "1em",
    boxShadow: "1px 1px",
  },
  scrollMenu: {
    overflow: "auto",
    whiteSpace: "nowrap",
  },
  buttonActive: {
    backgroundColor: "gray",
  },
}))

const CategoryList = ({ categories }) => {
  const classes = useStyles()

  const [category, setCategory] = useState([])
  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)
  const [location, setLocation] = useState({
    long: 120.9868052,
    lat: 14.6038269,
  })

  const [productsByCategory, setProductsByCategory] = useState([])

  useEffect(() => {
    // console.log(category)
    getProductsByCategory(
      location.long,
      location.lat,
      skip,
      limit,
      category
    ).then((data) => {
      console.log("clickfilters", data)
      setProductsByCategory(data)
    })
  }, [category])

  let categoryArray = []
  function clickFilters(categoryId) {
    // categoryArray.push(categoryId)
    setCategory((categoryArray) => [...categoryArray, categoryId])
  }

  return (
    <div className={classes.scrollMenu}>
      {categories.map((category) => {
        return (
          <Button
            key={category._id}
            className={classes.button}
            onClick={(e) => clickFilters(category._id)}
          >
            {category.name}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryList
