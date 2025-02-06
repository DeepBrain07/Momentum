import Header from "../../components/Header/Header"
import { cholesterol, author, image3, image4 } from "../../assets/images"
import Footer from "../../components/Footer/Footer"

const Author = () => {
    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <div className="flex justify-center mt-28"><p className="text-tertiary font-bold text-[26px] md:text-[45px]">Author's Profile</p></div>
                <div className="px-4 mt-10 py-14 md:px-12 w-[100%] flex flex-col gap-4 bg-[#fcf1de]">
                    <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%] py-8">
                        <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                            <p className={`text-[22px] font-bold tracking-wider`}>Shalom Ngbala-Okpab</p>
                            <p className={`text-[16px] font-light tracking-wide`}>Lorem ipsum dolor sit amet consectetur. Neque sit velit turpis consequat. Ultricies dui eget mattis morbi sit ut. Maecenas commodo aliquam nullam ut sollicitudin purus aliquam. Libero enim tellus non ante viverra vestibulum. Pulvinar massa risus gravida gravida nulla. In.</p>
                        </div>
                        <img src={author} alt="servide image" className="rounded-md w-[90%] md:w-[45%] h-[300px] md:h-[400px]"/>
                        
                    </div>
                </div>

                <div className="px-4 mt-10 py-14 md:px-20 w-[100%] flex flex-col justify-center items-center gap-14 ">
                    <p className="text-[#000] text-[28px] font-bold tracking-wide text-center">Articles by this author </p>
                    <div className="flex w-[90%] md:w-[52%] flex-col gap-10">
                        <div className="w-[100%] flex flex-col justify-start md:flex-row gap-4 md:gap-2 rounded-md  ">
                                <img src={cholesterol} alt="cholesterol" className="w-[90%] md:w-[250px] h-[130px] rounded-lg"/>
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

                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Author;