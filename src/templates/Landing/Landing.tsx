import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AboutUsVisionAndMission } from "../../assets/images";
import {
  ServiceCard1,
  ServiceCard2,
} from "../../components/ServiceCard/ServiceCard";
import {
  mobileHeroImage,
  heroImage,
  healthCareConsulting,
  healthMediaManagement,
  medicalTourism,
  academy,
  socialBackground,
  newsletterBackground,
  company1, company2, company3, company4, company5, company6, company7, company8, company9
} from "../../assets/images";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { CustomerRoutePaths } from "../../routers/customer.router";
import { useRef, useEffect } from "react";

const Landing = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  const companies = [company1, company2, company3, company4, company5, company6, company7, company8, company9]

  // Function to smoothly scroll to services section
  const scrollToServices = () => {
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // Ensure element is rendered before scrolling
  };

  useEffect(() => {
    console.log("Component mounted, ref:", servicesRef.current);
  }, []);

  return (
    <div className="w-[100%] bg-backgroundColor">
      {/* Header */}
      <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="pt-[100px] flex flex-col">
        {/* Desktop Hero */}
        <div
          className="hidden md:block px-4 my-10 mt-0 py-20  pb-40 md:px-20 w-[100%]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[50%] flex flex-col gap-10">
            <p className="text-[#fff] text-[35px] font-bold tracking-widest">
              Your reliable healthcare service organisation.
            </p>
            <p className="text-[#fff] text-[18px] font-bold tracking-wider">
              Empowering healthcare organisations with unstoppable momentum.
            </p>
            <Button title="Explore Services" func={scrollToServices} />
          </div>
        </div>

        {/* Mobile Hero */}
        <div
          className="md:hidden px-4 my-10 mt-0 py-20 pb-[500px] w-[100%]"
          style={{
            backgroundImage: `url(${mobileHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full flex flex-col justify-center items-center gap-10">
            <p className="text-[#fff] text-[7vw] sm:text-[28px] font-bold text-center tracking-widest">
              Your reliable healthcare service organisation.
            </p>
            <p className="text-[#fff] text-[5vw] sm:text-[15px] font-bold text-center tracking-wider">
              Empowering healthcare organisations with unstoppable momentum.
            </p>
            <Button title="Explore Services" func={scrollToServices} />
          </div>
        </div>

        <div className="px-4 p-10 md:px-20 pr-2 flex flex-col gap-8 justify-between">
            <div className="flex gap-8 flex-col w-[100%] md:w-[60%]">
                <p className="text-[#000] text-[22px] text-center">Trusted by leading health organizations globally.</p>
            </div>
            <div className="flex gap-4 overflow-x-scroll w-[100%]">
                {Array(companies.length).fill(null).map((_, index) => (
                    <img
                        key={index}
                        src={companies[index]}
                        alt="Vision and Mission"
                        className="min-w-[100px] sm:min-w-[100px] min-h-[15px] sm:min-h-[24px] "
                    />
                ))}
            </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} id="services" className="flex w-full justify-center py-[100px] pb-[50px]">
          <p className="text-[#000] text-[22px]">What we have to offer</p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-col gap-12">
          <div className="p-4 md:p-10 bg-[#CA0146]">
            <ServiceCard1
              title="Health Care Consulting"
              content="We provide tailored solutions for healthcare startups, public health organizations, pharmaceutical companies, hospitals, laboratories, and health financing organisations."
              detailsLink=""
              image={healthCareConsulting}
              func={() => navigate(CustomerRoutePaths.Customer.HealthCareConsulting)}
            />
          </div>

          <div className="p-4 md:p-10 bg-[#013B7D]">
            <ServiceCard2
              title="Health Media Management"
              content="Leverage the power of our extensive social media reach—connecting with nearly 100 million individuals."
              detailsLink=""
              image={healthMediaManagement}
              buttonColor="#fff"
              func={() => navigate(CustomerRoutePaths.Customer.HealthMediaManagement)}
            />
          </div>

          <div className="p-4 md:p-10 bg-[#EDB52A]">
            <ServiceCard1
              title="Medical Tourism"
              content="Through our partnerships with leading hospitals worldwide, we connect patients with the right providers globally."
              detailsLink=""
              fontColor="#000"
              image={medicalTourism}
              func={() => navigate(CustomerRoutePaths.Customer.MedicalTourism)}
            />
          </div>

          
          <div className="p-4 md:p-10 bg-[#64B05C]">
                <ServiceCard2
                    title="Academy"
                    content="Leverage the power of our extensive social media reach—connecting with nearly 100 million individuals. Our dedicated team of health communication and marketing specialists excels in building brand awareness and driving lead generation. From strategic media management to targeted advertising, we help your organization amplify its impact and grow its audience effectively."
                    detailsLink=""
                    image={academy}
                    fontColor="#000"
                    func={()=>navigate(CustomerRoutePaths.Customer.Academy)}
                />
            </div>
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
                <div className="flex gap-8 items-center justify-center flex-wrap"> 
                    {/* Facebook */}
                    <a href="https://www.facebook.com/share/1BvE3xUTz4/">
                        <Icon
                            icon="logos:facebook"
                            width={40}
                            color="white"
                        />
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/momentum_healthcare?igsh=NHBiZzNlazFxNXlh">
                        <Icon
                            icon="skill-icons:instagram"
                            width={40}
                            color="white"
                        />
                    </a>
                    {/* Twitter */}
                    <a href="https://x.com/momentumHCare?t=PAcSZG8zZ9sgtTzoDMf-Nw&s=09">
                        <Icon
                            icon="devicon:twitter"
                            width={40}
                            color="white"
                        />
                    </a>
                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@momentum_healthcare?_t=ZN-8tV6sf48xWA&_r=1">
                        <Icon
                            icon="mage:tiktok-circle"
                            width={40}
                            color="black"
                        />
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/momentum-healthcare-group">
                        <Icon
                            icon="skill-icons:linkedin"
                            width={40}
                            color="white"
                        />
                    </a>
                    {/* YouTube */}
                    <a href="https://youtube.com/@momentumhealthcare2175?si=sCsYAPkK3wLwty9W">
                        <Icon
                            icon="logos:youtube-icon"
                            width={40}
                            color="white"
                        />
                    </a>
                    {/* WhatsApp */}
                    <a href="https://wa.me/+4915218122588">
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

        {/* Footer */}
        <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
