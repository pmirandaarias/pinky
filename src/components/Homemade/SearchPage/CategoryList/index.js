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

  const [myFilters, setMyFilters] = useState({
    filters: { category: [] },
  })
  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)
  const [location, setLocation] = useState({
    long: 120.9868052,
    lat: 14.6038269,
  })

  const [data, setData] = useState([])
  //   const handleClick = (e, categoryId) => {
  //     e.preventDefault()
  //     console.log(categoryId)
  //   }

  const loadFilteredResults = (newFilters) => {
    console.log(newFilters)
    getProductsByCategory(
      location.long,
      location.lat,
      skip,
      limit,
      newFilters
    ).then((data) => {
      console.log(data)
    })
  }

  const clickFilters = (filterBy, categoryId) => {
    console.log("Product", filterBy, categoryId)
    const newFilters = {
      ...myFilters,
      filters: {
        [filterBy]: [...myFilters.filters[filterBy], categoryId],
      },
    }
    console.log(newFilters)
    loadFilteredResults(newFilters.filters)
    setMyFilters(newFilters)
  }

  useEffect(() => {
    loadFilteredResults(myFilters.filters)
  }, [])

  //   console.log("categories", categories)

  return (
    <div className={classes.scrollMenu}>
      {categories.map((category) => {
        return (
          <Button
            key={category._id}
            className={classes.button}
            onClick={() => clickFilters("category", category._id)}
          >
            {category.name}
          </Button>
        )
      })}
    </div>
  )
}

export default CategoryList
