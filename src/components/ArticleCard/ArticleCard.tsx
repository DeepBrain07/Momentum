import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
    title: string;
    category: string;
    image: string;
    detailsLink: string;
    date: string;
  }

const ArticleCard: React.FC<ArticleCardProps> = ({title, category, image, detailsLink, date}) => {
    const navigate = useNavigate()
    console.log(detailsLink)
    return (
        <div onClick={()=>navigate(detailsLink)} className="bg-white w-[100%] shadow-md flex flex-col border rounded-md max-w-[280px] p-4 min-h-[240px] items-center justify-center gap-4">
            <img src={image} alt="servide image" className="rounded-md w-[100%] h-[130px]"/>
            <div className="w-[100%] flex flex-col gap-4">
                <div className="flex justify-between">
                    <p className={`text-[#000] text-[14px] max-w-[62%] font-bold tracking-wider`}>{category}</p>
                    <p className={`text-[#838383] text-[12px] font-light tracking-wide`}>{date}</p>
                </div>
                <a href={detailsLink}><p className={`text-primary text-[16px] font-semibold tracking-normal`}>{title}</p></a>
                
            </div>           
        </div>
    )
}

export {ArticleCard};