import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { momentumLogo } from "../../assets/images";
import './style.css'

const Footer = () => {
    return (
        <div className="flex w-[100%] mt-[100px] gap-10   flex-col md:flex-row items-start ">
            <div className="mb-10">
                <img src={momentumLogo} alt="Momentum logo" className="w-[70%] sm:w-[300px] "/>
            </div>
            <div className="flex w-[100%] gap:10 flex-wrap ml-4 flex-col md:flex-row items-start justify-between">
                <div className="flex mb-10 flex-col gap-4">
                    <div className="border-b-2 border-[#000] w-fit pr-2 "><p className="font-bold tracking-wide text-[20px] text-[#0d0d0d]">Discover</p></div>
                    <Link to="/healthcare-consulting"><p>Health Care Consulting</p></Link>
                    <Link to="/healthmedia-management"><p>Health Media Management</p></Link>
                    <Link to="/medical-tourism"><p>Medical Tourism</p></Link>
                    <Link to="/academy"><p>Academy</p></Link>
                </div>
                
                <div className="flex mb-10 flex-col gap-4">
                    <div className="border-b-2 border-[#000] w-fit pr-2 "><p className="font-bold tracking-wide text-[20px] text-[#0d0d0d]">Discover</p></div>
                    <Link to="/about-us"><p>About Us</p></Link>
                    <Link to="/careers"><p>Careers</p></Link>
                    <Link to="/contact-us"><p>Contact Us</p></Link>
                </div>
            
                <div className="flex mb-10 flex-col gap-4">
                    <div className="border-b-2 border-[#000] w-fit pr-2 "><p className="font-bold sm:tracking-wide text-[6vw] sm:text-[20px] text-[#0d0d0d]">Get in touch</p></div>
                    <p className="sm:tracking-wide text-[4vw] sm:text-[20px]">Get the latest articles in your email</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="p-2"
                    />
                    <div className="w-fit">
                        <Button icon="fontisto:email" title="Subscribe" func={()=>console.log("sunscribe")}/>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Footer;