import React from "react"
import StaggeredCard from "../component/StaggeredCard"

const ShopsList = ({ shops }) => {
  return (
    <div className="masonry_list">
      {shops.map((shop, index) => (
        <StaggeredCard
          key={shop._id}
          Size={index % 2 === 0 ? "Large" : "Small"}
          shop={shop}
        />
      ))}
    </div>
  )
}

export default ShopsList
