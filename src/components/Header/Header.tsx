import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import './style.css'
import { momentumLogo } from "../../assets/images";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [route, setRoute] = useState<any>(null)
    const [sidebarOpen, setSidebarOpen] = useState(false) // New state variable

    const handleSearch = () => {
        console.log("clicked")
    }

    const handleToggleSidebar = () => { // New function to toggle sidebar
        setSidebarOpen(!sidebarOpen)
    }

    const location = useLocation();

    useEffect(() => {
        const currentRoute = location.pathname;
        setRoute(currentRoute)
    }, [location]);

    return (
        <div className="w-[100%] bg-white py-6 flex justify-between items-center relative">
            <div >
                <img src={momentumLogo} alt="Momentum logo" className="w-[35vw] md:w-[200px] h-[55px]"/>
            </div>
            <div className="hidden md:flex items-center gap-4">
                <Link to="/about-us"><p className={`${route === '/about-us' ? 'border-b-2 border-primary' : ''}`}>About Us</p></Link>
                <Link to="/articles"><p className={`${route === '/articles' ? 'border-b-2 border-primary' : ''}`}>Articles</p></Link>
                <Link to="/services"><p className={`${route === '/services' ? 'border-b-2 border-primary' : ''}`}>Services</p></Link>
                <Link to="/careers"><p className={`${route === '/careers' ? 'border-b-2 border-primary' : ''}`}>Careers</p></Link>
                <Link to="/contact-us"><p className={`${route === '/contact-us' ? 'border-b-2 border-primary' : ''}`}>Contact Us</p></Link>
                <Button icon="material-symbols-light:search" title={"Search articles"} func={handleSearch}/>
            </div>
            <div className="flex md:hidden" onClick={handleToggleSidebar}>
                {!sidebarOpen ?
                    <Icon
                        icon={"pajamas:hamburger"}
                        width={24}
                        color="#013B7D"
                    /> :
                    <Icon
                        icon={"basil:cancel-outline"}
                        width={44}
                        color="#013B7D"
                    />
                }
            </div>
            {sidebarOpen && (
                <div className="md:hidden absolute flex flex-col gap-4 top-0 left-[0px] w-[70%] h-screen bg-white shadow-md p-4">
                    <Link to="/about-us"><p className={`${route === '/about-us' ? 'border-b-2 border-primary' : ''} w-fit`}>About Us</p></Link>
                    <Link to="/articles"><p className={`${route === '/articles' ? 'border-b-2 border-primary' : ''} w-fit`}>Articles</p></Link>
                    <Link to="/services"><p className={`${route === '/services' ? 'border-b-2 border-primary' : ''} w-fit`}>Services</p></Link>
                    <Link to="/careers"><p className={`${route === '/careers' ? 'border-b-2 border-primary' : ''} w-fit`}>Careers</p></Link>
                    <Link to="/contact-us"><p className={`${route === '/contact-us' ? 'border-b-2 border-primary' : ''} w-fit`}>Contact Us</p></Link>
                </div>
            )}
        </div>
    )
}

export default Header;