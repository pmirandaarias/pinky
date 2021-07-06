import React, { useEffect } from "react"
import { Router } from "@reach/router"
import Homemade from "../components/Homemade/MainIndexPage"

const App = () => {
  useEffect(() => {
    console.log("Loaded")
  }, [])

  return (
    <Router basepath="/app">
      <Homemade path="/homemade" />
    </Router>
  )
}

export default App
