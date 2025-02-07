import Header from "../../components/Header/Header"
import TeamMemberComponent from "../../components/TeamMemberCard/TeamMemberCard"
import { cholesterol, avatar, JoinUs, image2, image3, image4, healthcareConsulting1, whyChooseUs, whyChooseUsMobile, marketing, businessAnalytics, strategy, medicalWriting } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { CareerCard2 } from "../../components/CareerCard/CareerCard"
import { useNavigate } from "react-router-dom"
import { CustomerRoutePaths } from "../../routers/customer.router"
import { useState } from "react"
import { handleSubscribe } from "../../hooks/HandleSubscribe"
import Modal from "../../components/Modal/Modal"

const HealthCareConsulting = () => {

    
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
                    <div className="flex flex-col gap-4">
                        <p className="text-[#000]  font-bold sm:text-[20px]">Enter your email to subscribe for our Newsletter</p>
                        <div className="w-[100%]">
                            <p className="text-[15px] mb-1">Email Address</p>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-[100%] p-2 border border-[#CBD5E1] rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button title="Register" func={() => handleSubscribe(email, setEmail)}/> 
                        </div>
                    </div>
                </Modal>
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[80%]">
                        
                        <p className="text-[#CA0146] -tracking-wider">Healthcare Consulting</p>
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Transforming Healthcare,<br/> One Solution at a Time</p>
                        <p className="text-bodyText -tracking-wider">We provide tailored consulting services to help healthcare organizations improve efficiency, enhance patient care, and achieve lasting growth.</p>
                        <div>
                            <a href="https://wa.me/+4915218122588"><Button title="Schedule a Consultation" func={()=>{}}/></a>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={healthcareConsulting1} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4 bg-white">
                    <p className="text-[#000] text-[15px] font-bold">Our Expertise, Your Advantage</p>
                    <p className="text-[#000] text-[28px] font-bold tracking-wide">What We Offer</p>
                    <div className="flex flex-wrap gap-8 justify-center items-center">
                        <CareerCard2 
                            title="Strategy and Operations" 
                            content="Optimizing processes, aligning organizational goals, and implementing innovative solutions to improve efficiency, patient outcomes, and overall performance."
                            image={strategy}
                        />
                        <CareerCard2 
                            title="Business analytics" 
                            content="leverages business analytics to transform data into actionable insights, enabling informed decision-making, improving operational efficiency, and driving strategic growth in the healthcare sector."
                            image={businessAnalytics}
                        />
                        <CareerCard2 
                            title="Marketing" 
                            content="We craft targeted marketing strategies to increase brand visibility, engage audiences, and drive patient or client acquisition in the competitive healthcare landscape."
                            image={marketing}
                        />
                        <CareerCard2 
                            title="Medical Writing" 
                            content=" We provide high-quality, accurate, and compliant medical content to support clinical and healthcare communications, regulatory submissions, and patient education."
                            image={medicalWriting}
                        />
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-2">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <div className="w-[90%] md:w-[40s%] flex flex-col gap-4">
                            <p className="text-[#000] text-[15px] font-bold">Your Partner in Healthcare Excellence</p>
                            <p className="text-[#000] text-[28px] font-bold tracking-wide">Why Partner with us</p>
                            <p className={` text-[16px] font-light tracking-wide`}>Partnering with us ensures innovative solutions, expert guidance, and proven strategies to help you achieve your goals, optimize operations, and stay ahead in the dynamic healthcare landscape.</p>
        
                        </div>
                        <img src={whyChooseUs} alt="servide image" className="hidden md:block rounded-md w-[90%] md:w-[40%] h-[300px] md:h-[400px]"/>
                        <img src={whyChooseUsMobile} alt="servide image" className="md:hidden rounded-md w-[90%] md:w-[50%] h-[300px] md:h-[400px]"/>
                        
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-8  bg-[#FFECE8]">
                    <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Easy to Understand <br/> Researched Health Articles </p>
                    <div className="w-[100%] flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-[100%] md:w-[45%] flex flex-col gap-4 rounded-md">
                            <img src={cholesterol} alt="cholesterol" className="w-[100%] h-[170px] rounded-lg"/>
                            <p className="text-[#000] text-[20px] font-bold tracking-wide">The Relationship Between Alcohol And Cholesterol Levels</p>
                            <p className={` text-[16px] font-light `}>By Shalom Ngbala-Okpab Posted on September 1, 2022</p>
                            <p className={` text-[14px] font-light `}>There are often queries concerning the consumption of alcohol. Some schools of thoughts are for its consumption while some are against its consumption.</p>
                        </div>
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
                    </div>
                    <div className="flex justify-center">
                        <Button title="Read More Articles" icon="maki:arrow" article={true} func={()=>navigate(CustomerRoutePaths.Customer.Articles.Index)}/>
                    </div>
                </div>

                <div className="px-4 mt-10 pt-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <div className="flex mt-8 gap-8 flex-col justify-center items-center w-[100%]">
                        <div className="flex justify-center flex-col items-center">
                            <p className="text-[#000] text-[28px] font-bold tracking-wide">Our Team</p>    
                            <p className="text-[#000] text-[20px] font-normal tracking-wide">Meet our team of experts who is ready and available to help you with your health</p>
                        </div>
                        <div className="flex gap-8 flex-wrap justify-center">
                            <TeamMemberComponent
                                name="Abdulrazak Ayomide"
                                role="Software Developer"
                                image={avatar}
                                socialMediaLink="x.com/TimmieOlusa"
                            />
                            <TeamMemberComponent
                                name="Timilehin Olusa"
                                role="Software Developer"
                                image={avatar}
                                socialMediaLink="x.com/TimmieOlusa"
                            />
                            <TeamMemberComponent
                                name="Tosin Olusa"
                                role="Content Creator"
                                image={avatar}
                                socialMediaLink="x.com/TimmieOlusa"
                            />
                            <TeamMemberComponent
                                name="Thompson Peters"
                                role="Chief Executive Officer"
                                image={avatar}
                                socialMediaLink="x.com/TimmieOlusa"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-16 w-[100%] pt-10 md:px-20 flex flex-col justify-center items-center ">
                    <div className="flex w-[90%] sm:w-[70%] flex-col p-4 gap-6 bg-white shadow-md rounded-md">    
                        <p className="text-[#000]  font-bold sm:text-[26px]">Send us a message</p>
                        <p className="text-bodyText text-[15px] md:text-[18px]">Need assistance or have a question? Fill out the form below or drop us a message, and we’ll be in touch shortly.</p>     
                        <div className="mt-10 w-[100%] flex flex-col md:flex-row gap-[2%]">
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
                            <Button title="Sign Up for our Newsletter" func={()=>{setIsModalOpen(true)}} secondary={true}/>
                            <Button title="Explore Topics Now" func={()=>navigate(CustomerRoutePaths.Customer.Articles.Index)}/>
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

export default HealthCareConsulting;