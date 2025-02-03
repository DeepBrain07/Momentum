import { Link } from "react-router-dom";

interface ServiceComponentProps {
    title: string;
    content: string;
    link: string;
  }

const ServiceComponent: React.FC<ServiceComponentProps> = ({title, link, content}) => {
    return (
        <div className="flex flex-col w-[230px] items-start gap-2">
            <p className="text-white text-[22px] font-bold">{title}</p>
            <p className="text-[white] text-[18px] font-normal">{content}</p>
            <Link to={link}><p className="mt-2 text-[#EDB52A] text-[18px] font-bold tracking-wide">Learn More</p></Link>
        </div>
    )
}

export default ServiceComponent;