import Header from "../../components/Header/Header"
import { momentumLogo3, cholesterol, image2, image3, image4, vitamins, } from "../../assets/images"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"
import FilterComponent from "../../components/Filter/FilterComponent"
import { ArticleCard } from "../../components/ArticleCard/ArticleCard"
import { CustomerRoutePaths } from "../../routers/customer.router"

const Resources = () => {

    const allArticles = [
        {
          title: "Unique Benefits Of Vitamin E Other Than Skincare",
          category: "Food and Wellness",
          date: "March 18, 2024",
          image: vitamins,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("vitamin-e").View,
        },
        {
          title: "Understanding Mental Resilience in Tough Times",
          category: "Mental & Emotional Health",
          date: "March 20, 2024",
          image: cholesterol,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("mental-resilience").View,
        },
        {
          title: "Essential Nutrients for a Healthy Family",
          category: "Family Health",
          date: "March 22, 2024",
          image: image2,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("family-nutrition").View,
        },
        {
          title: "How to Maintain Reproductive Health in Your 30s",
          category: "Sexual and Reproductive Health",
          date: "March 25, 2024",
          image: image3,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("reproductive-health-30s").View,
        },
        {
          title: "The Role of Hydration in Mental Clarity",
          category: "Mental & Emotional Health",
          date: "March 28, 2024",
          image: image4,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("hydration-mental-health").View,
        },
        {
          title: "Superfoods That Boost Immunity",
          category: "Food and Wellness",
          date: "April 2, 2024",
          image: vitamins,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("immunity-superfoods").View,
        },
        {
          title: "Managing Anxiety Through Diet",
          category: "Mental & Emotional Health",
          date: "April 5, 2024",
          image: vitamins,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("anxiety-diet").View,
        },
        {
          title: "Parenting Tips for a Healthy Family",
          category: "Family Health",
          date: "April 8, 2024",
          image: cholesterol,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("parenting-health").View,
        },
        {
          title: "How Sleep Affects Reproductive Health",
          category: "Sexual and Reproductive Health",
          date: "April 12, 2024",
          image: image3,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("sleep-reproductive-health").View,
        },
        {
          title: "Top 5 Exercises for Mental Health",
          category: "Mental & Emotional Health",
          date: "April 15, 2024",
          image: image4,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("mental-health-exercises").View,
        },
        {
          title: "A Balanced Diet for Family Wellness",
          category: "Family Health",
          date: "April 18, 2024",
          image: image2,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("balanced-diet-family").View,
        },
        {
          title: "How Meditation Enhances Emotional Stability",
          category: "Mental & Emotional Health",
          date: "April 22, 2024",
          image: vitamins,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("meditation-emotional-stability").View,
        },
        {
          title: "The Link Between Gut Health and Mood",
          category: "Food and Wellness",
          date: "April 25, 2024",
          image: cholesterol,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("gut-health-mood").View,
        },
        {
          title: "Prenatal Care: Essential Steps for a Healthy Baby",
          category: "Sexual and Reproductive Health",
          date: "April 28, 2024",
          image: cholesterol,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("prenatal-care").View,
        },
        {
          title: "Healthy Family Meal Planning",
          category: "Family Health",
          date: "May 1, 2024",
          image: image4,
          detailsLink: CustomerRoutePaths.Customer.Articles.Articles("family-meal-planning").View,
        },
      ];

      const [selected, setSelected] = useState<string | null>(null)
            
      const [articles, setArticles] = useState(allArticles);
  
      const handleFilter = (category: string) => {
        if (category === null) {
          setArticles(allArticles);
        } else {
            setSelected(category)
            setArticles(allArticles.filter(article => article.category.toLocaleLowerCase() === category));
        }
      };

    return (
        <div className="w-[100%] bg-backgroundColor">
            <div className="px-[2vw] md:px-10 bg-white fixed z-50 top-0 left-0 w-[100%] border">
                <Header/>
            </div>
            <div className="pt-[100px] md:px-[10vw] flex flex-col">
                <div className="py-20 px-[10vw] flex mb-10  gap-4 flex-col w-[100%] h-auto"
                    style={{
                        backgroundImage: `url(${momentumLogo3})`,
                        backgroundSize: '45vw',
                        backgroundPositionX: '100%', 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', 
                        backgroundColor: '#013B7D',
                        backgroundBlendMode: 'multiply',
                    }}
                >
                    <p className="text-[#fff] text-[30px] font-bold tracking-widest text-center">Momentum Blog</p>
                    <p className="text-[#fff] text-[15px] tracking-wider font-extralight text-center">
                        Get Momentum news, and product updates sent directly to your inbox. 
                        Subscribe below and never miss a beat.
                    </p>   
                </div>

                <div className="px-4  flex gap-8 justify-between">
                    <div className="flex gap-4 md:justify-center overflow-x-scroll w-[100%]">
                        <div onClick={()=>handleFilter("food and wellness")}><FilterComponent selected={selected==="food and wellness"} title="Food and Wellness" color="#013B7D"/></div>
                        <div onClick={()=>handleFilter("sexual and reproductive health")}><FilterComponent selected={selected==="sexual and reproductive health"} title="Sexual and Reproductive Health" color="#CA0146"/></div>
                        <div onClick={()=>handleFilter("family health")}><FilterComponent selected={selected==="family health"} title="Family Health" color="#EDB52A"/></div>
                        <div onClick={()=>handleFilter("mental & emotional health")}><FilterComponent selected={selected==="mental & emotional health"} title="Mental & Emotional Health" color="#64B05C"/></div>
                    </div>
                </div>

                <div className="px-4 flex gap-8 mt-10 flex-wrap justify-center">
                    {articles && articles.length > 0 ? (
                        articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            title={article.title}
                            category={article.category}
                            date={article.date}
                            image={article.image}
                            detailsLink={article.detailsLink}
                        />
                        ))
                    ) : (
                        <p>No related article</p>
                    )}
                </div>


                <div className="px-4 mt-10 py-10 md:px-20 w-[100%] flex flex-col gap-8">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Resources;