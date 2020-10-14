import React from "react";
import "./Home.css";
import Product from "./Product";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {

  const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 200,
    arrows: true,
    infinite: true,
    // indicators: i => <div className="indicator">{i + 1}</div>
};

  const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gaming/GW/1500x600-NP._CB432269252_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Storage/September/New/3_samsung_Tab_A-10.1_Coming-soon_Tollhero_1500x600_23rdSept-New._CB404319162_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/8T/GW/24/V252166690_Rush-Wireless-OnePlus_8T_Tall_hero_1500x600._CB404348067_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/September/1500x600_GW_Cameras--Accessories._CB404323678_.jpg"
  ];

  return (  
    <div className="home">
      <div className="home__container">
        {/*<img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />*/}

        <Slide {...properties}>
          {slideImages.map((each, index) => (
          //   <div key={index} className="each-slide">
            <img key={index} className='home__image' src={each} alt="sample" />
        
          ))}
        </Slide>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={20.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={700.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={10000.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3000.00}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={99999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={9500.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;