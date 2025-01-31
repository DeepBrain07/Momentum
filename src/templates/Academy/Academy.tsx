
import Header from "../../components/Header/Header"
import { academy2, graduate, nurse, cholesterol, image3, image4 } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"

const Academy = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[80%]">
                        
                        <p className="text-[#64B05C] -tracking-wider">Academy</p>
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Empowering healthcare leaders</p>
                        <p className="text-bodyText -tracking-wider">We offer mentorship and staffing solutions for healthcare professionals and organizations, along with access to affordable university admissions for aspiring healthcare talents. Partner with us to build a stronger, more skilled healthcare workforce.</p>
                        <div className="flex gap-4">
                            <Button title="Apply Now" func={()=>{}}/>
                            <Button title="Read Brochure" secondary={true} func={()=>{}}/>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={academy2} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                    <div className="flex justify-center px-[2%] sm:px-[10%] flex-col items-center gap-8">
                        <p className="text-bodyText text-center -tracking-wider">Momentum Academy is dedicated to empowering healthcare professionals and students with the skills, knowledge, and mentorship they need to excel. Through expert-led programs and practical training, we prepare individuals to thrive in a fast-evolving industry.
                        <br/>Whether you're advancing your career, seeking mentorship, or exploring global healthcare opportunities, Momentum Academy provides the tools and support to help you succeed. Together, we’re shaping the future of healthcare excellence.</p>
                        <div>
                            <Button title="Read Our Brochure" func={()=>{}}/>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className={`text-bodyTextColor text-[16px] font-bold tracking-wide`}>Shaping skilled professionals for a healthier tomorrow.</p>
                            <p className={`text-bodyTextColor text-[22px] font-bold tracking-wider`}>Recruiting and Training of health professionals</p>
                            <p className={`text-bodyTextColor text-[16px] font-light tracking-wide`}>We equip healthcare professionals with the skills and training needed to thrive in today’s evolving healthcare industry.
                                <br/>From tailored workshops to hands-on training, we prepare individuals to meet the demands of the ever-evolving healthcare industry.</p>
                            <div className=""> 
                                
                                <Button title="Apply Now" func={()=>{}} />
                            </div>
                        </div>
                        <img src={nurse} alt="megaphone" className="rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[350px]"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <img src={graduate} alt="megaphone" className="rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[320px]"/>
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className={`text-bodyTextColor text-[16px] font-bold tracking-wide`}>We care about the next set of health care proffessionals</p>
                            <p className={`text-bodyTextColor text-[22px] font-bold tracking-wider`}>Foreign university admissions for healthcare students</p>
                            <p className={`text-bodyTextColor text-[16px] font-light tracking-wide`}>We equip healthcare professionals with the skills and training needed to thrive in today’s evolving healthcare industry.
                                <br/>From tailored workshops to hands-on training, we prepare individuals to meet the demands of the ever-evolving healthcare industry.</p>
                            <div className=""> 
                                <Button title="Contact Us" func={()=>{}} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col justify-center items-center gap-14 ">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Articles </p>
                        <p className="text-[#000] text-[18px] font-light tracking-wide text-center">Here are some articles that would help you from our mentors & academy </p>
                    </div>
                    <div className="flex w-[90%] sm:w-[100%] justify-center flex-col sm:flex-row gap-10">
                        <div className="w-[100%] flex flex-col justify-start gap-4 sm:gap-2 rounded-md  ">
                                <img src={cholesterol} alt="cholesterol" className="w-[90%] md:w-[250px] h-[130px] rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>
                                <div><Button title="Read Article" func={()=>{}}/></div>                 
                            </div>
                            <div className="w-[100%] flex flex-col justify-start  gap-2 rounded-md">
                                <img src={image3} alt="cholesterol" className="w-[90%] md:w-[250px] items-center h-[130px]  rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                                <div><Button title="Read Article" func={()=>{}}/></div>
                            </div>
                            <div className="w-[100%] flex flex-col justify-start gap-2 rounded-md">
                                <img src={image3} alt="cholesterol" className="w-[90%] md:w-[250px] items-center h-[130px]  rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                                <div><Button title="Read Article" func={()=>{}}/></div>
                            </div>
                            <div className="w-[100%] flex flex-col justify-start gap-2 rounded-md ">
                                <img src={image4} alt="cholesterol" className="w-[90%] md:w-[250px] h-[130px] rounded-lg"/>
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000] text-[20px] font-bold tracking-normal">The Relationship Between Alcohol And Cholesterol Levels</p>
                                    <p className={` text-[14px] font-light `}>By Shalom Ngbala-Okpab </p>
                                    <p className={` text-[14px] font-light `}>Posted on September 1, 2022</p>
                                </div>                            
                                <div><Button title="Read Article" func={()=>{}}/></div>
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

export default Academy;