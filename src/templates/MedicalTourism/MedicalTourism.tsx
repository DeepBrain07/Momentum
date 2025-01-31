import Header from "../../components/Header/Header"
import TeamMemberComponent from "../../components/TeamMemberCard/TeamMemberCard"
import { medicalTourism2, avatar,} from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"

const MedicalTourism = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col gap-8 bg-backgroundColor">
                    <div className="flex gap-4 flex-col md:w-[80%]">
                        
                        <p className="text-[#EDB52A] -tracking-wider">Medical Tourism</p>
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Your gateway to world-class healthcare services globally.</p>
                        <p className="text-bodyText -tracking-wider">Connecting you with trusted medical providers around the world. From planning to recovery, we’re with you every step of the way.</p>
                        <div>
                            <Button title="Contact Us" func={()=>{}}/>
                        </div>
                    </div>
                    <div className="w-[100%] rounded-sm">
                        <img src={medicalTourism2} alt="image" className="w-[100%] h-[120px] md:h-auto"/>
                    </div>
                    <div className="flex justify-center px-[2%] sm:px-[10%] flex-col items-center gap-8">
                        <p className="text-bodyText text-center -tracking-wider">Medical tourism enables patients to access top-tier medical care while exploring new destinations. Whether it’s specialized treatments, affordable options, or shorter wait times, our services make it seamless for you to receive the care you deserve—anywhere in the world.</p>
                        <div>
                            <Button title="Contact Us to book us" func={()=>{}}/>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-10 pt-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <div className="flex mt-8 gap-8 flex-col justify-center items-center w-[100%]">
                        <div className="flex justify-center flex-col items-center py-4">
                            <p className="text-[#000] text-[28px] font-bold tracking-wide">Our Team</p>    
                            <p className="text-[#000] text-[20px] font-normal text-center tracking-wider">Our trusted experts to help you with your medical tourism needs </p>
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
                            <TeamMemberComponent
                                name="Thompson Peters"
                                role="Chief Executive Officer"
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

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default MedicalTourism;