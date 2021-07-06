import React from "react"
import "./StaggeredCard.css"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import { LazyLoadImage } from "react-lazy-load-image-component"
import TimerIcon from "@material-ui/icons/Timer"
import { Link } from "gatsby"

import "react-lazy-load-image-component/src/effects/blur.css"

const styles = {
  pin: {
    margin: "2px 2px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "white",
    position: "relative",
  },
  Small: {
    gridRowEnd: "span 15",
  },
  Medium: {
    gridRowEnd: "span 20",
  },
  Large: {
    gridRowEnd: "span 30",
  },
}

const StaggeredCard = ({ shop, Size }) => {
  return (
    <div
      style={{
        ...styles.pin,
        ...styles[Size],
      }}
    >
      <div className={`cardImageContainer${Size}`}>
        <Link to="/shop" state={{ shop: shop }}>
          <LazyLoadImage
            placeholder={<span>tite</span>}
            effect="blur"
            className="cardBanner"
            src={shop.banner}
            alt={shop.name}
            threshold = {10}
          />
        </Link>
      </div>
      <div className="cardDetails">
        <Link to="/shop">
          <img
            className="cardLogo"
            width={100}
            height={200}
            src={shop.logo}
            alt={shop.name}
          />
        </Link>
        <div className="cardTitle">
          <div className="partOne">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <LocationOnIcon fontSize="small" />
              5.0 km
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <TimerIcon fontSize="small" />
              45 min
            </div>
          </div>
          <div className="partTwo">{150} Delivery Fee</div>
        </div>
      </div>
    </div>
  )
}

export default StaggeredCard
