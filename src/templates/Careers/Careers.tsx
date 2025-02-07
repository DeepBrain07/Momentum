import Header from "../../components/Header/Header"
import { mailingListBackground, careers, marketing, businessAnalytics, strategy, medicalWriting } from "../../assets/images"
import CareerCard from "../../components/CareerCard/CareerCard"
import JobDetailsCard from "../../components/JobDetailsCard/JobDetailsCard"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { useState } from "react"
import Modal from "../../components/Modal/Modal"
import { handleSubscribe } from "../../hooks/HandleSubscribe"

const Careers = () => {
    
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
                    <div className="flex flex-col gap-4">
                        <p className="text-[#000]  font-bold sm:text-[20px]">Enter your email to join our mailing list</p>
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
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Be Part of a Team That Makes a Difference</p>
                        <p className="text-bodyText -tracking-wider">At Momentum, we’re passionate about empowering organisations and individuals with solutions for impact. Join our diverse, innovative team and help shape the future of healthcare.</p>
                        <div>
                            <a href="https://x.com/momentumHCare?t=PAcSZG8zZ9sgtTzoDMf-Nw&s=09"><Button title="Join Us" func={()=>{}}/></a>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={careers} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4 bg-white">
                    <p className="text-[#000] text-[15px] font-bold">Why You’ll Love Working Here</p>
                    <p className="text-[#000] text-[28px] font-bold tracking-wide">WHY PARTNER WITH US?</p>
                    <div className="flex flex-wrap gap-8 justify-center items-center">
                        <CareerCard 
                            title="Strategy and Operations" 
                            content="Optimizing processes, aligning organizational goals, and implementing innovative solutions to improve efficiency, patient outcomes, and overall performance."
                            image={strategy}
                        />
                        <CareerCard 
                            title="Business analytics" 
                            content="leverages business analytics to transform data into actionable insights, enabling informed decision-making, improving operational efficiency, and driving strategic growth in the healthcare sector."
                            image={businessAnalytics}
                        />
                        <CareerCard 
                            title="Marketing" 
                            content="We craft targeted marketing strategies to increase brand visibility, engage audiences, and drive patient or client acquisition in the competitive healthcare landscape."
                            image={marketing}
                        />
                        <CareerCard 
                            title="Medical Writing" 
                            content=" We provide high-quality, accurate, and compliant medical content to support clinical and healthcare communications, regulatory submissions, and patient education."
                            image={medicalWriting}
                        />
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-2 bg-[#FBFBFB]">
                    
                    <p className="text-[#000] text-[28px] font-bold tracking-wide">Want to join our team</p>
                    <p className="text-[#000] text-[15px] font-light">Check out the openings below and apply for the one that suits you</p>
                    <div className="flex flex-wrap gap-8 mt-4 justify-center items-center">
                        <JobDetailsCard 
                            role="Senior Content Writer" 
                            type="Remote, Full Time"
                        />
                        <JobDetailsCard 
                            role="Community Manager" 
                            type="Remote, Full Time"
                        />
                        <JobDetailsCard 
                            role="Doctor / Hospital Liason" 
                            type="Remote, Full Time"
                        />
                    </div>
                </div>

                <div>
                    <div 
                        className="px-4 mt-10 py-32 md:px-20 w-[100%]  flex flex-col gap-2 justify-center items-center"
                        style={{
                            backgroundImage: `url(${mailingListBackground})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}    
                    >
                        <div className="md:w-[70%] flex justify-center items-center flex-col">
                            <p className="text-white font-bold text-[28px] tracking-wide text-center">Join Us on Your Journey to Better Health</p>
                            <p className="text-white text-[16px] font-normal tracking-wider text-center">
                                Receive job opening directly to your inbox. Subscribe to our newsletter.
                            </p>
                        </div>
                        <div className="flex gap-2 sm:gap-4 w-[100%] flex-wrap items-center justify-center mt-4">
                            <Button title="Join our mailing list" func={()=>{setIsModalOpen(true)}} secondary={true}/>
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

export default Careers;