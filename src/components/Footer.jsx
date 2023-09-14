import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"

const Footer = () => {

    const location = useLocation();

    // Checking if it is the admin page to hide the navbar
    const isItAdminPage = location.pathname.includes("admin");

    return (
        <footer className={`py-16 px-10 lg:px-24 lg:py-16 bg-secondary relative ${isItAdminPage && 'hidden'}`}>
            <div className="md:grid md:grid-cols-3 gap-2 lg:gap-5">
                <div className="md:mb-0 mb-8">
                    <h3 className="headerBorder text-white text-2xl font-bold mb-4 tracking-widest">rmh</h3>
                    <p className="lightgreyParagraph text-xs lg:text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus doloremque hic et modi animi ad blanditiis quidem vero cupiditate maiores dolore expedita non fugiat error labore quam deserunt, totam possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit aspernatur maxime, nam magni et vitae voluptatum labore ab ratione?
                    </p>
                    <div className="flex gap-5 mt-4">
                        <div className="socialLinks">
                            <span><FaFacebookF className="icon" /></span>
                        </div>

                        <div className="socialLinks">
                            <span><FaTwitter className="icon" /></span>
                        </div>

                        <div className="socialLinks">
                            <span><FaInstagram className="icon" /></span>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center md:mb-0 mb-8">
                    <div className="inline">
                        <h4 className="text-lg text-white mb-6 md:text-center">Quick Links</h4>
                        <ul className="lightgreyParagraph text-sm inline">
                            <li className="footerLink"><Link to="/">Home</Link></li>
                            <li className="footerLink"><Link to="/programmes">Programmes</Link></li>
                            <li className="footerLink"><Link to="/about">About us</Link></li>
                            <li className="footerLink"><Link to="#">Contact us</Link></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg text-white mb-6">Contact Us</h4>
                    <p className="lightgreyParagraph text-xs lg:text-sm mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus doloremque hic et modi animi ad blanditiis quidem vero cupiditate maiores dolore expedita non fugiat error labore quam deserunt, totam possimus!
                    </p>
                    <p className="lightgreyParagraph text-xs lg:text-sm mb-2"><span><FaPhone className="icon text-lg" /></span> 08090000000</p>
                    <p className="lightgreyParagraph text-xs lg:text-sm"><span><AiFillMail className="icon text-lg" /></span> info@gmail.com</p>
                </div>
            </div>
            <img src="/img/dashed circle.png" className="absolute right-0 bottom-0" alt="dashed circle" style={{height: "100px", width: "80px"}} />
        </footer>
    )
}

export default Footer;