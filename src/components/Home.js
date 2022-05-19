import { BsArrowRightShort } from "react-icons/bs";
const Home = () =>{
    return(
        <>
        <div className="cover_card">
            <div className="coverphoto_text">
                <h5>Are You Hungry!</h5>
                <h2>Don't Wait</h2>
                <button>Order Now <BsArrowRightShort/> </button>
            </div>

            <div className="cover_card_img">
                <img src="images/pizza1.png" alt="pizza"/>
            </div>
        </div>

        <div className="home_offer_section">
            <h2> Our Most Popular Deals</h2>
            
            <div className="offer_img_section">
                <div className="offer_img1">
                    <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one.0607352b2160a25a415a9f1985cc6d4f.1.jpg" alt="" />
                </div>
                <div className="offer_img2">
                    <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal-san-francisco-style-meal-for-2.9347899b074e3f11e79698d056356262.1.jpg" alt="" />
                </div>
            </div>
        </div>

        <div className="order_offer_section">
            <h2>Order Now</h2>
            <div className="order_offer_container">
                <img src="https://assets.box8.co.in/square/web/category/110" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/117" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/209" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/126" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/35" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/56" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/58" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/60" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/62" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/80" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/81" alt="" />
                <img src="https://assets.box8.co.in/square/web/category/27" alt="" />
            </div>
        </div>
        </>
    )
}

export default Home;