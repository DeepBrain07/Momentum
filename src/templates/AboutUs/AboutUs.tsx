import Header from "../../components/Header/Header"
import { image1 } from "../../assets/images"
import { AboutUsVisionAndMission } from "../../assets/images"
import { momentumLogo } from "../../assets/images"
import ServiceComponent from "../../components/Service/ServiceComponent"
import TeamMemberComponent from "../../components/TeamMemberCard/TeamMemberCard"
import { avatar } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import { JoinUs } from "../../assets/images"
import Button from "../../components/Button/Button"

const AboutUs = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[70%]">
                        <p className="text-tertiary text-[26px] md:text-[55px]">Empowering healthcare organisations with unstoppable momentum.</p>
                        <p className="text-bodyText">Momentum Healthcare is your partner in driving growth and excellence in the healthcare sector. With a diverse portfolio that spans health media management, consulting, medical tourism, and professional development, we’re committed to creating impactful solutions that deliver results.</p>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={image1} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                </div>

                <div className="px-4 p-10 md:px-20 flex flex-col md:flex-row gap-8 justify-between items-center bg-white">
                    <div className="flex gap-8 flex-col w-[100%] md:w-[60%]">
                        <p className="text-tertiary text-[28px]">Our Vison and Mission Statement</p>
                        <p>
                            Our Vision: To revolutionize healthcare globally by building momentum through innovative solutions, meaningful connections, and empowered professionals, ensuring access to exceptional care for all.
                            <br/><br/>
                            Our Mission:Momentum Healthcare is dedicated to advancing global health by offering cutting-edge services in media management, consulting, medical tourism, and professional training. We strive to empower healthcare organizations, professionals, and patients through strategic collaborations, innovative approaches, and personalized solutions.
                        </p>
                    </div>
                    <div className="w-80% md:w-[30%] rounded-sm">
                        <img src={AboutUsVisionAndMission} alt="Vision and Mission" className="w-[100%] md:h-[100%]"/>
                    </div>
                </div>

                <div className="px-4 p-10 md:px-20 flex flex-col gap-8 justify-between items-center bg-tertiary">
                    <div className="flex gap-8 w-[100%] flex-col sm:flex-row items-center justify-between md:w-[95%]">
                        <div className="w-[100%] sm:w-[40%]">
                            <p className="text-white text-[28px]">WELCOME TO MEMENTUM</p> <br/>
                            <p className="text-white text-[16px] font-normal">
                                At Momentum Healthcare, we’re not just offering services—we’re creating a movement that propels the healthcare industry forward.
                            </p>
                        </div>
                        <div className="p-6 h-fit bg-white rounded-md">
                            <img src={momentumLogo} alt="Momentum logo" className="w-[100%] sm:w-[300px] "/>
                        </div>
                    </div>
                    <div className="w-[100%] p-4 flex gap-10 mt-10 border border-[#DB1E26] rounded-md justify-between flex-wrap items-center ">
                        <ServiceComponent
                            link="/healthcare-consulting"
                            title="Health Care Consulting"
                            content="Our expert team provides tailored strategies for startups, hospitals, pharmaceutical companies, and health organizations to optimize operations and achieve measurable outcomes."
                        />
                        <ServiceComponent
                            link="/healthmedia-management"
                            title="Health Media Management"
                            content="With a reach of over 100 million people, we specialize in amplifying your brand's presence through strategic media management and targeted advertising."
                        />
                        <ServiceComponent
                            link="/medical-tourism"
                            title="Medical Tourism"
                            content="Connecting patients to world-class healthcare providers globally, we ensure personalized and effective medical management plans."
                        />
                        <ServiceComponent
                            link="/academy"
                            title="Academy"
                            content="We empower healthcare professionals through mentorship, staffing solutions, and access to affordable education opportunities."
                        />
                    </div>
                </div>

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8 bg-white">
                    <p className="text-[#000] text-[15px] font-bold">What Sets You Apart</p>
                    <p className="text-[#000] text-[28px] font-bold tracking-wide">WHY PARTNER WITH US?</p>
                    <ul className="list-disc space-y-2">
                        <li className="ml-4">Expertise Across Healthcare Sectors</li>
                        <li className="ml-4">Dedicated Teams of Experts and Innovators</li>
                        <li className="ml-4">Global Reach with Local Impact</li>
                        <li className="ml-4">Tailored Solutions for Every Need</li>
                    </ul>
                </div>

                <div className="px-4 mt-10 pt-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <p className="text-[#000] text-[18px] font-bold">Join us in building momentum for a healthier world.</p>
                    <div className="flex mt-8 gap-8 flex-col justify-center items-center w-[100%]">
                        <div className="flex justify-center flex-col items-center">
                            <p className="text-[#000] text-[28px] font-bold tracking-wide">Management Team</p>    
                            <p className="text-[#000] text-[20px] font-normal tracking-wide">Meet our management team that helps keep things moving</p>
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

export default AboutUs