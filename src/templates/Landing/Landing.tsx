import Header from "../../components/Header/Header"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react/dist/iconify.js"
import { AboutUsVisionAndMission } from "../../assets/images"
import {ServiceCard1, ServiceCard2} from "../../components/ServiceCard/ServiceCard"
import { mobileHeroImage, heroImage, healthCareConsulting, healthMediaManagement, medicalTourism, academy, socialBackground, newsletterBackground } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { CustomerRoutePaths } from "../../routers/customer.router"

const Landing = () => {
    
    const navigate = useNavigate()
    const imageCount = 20;

    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                {/* desktop view */}
                <div 
                    className="hidden md:block px-4 my-10 py-20 pb-40 md:px-20 w-[100%] "
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}    
                >
                    <div className="w-[50%] flex flex-col gap-10">
                        <p className="text-[#fff] text-[35px] font-bold tracking-widest">Your reliable healthcare service organisation.</p>
                        <p className="text-[#fff] text-[18px] font-bold tracking-wider">Empowering healthcare organisations with unstoppable momentum.</p>
                        <div>
                            <Button title="Explore Services" func={()=>{}}/>
                        </div>
                        
                    </div>
                </div>

                {/* mobile view */}
                <div 
                    className="md:hidden px-4 my-10 py-20 pb-[500px] w-[100%] "
                    style={{
                        backgroundImage: `url(${mobileHeroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}    
                >
                    <div className="w-full flex flex-col justify-center items-center gap-10">
                        <p className="text-[#fff] text-[7vw] sm:text-[28px] font-bold text-center tracking-widest">Your reliable healthcare service organisation.</p>
                        <p className="text-[#fff] text-[5vw] sm:text-[15px] font-bold text-center tracking-wider">Empowering healthcare organisations with unstoppable momentum.</p>
                        <div>
                            <Button title="Explore Services" func={()=>{}}/>
                        </div>
                        
                    </div>
                </div>

                <div className="px-4 p-10 md:px-20 pr-2 flex flex-col gap-8 justify-between">
                    <div className="flex gap-8 flex-col w-[100%] md:w-[60%]">
                        <p className="text-[#000] text-[22px]">Trusted by leading health organizations globally.</p>
                    </div>
                    <div className="flex gap-4 overflow-x-scroll w-[100%]">
                        {Array(imageCount).fill(null).map((_, index) => (
                            <img
                                key={index}
                                src={AboutUsVisionAndMission}
                                alt="Vision and Mission"
                                className="min-w-[200px] sm:min-w-[130px] min-h-[24px] sm:min-h-[24px] "
                            />
                        ))}
                    </div>
                </div>

                <div className="flex w-full justify-center py-[100px]"><p className="text-[#000] text-[22px]">What we have to offer</p></div>

                <div className="flex flex-col gap-12">
                    <div className="p-4 md:p-10 bg-[#CA0146]">
                        <ServiceCard1
                            title="Health Care Consulting"
                            content="We provide tailored solutions for healthcare startups, public health organizations, pharmaceutical companies, hospitals,laboratories and Health financing organisations. Our services include strategy, operations, business analytics, market access, marketing, medical writing, and health media management."
                            detailsLink=""
                            image={healthCareConsulting}
                            func={()=>navigate(CustomerRoutePaths.Customer.HealthCareConsulting)}
                        />
                    </div>
                    <div className="p-4 md:p-10 bg-[#013B7D]">
                        <ServiceCard2
                            title="Health Media Management"
                            content="Leverage the power of our extensive social media reach—connecting with nearly 100 million individuals. Our dedicated team of health communication and marketing specialists excels in building brand awareness and driving lead generation. From strategic media management to targeted advertising, we help your organization amplify its impact and grow its audience effectively."
                            detailsLink=""
                            image={healthMediaManagement}
                            buttonColor="#fff"
                            func={()=>navigate(CustomerRoutePaths.Customer.HealthMediaManagement)}
                        />
                    </div>
                    <div className="p-4 md:p-10 bg-[#EDB52A]">
                        <ServiceCard1
                            title="Medical Tourism"
                            content="Through our partnerships with leading hospitals worldwide, we connect patients with the right providers globally. Our team of medical experts ensures tailored medical management plans to meet each patient’s unique needs effectively."
                            detailsLink=""
                            fontColor="#000"
                            image={medicalTourism}
                            func={()=>navigate(CustomerRoutePaths.Customer.MedicalTourism)}
                        />
                    </div>
                    <div className="p-4 md:p-10 bg-[#64B05C]">
                        <ServiceCard2
                            title="Health Media Management"
                            content="Leverage the power of our extensive social media reach—connecting with nearly 100 million individuals. Our dedicated team of health communication and marketing specialists excels in building brand awareness and driving lead generation. From strategic media management to targeted advertising, we help your organization amplify its impact and grow its audience effectively."
                            detailsLink=""
                            image={academy}
                            fontColor="#000"
                            func={()=>navigate(CustomerRoutePaths.Customer.HealthMediaManagement)}
                        />
                    </div>
                    <div 
                        className="px-4 mt-10 py-16 md:px-20 w-[100%]  flex flex-col  gap-8 justify-center items-center"
                        style={{
                            backgroundImage: `url(${socialBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: 'rgba(219, 30, 38, 0.2)',
                            backgroundBlendMode: 'multiply', 
                        }}    
                        >
                            <p className="text-[#000] text-[22px] font-bold tracking-wider text-center">Check us out on our socials</p>
                            <div className="flex gap-8 items-center flex-wrap"> 
                                {/* Facebook */}
                                <a>
                                    <Icon
                                        icon="logos:facebook"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                                {/* Instagram */}
                                <a>
                                    <Icon
                                        icon="skill-icons:instagram"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                                {/* Twitter */}
                                <a>
                                    <Icon
                                        icon="devicon:twitter"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                                {/* LinkedIn */}
                                <a>
                                    <Icon
                                        icon="skill-icons:linkedin"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                                {/* YouTube */}
                                <a>
                                    <Icon
                                        icon="logos:youtube-icon"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                                {/* WhatsApp */}
                                <a>
                                    <Icon
                                        icon="logos:whatsapp-icon"
                                        width={40}
                                        color="white"
                                    />
                                </a>
                            </div>
                    </div>
                    <div 
                        className="px-4 mt-10 py-20 pb-40 md:px-20 w-[100%]  flex flex-col gap-4 justify-center items-center"
                        style={{
                            backgroundImage: `url(${newsletterBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}    
                    >
                        <p className="text-[#fff] text-[26px] font-bold tracking-wider">Never miss a story</p>
                        <p className="text-[#fff] text-[18px] font-light tracking-wider text-center">Get our Weekly recap with the latest news, articles and resources.</p>
                        <div className="flex mt-10 flex-col gap-1 w-[100%] items-center justify-center">
                            <div className="w-[90%] md:w-[60%] items-start">
                                <p className="text-white">Subscribe to our Newsletters</p>
                                <div className="flex flex-col sm:flex-row gap-4 w-[100%] justify-center">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="p-2 w-[90%]"
                                    />
                                    <div className="w-fit">
                                        <Button icon="fontisto:email" title="Subscribe" func={()=>console.log("sunscribe")}/>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Landing;