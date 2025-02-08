import Header from "../../components/Header/Header"
import { cigarette, vagina, mentalHealth, image4, } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import { Icon } from "@iconify/react/dist/iconify.js"
import Modal from "../../components/Modal/Modal"
import { useState } from "react"
import { CustomerRoutePaths } from "../../routers/customer.router"
import { ArticleCard } from "../../components/ArticleCard/ArticleCard"
import { useNavigate } from "react-router-dom"

const Articles = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] px-4 md:px-[10vw] flex flex-col">
                <div onClick={()=>navigate(CustomerRoutePaths.Customer.Articles.Index)} className="ml-4 sm:ml-0 flex gap-4 items-center">
                    <Icon
                        icon={"bx:arrow-back"}
                        width={34}
                        color="#000"
                    />
                    <p className="hidden sm:block">Blog Home</p>
                </div>

                
                <div className="p-4 md:p-10 flex flex-col gap-[2%]">
                    <div>
                        <p>Family Health</p>
                        <p className="text-tertiary font-light text-[26px] md:text-[45px]">Reasons Why You Shouldn’t Hold Your Urine</p>
                        <p className="text-bodyText font-extralight">Posted on: March 20, 2024</p>
                    </div>
                    <div className="mt-12 flex gap-10 justify-between flex-wrap">
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/share/1BvE3xUTz4/">
                                <Icon
                                    icon="ri:facebook-fill"
                                    width={24}
                                    color="#000"
                                />
                            </a>
                            {/* Twitter */}
                            <a href="https://x.com/momentumHCare?t=PAcSZG8zZ9sgtTzoDMf-Nw&s=09">
                                <Icon
                                    icon="basil:twitter-outline"
                                    width={24}
                                    color="#000"
                                />
                            </a>
                            {/* linkedIn */}
                            <a href="https://www.linkedin.com/company/momentum-healthcare-group">
                                <Icon
                                    icon="ri:linkedin-fill"
                                    width={24}
                                    color="#000"
                                />
                            </a>
                            {/* Email */}
                            <a href="https://www.facebook.com/share/1BvE3xUTz4/">
                                <Icon
                                    icon="line-md:email"
                                    width={24}
                                    color="#000"
                                />
                            </a>
                        </div>
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
                                    <Button title="Download Article" func={()=>{}}/> 
                                </div>
                            </div>
                        </Modal>
                        <Button title="Download Article" func={()=>{setIsModalOpen(true)}}/>
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-12 w-[100%] justify-center items-center flex flex-col gap-14">
                    <img className="rounded-lg w-[80%] sm:w-[70%] h-[300px] sm:h-[400px]" src={image4} alt="Urine"/>
                    <p className="text-bodyText tracking-wide text-[18px] font-extralight">Is it a crime to get so busy that taking a piss feels so tasking? Immediately you feel it coming, even if your hands are too occupied – that tiring trip to the restroom will do you a lot of good. You do not have to “pee later” or wait till you are through with what you are doing.
                        <br/>In situations like waiting for an Uber or getting stuck in traffic with no restrooms close by, some will rather pollute the environment with urine to avoid holding it in. But you are not like them, right? So, learning to hold in your urine is equally necessary. However, ignoring the urge to urinate when you ought – at the right places – may increase the risks of certain side effects conditions or diseases.
                        <br/>It is necessary to note that the human body differs from person to person. So, if someone can boast of a healthy urinary system (which we can’t be so sure of ), occasionally holding urine for long may not be dangerous. But in some instances, it may be harmful – and it is vital to take precautions.
                    </p>
                    <ul className="list-decimal text-[16px] space-y-2">
                        <p className="text-[#000] tracking-wide text-[24px] font-bold">Here are some reasons why you shouldn’t hold your urine for long.</p>
                        
                        <p className="text-[#000] text-[18px] font-bold tracking-normal">1. Pain</p>
                        <p className="text-bodyText text-[18px] tracking-normal">When you hold in urine for a while, you place an extra burden on the bladder muscles, and this causes pain. This pain occurs because the muscles clench to keep in the increasing amount of urine, so there is no leak. Sometimes, even after ridding your bladder of urine, the muscles may stay clenched and only relax after a while, prolonging the pain</p>
                        
                        
                        <p className="text-[#000] text-[18px] font-bold tracking-normal">2. Kidney Stones</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">If you’ve had kidney stones or you know someone who has – you’ll understand that symptomatic kidney stones is better not experienced. Kidney stones form when waste products in the blood crystalize and develop. Scientists have not identified the exact cause of kidney yet. However, studies have shown they are more likely to occur when you don’t take enough liquid, hold in urine too much and some dietary factors. Some kidney stones may be small enough to be passed out through urine, although painfully, while some may require surgery to remove them.</p>
                        <p className="text-bodyText text-[18px] tracking-normal">Symptoms of kidney stones include:</p>
                        <ul className="list-disc text-[16px] ml-4 space-y-2">
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Persistent aches in the lower back</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Nausea</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Painful urination</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Bloody urine</p></li>
                        </ul>
                        <p className="text-bodyText text-[18px] tracking-normal">If you are experiencing any of these symptoms, do well to seek medical attention.</p>

                        <p className="text-[#000] text-[18px] font-bold tracking-normal">3. Urinary Tract Infections</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">The singular act of holding your pee does not simply make you contract a Urinary Tract Infection. The urine contains several components. When you hold in your pee for long, it gives these bacteria room to multiply.</p>
                        <p className="text-bodyText text-[18px] tracking-normal">Symptoms of UTIs include;</p>
                        <ul className="list-disc text-[16px] ml-4 space-y-2">
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Pelvic pain</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Persistent urge to empty yourself</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Blood in urine</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Dark-colored urine</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">Strong-smelling urine</p></li>
                            <li className="ml-4"> <p className="text-bodyText text-[18px] tracking-normal">burning sensation while urinating</p></li>
                        </ul>
                        <p className="text-bodyText text-[18px] tracking-normal">UTIs are very painful. Once contacted, it may keep recurring. If you are experiencing any of these symptoms, do well to seek medical attention.</p>

                        <p className="text-[#000] text-[18px] font-bold tracking-normal">4. Stretched bladder</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">The bladder is an elastic organ that can expand and return to its normal size – like a rubber band. The strain on the bladder for long periods causes it to stretch together with the surrounding muscles. This strain may cause the bladder to lose its elasticity, resulting in a stretched bladder. In severe cases, a patient may need a catheter to be able to pass out urine.</p>
                        
                        <p className="text-[#000] text-[18px] font-bold tracking-normal">5. Urinary Incontinence</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">Incontinence is damage to pelvic floor muscles. As said earlier, when the bladder stretches, the surrounding muscles (including pelvic floor muscles) also stretch. Prolonged stretching can weaken these muscles causing incontinence. The pelvic floor muscles run between the legs, from the pubic bone anteriorly to the base of the spine. They are sling-shaped and hold all the pelvic organs, the bladder inclusive. One of these muscles is the urethral sphincter, which keeps the urethra closed to prevent you from leaking. If this muscle is damaged, even with a reaction like sneezing or cough comes a little bit of urine leak, and the patient constantly feels the urge to wee.</p>
                        
                        <p className="text-[#000] text-[18px] font-bold tracking-normal">6. Urine retention</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">Urine retention is a health condition where a person finds it difficult to pass urine (chronic) or empty the bladder (acute). This is caused by harmless and cancerous lumps, like tumors or tissue buildup from conditions like Benign Prostatic Hyperplasia (BPH). However, holding urine for long is also one of the risk factors for urine retention.</p>
                        
                        <p className="text-[#000] text-[18px] font-bold tracking-normal">7. Burst Bladder </p>    
                        <p className="text-bodyText text-[18px] tracking-normal">A burst bladder? Right, but this is rare and the most unlikely to happen  (one can guess why it is least on this list). What is more likely to occur is incontinence or a stretched bladder. However, if the bladder ruptures, urine spreads into the abdomen, causing complications. Such a situation will require urgent surgery.</p>

                        <p className="text-[#000] text-[18px] font-bold tracking-normal">Bottom Line</p>    
                        <p className="text-bodyText text-[18px] tracking-normal">You don’t have to reduce your water intake to avoid an ugly urine situation. Please, drink water! Lots of it. Asides from the various benefits of water, it helps keep the kidneys and urinary system healthy. If you need to hold your urine, please do – but do not make it a daily habit and don’t hold the urine for long.</p>                        
                    </ul>
                </div>

                <div className="px-4 mt-24 py-8 md:px-20 w-[100%] flex flex-col gap-8  bg-[#e0e0e0]">
                    <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Recent Posts </p>
                    <div className="flex gap-8 justify-center items-center flex-wrap">
                        <ArticleCard
                            title="10 Reasons You Should Smile More Often"
                            category="Mental and Emotional Health"
                            date="March 18, 2024"
                            image={mentalHealth}
                            detailsLink={CustomerRoutePaths.Customer.Article}
                        />
                        <ArticleCard
                            title="Vaginal Tightening: All You Need To Know"
                            category="Sexual and Reproductive Health"
                            date="March 18, 2024"
                            image={vagina}
                            detailsLink={CustomerRoutePaths.Customer.Article}
                        />
                        <ArticleCard
                            title="7 Deadly Conditions You Can Get From Smoking"
                            category="Family Health"
                            date="March 18, 2024"
                            image={cigarette}
                            detailsLink={CustomerRoutePaths.Customer.Article}
                        />
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