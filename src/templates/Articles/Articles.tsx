import Header from "../../components/Header/Header"
import { cholesterol, image2, image3, image4, } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"

const Articles = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <div className="p-4 md:p-10 flex flex-col sm:flex-row gap-[2%]">
                    <div className="sm:hidden w-[100%] mb-4">
                        <img src={cholesterol} alt="image" className="rounded-xl w-[100%] h-[200px] "/>
                    </div>
                    <div className="flex gap-4 flex-col w-[100%] sm:w-[49%]">
                        <p className="text-tertiary font-bold text-[26px] md:text-[45px]">The Relationship Between Alcohol And Cholesterol Levels</p>
                        <p className="text-bodyText ">By Shalom Ngbala-Okpab Posted on September 1, 2022</p>
                    </div>
                    <div className="hidden sm:flex w-[49%]">
                        <img src={cholesterol} alt="image" className="rounded-xl w-[100%] h-[250px] "/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-12 w-[90%] flex flex-col gap-4">
                    <p className="text-bodyText text-[15px] tracking-normal">Alcohol and cholesterol levels are closely connected—your drinking habits can influence your heart health in significant ways.</p>
                    <p className="text-bodyText font-bold text-[15px] tracking-normal">How Alcohol Affects Cholesterol</p>
                    <ul className="list-disc space-y-2">
                        <li className="ml-4">
                            <p className="text-bodyText text-[15px] tracking-normal">
                                <span className="font-bold">Moderation May Help:</span> Studies suggest that moderate alcohol consumption can raise levels of “good” HDL cholesterol, which helps remove excess cholesterol from your bloodstream. This effect is most commonly linked to drinks like red wine, which contains antioxidants that may promote heart health.
                            </p>
                        </li>
                        <li className="ml-4">
                            <p className="text-bodyText text-[15px] tracking-normal">
                                <span className="font-bold">Too Much Can Hurt:</span> Excessive drinking can do more harm than good. It raises triglycerides (a type of fat in your blood), lowers HDL cholesterol, and contributes to “bad” LDL cholesterol buildup. Over time, this increases the risk of heart disease, stroke, and liver damage.
                            </p>
                        </li>
                    </ul>

                    <p className="text-bodyText font-bold text-[15px] tracking-normal">Does the Type of Alcohol Matter</p>
                    <p className="text-bodyText text-[15px] tracking-normal">While the benefits of moderate drinking are often linked to red wine, all types of alcohol—beer, wine, or spirits—can affect cholesterol. However, these effects are tied more to the quantity you drink than the type of drink itself.</p>

                    <p className="text-bodyText font-bold text-[15px] tracking-normal">Key Takeaway</p>
                    <p className="text-bodyText text-[15px] tracking-normal">Alcohol can be a double-edged sword. Moderate consumption may offer some heart health benefits, but overindulgence can quickly negate them. If you’re managing high cholesterol or other health conditions, consult your doctor about whether and how alcohol fits into your lifestyle.</p>

                    <p className="text-bodyText font-bold text-[15px] tracking-normal italic">Your health is in your hands—make informed choices</p>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col gap-8  bg-[#FFECE8]">
                    <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Discover more articles </p>
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
                        <Button title="Read More Articles" icon="maki:arrow" article={true} func={()=>{}}/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Articles;