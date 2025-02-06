import { Icon } from "@iconify/react/dist/iconify.js"
import Header from "../../components/Header/Header"
import { healthMediaManagement2, whatWeCanOffer, cholesterol, image2, image3, image4} from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { megaphone } from "../../assets/images"

const HealthMediaManagement = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[80%]">
                        
                        <p className="text-primary -tracking-wider">Healthcare Media Management</p>
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Amplifying brand awareness and lead generation</p>
                        <p className="text-bodyText -tracking-wider">We craft strategic health media campaigns that educate, engage, and inspire audiences amplifying brand awareness and lead generation. From content creation to digital marketing, we connect healthcare providers with the people who need them most.</p>
                        <div>
                            <Button title="Book our service today" func={()=>{}}/>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={healthMediaManagement2} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4 bg-white">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className={`text-bodyTextColor text-[16px] font-bold tracking-wide`}>We have number to back up our claims</p>
                            <p className={`text-bodyTextColor text-[22px] font-bold tracking-wider`}>Our online presence</p>
                            <p className={`text-bodyTextColor text-[16px] font-light tracking-wide`}>We craft strategic health media campaigns that educate, engage, and inspire audiences amplifying brand awareness and lead generation. From content creation to digital marketing, we connect healthcare providers with the people who need them most.</p>
                            <div className="flex flex-col w-[100%] gap-10 items-center flex-wrap"> 
                                <div className="flex gap-[20vw] md:gap-36 w-[100%] justify-center">   
                                    {/* Facebook */}
                                    <a href="">
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
                                </div>
                                <div className="flex gap-[20vw] md:gap-36 w-[100%] justify-center">
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
                                </div>
                                <div className="flex gap-[20vw] md:gap-36 w-[100%] justify-center">
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
                            <div>
                                <Button title="Book our service today" func={()=>{}} />
                            </div>
                        </div>
                        <img src={megaphone} alt="megaphone" className="rounded-md w-[90%] md:w-[32%] h-[300px] md:h-[400px]"/>
                        
                    </div>
                </div>

                <div className="px-4 mt-10 py-8 md:px-20 w-[100%] flex flex-col gap-2 bg-primary">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <img src={whatWeCanOffer} alt="servide image" className="rounded-md w-[90%] md:w-[32%] h-[300px] md:h-[350px]"/>
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className={`text-white text-[22px] font-bold tracking-wider`}>What we can offer you</p>
                            <ul className="list-disc space-y-2">
                                <li className="ml-4 text-white"><p className={`text-white text-[16px] font-light tracking-wide`}>Social Media Management</p></li>
                                <li className="ml-4 text-white"><p className={`text-white text-[16px] font-light tracking-wide`}>Digital media marketing campaigns</p></li>
                                <li className="ml-4 text-white"><p className={`text-white text-[16px] font-light tracking-wide`}>Website development and Management</p></li>
                                <li className="ml-4 text-white"><p className={`text-white text-[16px] font-light tracking-wide`}>Content Creation</p></li>
                                <li className="ml-4 text-white"><p className={`text-white text-[16px] font-light tracking-wide`}>Website development & Management</p></li>
                            </ul>
                            <div>
                                <Button title="View Details" func={()=>{}} color="white"/>
                            </div>
                        </div>            
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-8  bg-[#FFECE8]">
                    <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Some materials to help you  </p>
                    <div className="w-[100%] flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex w-[90%] md:w-[52%] flex-col gap-4">
                            <div className="w-[100%] flex flex-col justify-start md:flex-row gap-4 md:gap-2 rounded-md  ">
                                <img src={image2} alt="cholesterol" className="w-[90%] md:w-[250px] h-[130px] rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                            </div>
                            <div className="w-[100%] flex flex-col justify-start md:flex-row gap-2 rounded-md">
                                <img src={image3} alt="cholesterol" className="w-[90%] md:w-[250px] items-center h-[130px]  rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                            </div>
                            <div className="w-[100%] flex flex-col justify-start md:flex-row gap-2 rounded-md ">
                                <img src={image4} alt="cholesterol" className="w-[90%] md:w-[250px] h-[130px] rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                            </div>
                        </div>
                        <div className="w-[100%] md:w-[45%] flex flex-col gap-4 rounded-md">
                            <img src={cholesterol} alt="cholesterol" className="w-[100%] h-[170px] rounded-lg"/>
                            <p className="text-[#000] text-[20px] font-bold tracking-wide">The Relationship Between Alcohol And Cholesterol Levels</p>
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

export default HealthMediaManagement;