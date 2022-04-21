import React from 'react';
import './Footer.css';
import logo2 from '../../images/logo2.png';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='container bg-black'>
            <div className="footer-container">
                <div>
                    <img src={logo2} alt="" />
                    <p>copyright &copy; {currentYear} Mirajul Alam Alif</p>
                </div>
                <div className='footer-container'>
                    <div>
                        <p><small>About online food</small></p>
                        <p><small>About online food</small></p>
                        <p><small>About online food</small></p>
                        <p><small>About online food</small></p>

                    </div>
                    <div>
                        <p><small>About online food2</small></p>
                        <p><small>About online food</small></p>
                        <p><small>About online food</small></p>
                        <p><small>About online food</small></p>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Footer;