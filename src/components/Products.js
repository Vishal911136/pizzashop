// import { useState } from "react";
import { BiRupee, BiPlus } from "react-icons/bi";
import productsapi from "../api";
import { Link } from "react-router-dom";


const Products = () =>{
    
    
    return(
        <div className="product_section">

        {
            productsapi.map((res) => {
               return(
                    <Link to={`/products/${res.id}`} key={res.id} style={{textDecoration: 'none'}}>    
                        <div className="product_card">
                            <div className="product_img">
                                <img src={res.images} alt="pizza" />
                            </div>
                            <div className="product_content">
                                <h3>{res.name}</h3>
                                <p className="product_desc">
                                    {res.description.length>70?`${res.description.slice(0,58)}...`:res.description}
                                </p>
                                <div className="product_price">
                                    <h3><BiRupee style={{fontSize: '15'}}/>{res.price}</h3>
                                    <button>Add <BiPlus/></button>
                                </div>
                            </div>
                        </div>
                    </Link>
               )    
            })
        }   
        </div>
    )
}

export default Products;