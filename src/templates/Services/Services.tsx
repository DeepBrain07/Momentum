import { useState } from "react"
import Header from "../../components/Header/Header"
import { doctor, doctor2, momentumLogo2, people, coach } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"
import ModuleCard from "../../components/ModuleCard/ModuleCard"
import { ModuleCard2 } from "../../components/ModuleCard/ModuleCard"


const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] flex flex-col">
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
                    <div className="flex flex-col gap-4">
                        <p className="text-[#000]  font-bold sm:text-[20px]">Enter your email to download</p>
                        <p className="text-bodyText text-[12px] md:text-[16px]">Enter your email to receive a copy of “article/ resource name” in your inbox </p>     
                        <div className="w-[100%]">
                            <p className="text-[15px] mb-1">Email Address</p>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-[100%] p-2 border border-[#CBD5E1] rounded-md"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Button title="Download Brochure" func={()=>{}}/> 
                        </div>
                    </div>
                </Modal>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className="text-tertiary font-bold text-[26px] md:text-[45px]">Empowering healthcare leaders</p>
                            <p className={`text-bodyTextColor text-[18px] font-bold tracking-wider`}>Dare to Progress....</p>
                            <div className=""> 
                                
                                <Button title="Download Brochure" func={()=>{setIsModalOpen(true)}} />
                            </div>
                        </div>
                        <img src={doctor} alt="megaphone" className="rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[330px]"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <img src={doctor2} alt="megaphone" className="hidden md:block rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[330px]"/>
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <img src={momentumLogo2} alt="momentum logo" className="rounded-md h-[24px] w-[58px]"/>
                            <p className={`text-bodyTextColor text-[22px] font-bold tracking-wider`}>Welcome to Momentum Healthcare Academy</p>
                            <p className={`text-bodyTextColor text-[16px] font-light tracking-wide`}>Momentum Healthcare Academy is a Healthcare Career Development Program for Young Healthcare Students and Professionals who are determined to succeed in their professional career. The Academy coaches Professionals on ingenious strategies based on experience and research for growth. The Academy offers strategies and concepts which are not taught in conventional educational settings. The Academy is designed to move you from "ahhh" to "Aha!" in your professional career decisions and long term strategic plans using cutting edge tools.</p>
                        </div>
                        <img src={doctor2} alt="image 1" className="md:hidden rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[330px]"/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-8">
                            <img src={momentumLogo2} alt="momentum logo" className="rounded-md h-[24px] w-[58px]"/>
                            <p className={`text-bodyTextColor text-[16px] font-light tracking-wide`}>Momentum Healthcare Academy will coach 20 Healthcare  Students and Professionals for 8 hours in 4 weeks through interactive business class meetings and spend 2 hours each with each Professional over the next two months to draft personal career plans and options based on learnings on personal discovery for the next 5 years.</p>
                        </div>
                        <img src={people} alt="team" className="rounded-md w-[90%] md:w-[36%] h-[300px] md:h-[330px]"/>
                    </div>
                </div>

                <div className="p-4 md:p-10 flex flex-col gap-8">
                    <div className="flex justify-center">
                        <p className="text-[#000] font-bold sm:text-[26px]">Modules</p>
                    </div>
                    <div className="flex gap-10 flex-wrap justify-center ">
                        <ModuleCard color="#CA0146">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[20px] font-bold tracking-wider`}>Week 1</p>
                                <p className={`text-white text-[16px] font-light tracking-wide underline`}>Self Discovery</p>
                                <p className={`text-white text-[14px] font-light tracking-normal`}>Here you will discovery  your purpose in life</p>
                                <ol className="list-decimal text-[14px] space-y-2">
                                    <p className={`text-white text-[14px] font-light tracking-normal`}>Who  you are and what are you good at.</p>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>You will use a self discovery psychological assessments tool to know who you are and your strengths. This tool has been used by over 90% of fortune 500 companies to engage employees and boost performance. Cliftonville strengths and Insights discovery.</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>You will use strategic tools to design and plan your career and life for the next 5 years with clear Key Performance/Success Indicators</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>You will spend 1 hour with your coach personally to review your 5-year plan</p></li>
                                </ol>
                            </div>
                        </ModuleCard>
                        <ModuleCard color="#013B7D">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[20px] font-bold tracking-wider`}>Week 2</p>
                                <p className={`text-white text-[16px] font-light tracking-wide underline`}>How to have a Successful Career</p>
                                <p className={`text-white text-[14px] font-light tracking-normal`}>Success is not by accident. It takes deliberate strategic and purposeful decisions and actions</p>
                                <ol className="list-decimal text-[14px] space-y-2">
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Work ethics</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Emotional intelligence</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Corporate politics and Governance</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Attitudes, trust and social graces</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Communication skills</p></li>
                                </ol>
                            </div>
                        </ModuleCard>
                        <ModuleCard color="#EDB52A">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[20px] font-bold tracking-wider`}>Week 3</p>
                                <p className={`text-white text-[16px] font-light tracking-wide underline`}>Personal life</p>
                                <p className={`text-white text-[14px] font-light tracking-normal`}>A balanced successful life boosts your career life. Its a win-win situation</p>
                                <ol className="list-decimal text-[14px] space-y-2">
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Role of Faith in your personal  life and career</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Relationships : How they determine how you succeed in your life</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Finances : How they help you secure and buy the future</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>Health : Things to do to keep you on top of your game</p></li>
                                </ol>
                            </div>
                        </ModuleCard>
                        <ModuleCard color="#64B05C">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[20px] font-bold tracking-wider`}>Week 4</p>
                                <p className={`text-white text-[16px] font-light tracking-wide underline`}>150 Healthcare Career alternatives</p>
                                <p className={`text-white text-[14px] font-light tracking-normal`}>There are many things you can do that fits your strengths. There are different options to explore.</p>
                                <ol className="list-decimal text-[14px] space-y-2">
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>The coach will talk about them in general</p></li>
                                    <li className="ml-4 text-white"><p className={`text-white text-[14px] font-light tracking-normal`}>The coach will spend 1 hour with you to finetune 5 career alternatives and CV review</p></li>
                                </ol>
                            </div>
                        </ModuleCard>
                    </div>
                </div>

                <div className="p-4 md:p-10 flex flex-col justify-center items-center gap-8">
                    <div className="md:w-[70%] flex flex-col gap-4">
                        <div className="flex justify-center">
                            <p className="text-[#000] font-bold sm:text-[26px] text-center">Benefits of Joining Momentum Healthcare Academy</p>
                        </div>
                        <ol className="list-decimal text-[14px] space-y-4">
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Personal self discovery</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>A clear strategic five year career and life plan</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Viable career alternatives in line with personal goals</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Developed resilience for the corporate world</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Being part of an  Alumni club:</p></li>
                            <p className={` text-[14px] font-light tracking-normal`}>A dedicated social media group for jobs, fellowships, scholarships, events, CV reviews and interview preparation tips</p>
                        </ol>
                    </div>
                </div>

                {/* meet your coach */}
                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-4">
                    <div className="w-[100%] flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
                        <img src={coach} alt="coach" className="rounded-md hidden md:block max-w-[300px] w-full aspect-ratio-1" />
                        <div className="w-[90%] md:w-[60%] flex flex-col gap-4">
                            <img src={momentumLogo2} alt="momentum logo" className="rounded-md h-[24px] w-[58px]"/>
                            <p className={`text-bodyTextColor text-[22px] font-bold tracking-wider`}>Meet Your Career Coach</p>
                            <p className={`text-bodyTextColor text-[14px] font-light tracking-normal`}>Baridueh Badon is a Medical Doctor with a 12 years experience in the Healthcare industry. After earning his MD from the University of Ibadan, Nigeria, Baridueh worked as a Clinician in Public and Private settings in Nigeria for about 4 year. Baridueh later worked for various NGOs in Nigeria including USAID funded projects on HIV/AIDS Program Quality Improvement in southern Nigeria and Clinton Health Access Initiative projects in the North.
                                <br/><br/>In 2019, Baridueh qualified as one of the 48 Fellows out of over 5000 Applicants from 45 African countries for the Africa Kommt! Fellowship in Germany, an Initiative by the German Federal President and German industries where he worked in the Strategy, Business and Development Operations of Merck Healthcare KGaA, Germany. Currently, Baridueh is a Global Project Manager for TÜD SÜD Medical and Health Services division and Chief of Staff to the Vice President of Global Operations.
                                <br/><br/>Baridueh holds an MSc in Health Management from Anglia  Ruskin University, UK, an MBA from University of South Wales, an Executive Certificate in Business Analytics from Judge Business School, University of Cambridge and a Sustainable Business Strategy Certificate from Harvard Business School. Baridueh's Clifton Strengths Talents is in Strategic Thinking and his Insights Discovery is a Director and Motivator. Baridueh enjoys playing the Bass Guitar, Travelling, Cooking, Cycling and spending time with his family.</p>
                        </div>
                        <img src={coach} alt="coach" className="rounded-md max-w-[270px] mt-2 w-full aspect-ratio-1 md:hidden" />
                    </div>
                </div>

                <div className="p-4 md:p-10 flex flex-col justify-center items-center gap-8">
                    <div className="md:w-[70%] flex flex-col gap-4">
                        <div className="flex justify-center">
                            <p className="text-[#000] font-bold sm:text-[26px] text-center">Who is eligible?</p>
                        </div>
                        <ol className="list-disc text-[14px] space-y-4">
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Students and Professionals with not more than 10 years work experience in healthcare</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}> Course of study in Healthcare Sciences with interest to grow in the Healthcare industry.</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Applicants not in Healthcare but wishes to work in the Healthcare industry are free to also apply.</p></li>
                            <li className="ml-4"><p className={` text-[14px] font-light tracking-normal`}>Candidates with a Strong desire to progress in life and determination to complete the program</p></li>
                        </ol>
                    </div>
                </div>

                <div className="p-4 md:p-10 flex flex-col justify-center items-center gap-8">
                    <div className="flex justify-center">
                        <p className="text-[#000] font-bold sm:text-[26px] text-center">Book your place now for the  Jan 2025 Now!</p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <ModuleCard2 color="#64B05C">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>Nigerian based Individuals</p> <br/>
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>Students <br/> N20,000 <br/> Professionals <br/> N40,000</p>
                            </div>
                        </ModuleCard2>
                        <ModuleCard2 color="#CA0146">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>UK based Individuals</p> <br/>
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>Students <br/> 25 Pounds <br/> Professionals <br/> 50 Pounds</p>
                            </div>
                        </ModuleCard2>
                        <ModuleCard2 color="#EDB52A">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>US based Individuals</p> <br/>
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>Students <br/> 25 Dollars <br/> Professionals <br/> 50 Dollars</p>
                            </div>
                        </ModuleCard2>
                        <ModuleCard2 color="#013B7D">
                            <div className="flex flex-col gap-2">
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>EU based Individuals</p> <br/>
                                <p className={`text-white text-[18px] font-bold tracking-wider`}>Students <br/> 25 Euros <br/> Professionals <br/> 50 Euros</p>
                            </div>
                        </ModuleCard2>
                    </div>
                </div>

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Services;