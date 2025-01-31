import { Icon } from "@iconify/react/dist/iconify.js"; 
import { link } from "fs";

interface TeamMemberComponentProps {
    name: string;
    role: string;
    socialMediaLink: string;
    image: string;
  }

const TeamMemberComponent: React.FC<TeamMemberComponentProps> = ({name, role, image, socialMediaLink}) => {
    return (
        <div className="flex flex-col w-[230px] items-center justify-center">
            <div className="sm:w-[230px] bg-blue-300 rounded-[50%] sm:h-[230px] h-[180px] w-[180px] flex justify-center items-center"><img src={image} alt={name} className="h-[80%] w-[80%]"/></div>
            <p className="mt-1 text-[#000] text-[22px] font-bold">{name}</p>
            <p className="text-[#000] text-[16px] font-normal">{role}</p>
            <a href={socialMediaLink} target="_blank" rel="noopener noreferrer">
                <div className="relative bottom-[100px] left-[65px] border-[3px] border-white rounded-[50%] w-[30px] h-[30px] bg-tertiary flex justify-center items-center">
                <Icon
                    icon={"heroicons-solid:arrow-sm-up"}
                    width={24}
                    color="#fff"
                    className="rotate-45"
                />
                </div>
            </a>
        </div>
    )
}

export default TeamMemberComponent;