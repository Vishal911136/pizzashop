import { useState } from "react";
import { BiRupee, BiArrowBack} from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import productsapi from "../api";

const SingleProduct = (props) =>{
    const param = useParams()
    const param_id = param._id;
    const [product,setProduct] = useState(param_id);
    // console.log(product)
    const navigate = useNavigate();

    return(
        <>
        <div className="backbtn">
            <button onClick={() => navigate("/products")}>
                <BiArrowBack/>
            </button>
        </div>
        {
            productsapi.filter(filterRes => filterRes.id === Number(product)).map(res => {
                return(
                    <div key={res.id}>
                    <div className="single_product_container">
                        <div className="single_product_img">
                            <img src={res.images} alt="pizza" />
                        </div>

                        <div className="single_product_content">
                            <h3>{res.name}</h3>
                            <p>{res.description}</p>
                            <h4><BiRupee style={{fontSize: '18px'}}/>{res.price}</h4>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    </div>
                )
            })
        }
            {/* <div className="single_product_img">
                <img src="/images/pizza1.png" alt="pizza" />
            </div>

            <div className="single_product_content">
                <h3>DELHI STREET PIZZA</h3>
                <p>A crust loaded with cheese & our speacial sauce (cheese lover only)</p>
                <h4><BiRupee style={{fontSize: '18px'}}/>4545</h4>
                <button onClick={() =>{
                    console.log("or kuchh")
                    console.log(product)
                }}>Add To Cart</button>
            </div> */}
        </>
    )
}
export default SingleProduct;