
interface ServiceComponentProps {
    title: string;
    content: string;
  }

const ServiceComponent: React.FC<ServiceComponentProps> = ({title, content}) => {
    return (
        <div className="flex flex-col w-[230px] items-start gap-2">
            <p className="text-white text-[22px] font-bold">{title}</p>
            <p className="text-[white] text-[18px] font-normal">{content}</p>
            <p className="mt-2 text-[#EDB52A] text-[18px] font-bold tracking-wide">Learn More</p>
        </div>
    )
}

export default ServiceComponent;