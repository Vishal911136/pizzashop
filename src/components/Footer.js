import { Link } from "react-router-dom"
import { CgMail } from "react-icons/cg";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = ()=>{
    const date = new Date();
    return(
        <footer style={{marginTop: '20'}}> <br />
            <div className="footer_section">
                <div className="footer_content">
                    <Link to="/">ABOUT US</Link>
                    <Link to="/">HELP & SUPPORT</Link>
                    <Link to="/">CONTACT US</Link>
                </div>
                <div className="footer_content">
                    <Link to="/">OFFER</Link>
                    <Link to="/">BLOG</Link>
                    <Link to="/">DISCLAIMERS</Link>
                </div>
                <div className="footer_content">
                    <Link to="/">DELIVERY POLICIES</Link>
                    <Link to="/">PRIVACY POLICIES</Link>
                    <Link to="/">REFER & EARN</Link>
                </div>
            </div>
            <div className="icon_content">
                <Link to="#" target="_self" className="target"><CgMail/></Link>
                <Link to="#" target="_self" className="target"><ImFacebook/></Link>
                <Link to="#" target="_self" className="target"><BsInstagram/></Link>
                <Link to="#" target="_self" className="target"><BsWhatsapp/></Link>
            </div>
            <div className="" style={{fontSize: '18px', textAlign:'center',padding: '10px 0 20px 0'}}>
                <p>Copyright© {date.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer