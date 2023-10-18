import React from "react"
import small_logo from "../images/Logo .svg"

const Footer = () => {
    return(
        <footer className="">
        
            <section>
                <div>
                <h3>Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact us</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +00 123 456 789</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
            
            </div>
        </footer>
    )
}

export default Footer;