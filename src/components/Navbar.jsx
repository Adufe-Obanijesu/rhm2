import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Importing Icons
import { MdMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {

    const location = useLocation();

    // Checking if it is the admin page to hide the navbar
    const isItAdminPage = location.pathname.includes("admin");

    const [toggleNavigation, setToggleNavigation] = useState(false);

    const toggle = () => {
        setToggleNavigation(!toggleNavigation);
    };

    return (
        <nav className={`relative md:sticky w-full flex justify-center ${toggleNavigation && 'bg-lightSecondary'} md:bg-white relative mt-2 md:mt-0 ${isItAdminPage && 'hidden'}`}>
            <div className={`md:hidden inline ${toggleNavigation && 'hidden'}`}>
                <Link to="/"><img src="/logo.png" alt="logo" style={{height: "65px", width: "100%"}} /></Link>
            </div>
            <div className="md:hidden absolute right-2">
                <MdMenu
                onClick={toggle}
                className="self-end my-5 text-4xl mr-4 cursor-pointer text-black hover:text-primary"
                />
            </div>
            
            <div className={`justify-between items-center py-6 px-12 fixed right-0 top-0 h-screen bg-gray-200 opacity-1 z-30 ${!toggleNavigation && 'hidden'} md:hidden`}>
                <div className="flex justify-end">
                    <FaTimes className="text-4xl" onClick={() => setToggleNavigation(false)} />
                </div>
                <div>
                    <ul className="mt-20">
                        <Link to="/"><li className="transitionItem py-4 uppercase font-opensans font-semibold px-3 hover:bg-primary hover:text-white rounded-full text-sm" onClick={() => setToggleNavigation(false)}>homepage</li></Link>
                        <Link to="/programmes"><li className="transitionItem py-4 uppercase font-opensans font-semibold px-3 hover:bg-primary hover:text-white rounded-full text-sm" onClick={() => setToggleNavigation(false)}>programmes</li></Link>
                        <Link to="/about"><li className="transitionItem py-4 uppercase font-opensans font-semibold px-3 hover:bg-primary hover:text-white rounded-full text-sm" onClick={() => setToggleNavigation(false)}>about</li></Link>
                        <Link to="/contact"><li className="transitionItem py-4 uppercase font-opensans font-semibold px-3 hover:bg-primary hover:text-white rounded-full text-sm" onClick={() => setToggleNavigation(false)}>contact us</li></Link>
                    </ul>
                </div>
                
            </div>

            <div className={`md:flex py-6 w-full lg:px-32 md:px-12 hidden`}>
                <div className="w-full">
                    <ul className="w-full md:flex justify-between items-center">
                        <div>
                            <Link to="/"><img src="/logo.png" alt="logo" style={{height: "65px", width: "100%"}} /></Link>
                        </div>
                        <div className="md:flex items-center">
                            <Link to="/"><li className="navLinks transitionItem">homepage</li></Link>
                            <Link to="/programmes"><li className="navLinks transitionItem">programmes</li></Link>
                            <Link to="/about"><li className="navLinks transitionItem">about</li></Link>
                            <Link to="/contact"><li className="navLinks transitionItem">contact us</li></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;