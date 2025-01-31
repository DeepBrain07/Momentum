
interface CareerCardProps {
    title: string;
    content: string;
    image: string
  }

const CareerCard: React.FC<CareerCardProps> = ({title, content, image}) => {
    return (
        <div className="shadow-md flex flex-col border rounded-md max-w-[380px] p-4 min-h-[300px] items-start gap-4">
            <p className="text-primary text-[22px] font-bold">{title}</p>
            <p className="text-bodyText text-[18px] font-normal">{content}</p>
            <img src={image} alt="career image" className="w-100% rounded-md"/>
        </div>
    )
}

const CareerCard2: React.FC<CareerCardProps> = ({title, content, image}) => {
    return (
        <div className="shadow-md flex flex-col border rounded-md max-w-[380px] p-4 min-h-[300px] items-start gap-4">
            <img src={image} alt="career image" className="w-[50px] h-[50px] rounded-md"/>
            <p className="text-primary text-[22px] font-bold">{title}</p>
            <p className="text-bodyText text-[18px] font-normal">{content}</p>
        </div>
    )
}

export {CareerCard2}
export default CareerCard;