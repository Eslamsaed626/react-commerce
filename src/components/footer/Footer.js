import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_big.png'
import insta from '../../assets/instagram_icon.png'
import pinterset from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo}></img>
                <p>SHOPER</p>

            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={insta}></img>
                </div>
                <div className='footer-icons-container'>
                    <img src={pinterset}></img>

                </div>
                <div className='footer-icons-container'>

                    <img src={whatsapp}></img>
                </div>
            </div>

            <div className='footer-copyright'>
                <hr></hr>
                <p>Copyright @2025 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
