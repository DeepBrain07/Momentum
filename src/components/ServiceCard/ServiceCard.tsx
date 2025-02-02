import Button from "../Button/Button";

interface ServiceCardProps {
    title: string;
    content: string;
    image: string;
    detailsLink: string;
    buttonColor?: string;
    fontColor?: string
  }

const ServiceCard1: React.FC<ServiceCardProps> = ({title, content, image, detailsLink, buttonColor, fontColor}) => {
    console.log(detailsLink)
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
            <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                <p className={`text-${fontColor || 'white'} text-[22px] font-bold tracking-wider`}>{title}</p>
                <p className={`text-${fontColor || 'white'} text-[16px] font-light tracking-wide`}>{content}</p>
                <div>
                    <Button title="View Details" func={()=>{}} color={buttonColor} />
                </div>
            </div>
            <img src={image} alt="servide image" className="rounded-md w-[90%] md:w-[32%] h-[300px] md:h-[400px]"/>
            
        </div>
    )
}

const ServiceCard2: React.FC<ServiceCardProps> = ({title, content, image, detailsLink, buttonColor, fontColor}) => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center gap-8 md:justify-between md:gap-[10%]">
            <img src={image} alt="servide image" className="rounded-md w-[90%] md:w-[32%] h-[300px] md:h-[400px]"/>
            <div className="w-[90%] md:w-[50%] flex flex-col gap-4">
                <p className={`text-${fontColor || 'white'} text-[22px] font-bold tracking-wider`}>{title}</p>
                <p className={`text-${fontColor || 'white'} text-[16px] font-light tracking-wide`}>{content}</p>
                <div>
                    <Button title="View Details" func={()=>{}} color={buttonColor} />
                </div>
            </div>            
        </div>
    )
}

export {ServiceCard1, ServiceCard2};