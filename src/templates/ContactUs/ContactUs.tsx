import Header from "../../components/Header/Header"
import { contactUs } from "../../assets/images"
import { Icon } from "@iconify/react/dist/iconify.js"
import './style.css'

import Footer from "../../components/Footer/Footer"
import { JoinUs } from "../../assets/images"
import Button from "../../components/Button/Button"

const ContactUs = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[80%]">
                        <p className="text-tertiary text-[26px] md:text-[55px]">We’re Here to Help</p>
                        <p className="text-bodyText">Got a question, feedback, or need assistance? Reach out to us anytime, and we’ll get back to you as soon as possible.</p>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={contactUs} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                </div>

                <div className="p-4 md:p-10 gap-8 flex flex-col md:flex-row">
                    <div>
                        <div className="mt-8 shadow-md flex gap-[10%]  justify-center sm:justify-normal items-center bg-white p-1 sm:p-4 md:pr-12 rounded-md">
                            <div className="sm:w-[45px] flex justify-center items-center bg-[#B2CDEB] p-2 sm:h-[45px] rounded-[50%]">
                                <Icon
                                    icon="ion:mail"
                                    width={26}
                                    color="#013B7D"
                                />
                            </div>
                            <div>
                                <p className="text-[#000]  text-bold sm:text-[22px] contactUs">Send us a mail</p>
                                <p className="text-[#000]  text-bold sm:text-[18px] contactUs2 hidden">Send mail</p>
                                <p className="text-bodyText  sm:text-[18px] contactUs">Contact@Momentum.com</p>            
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[100%] flex-col p-4 gap-6 bg-white shadow-md rounded-md">    
                        <p className="text-[#000]  font-bold sm:text-[26px]">Send us a message</p>
                        <p className="text-bodyText text-[15px] md:text-[18px]">Need assistance or have a question? Fill out the form below or drop us a message, and we’ll be in touch shortly.</p>     
                        <div className="mt-10 w-[100%] flex flex-col md:flex-row gap-6 md:gap-[2%]">
                            <div className="w-[100%] md:w-[49%]">
                                <p className="textStyle mb-1">First Name</p>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="w-[100%] p-2 border border-[#CBD5E1] rounded-md"
                                />
                            </div>
                            <div className="w-[100%] md:w-[49%]">
                                <p className="textStyle mb-1">Last Name</p>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="w-[100%] p-2 border border-[#CBD5E1] rounded-md"
                                />
                            </div>
                        </div>
                        <div className="w-[100%]">
                            <p className="textStyle mb-1">Email Address</p>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-[100%] p-2 border border-[#CBD5E1] rounded-md"
                            />
                        </div>
                        <div className="w-[100%]">
                            <p className="textStyle mb-1">Comment or Message</p>
                            <textarea 
                                className="w-full p-2 border border-gray-400 rounded"
                                placeholder="Type your message..."
                                rows={5}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button title="Send Message" func={()=>{}}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div 
                        className="px-4 mt-10 py-32 md:px-20 w-[100%]  flex flex-col gap-2 justify-center items-center"
                        style={{
                            backgroundImage: `url(${JoinUs})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}    
                    >
                        <div className="md:w-[70%] flex justify-center items-center flex-col">
                            <p className="text-white font-bold text-[28px] tracking-wide text-center">Join Us on Your Journey to Better Health</p>
                            <p className="text-white text-[16px] font-normal tracking-wider text-center">
                                Discover trusted advice, expert insights, and practical tips to help you make informed decisions for a healthier, happier life.
                            </p>
                        </div>
                        <div className="flex gap-2 sm:gap-4 w-[100%] flex-wrap items-center justify-center mt-4">
                            <Button title="Sign Up for our Newsletter" func={()=>{}} secondary={true}/>
                            <Button title="Explore Topics Now" func={()=>{}}/>
                        </div>
                    </div>
                    <div className="w-[100%] flex">
                        <div className="w-[25%] h-[15px] bg-[#CA0146]"></div>
                        <div className="w-[25%] h-[15px] bg-primary"></div>
                        <div className="w-[25%] h-[15px] bg-[#EDB52A]"></div>
                        <div className="w-[25%] h-[15px] bg-[#64B05C]"></div>
                    </div>
                </div>

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;