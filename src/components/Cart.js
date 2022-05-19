import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { BiRupee} from "react-icons/bi";
import productsapi from "../api";


const Cart = () =>{
    return(
        <div className="cart_section">
            <div className="cart_heading">
                <h2>Cart</h2>
            </div>

            {
                productsapi.map((res) =>{
                    return(

                <div className="cart_container">
                    <div className="items">
                        <div className="cart_img">
                            <img src={res.images} alt="pizza" />
                            <div className="cart_item_name">
                                <h4>{res.name}</h4>
                                <div className="cart_item_price">
                                    <h2><BiRupee/>{res.price}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="cart_content">
                            <div className="cart_item_size">
                                <select name="" id="">
                                    <option value="">Select</option>
                                    <option value="">350g</option>
                                    <option value="">650g</option>
                                    <option value="">1kg</option>
                                </select>
                            </div>
                            <div className="cart_item_btn">
                                <button style={{borderRadius: '15px 0 0 15px'}}> <AiOutlineMinus style={{color: 'white'}}/> </button>
                                <span>0</span>
                                <button style={{borderRadius: '0 15px 15px 0'}}><AiOutlinePlus style={{color: 'white'}}/></button>
                            </div>
                            <div className="cart_item_remove">
                                <button>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }
            <div className="cart_total_section">
                <div className="center_total">
                    <h2>Total </h2>
                    <h2><BiRupee/> 3400</h2>
                </div>
            </div>
        </div>
    )
}

export default Cart;