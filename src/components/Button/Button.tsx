import { Icon } from "@iconify/react/dist/iconify.js"; 

interface ButtonProps {
    title: string;
    func: () => void;
    icon?: string;
    secondary?: boolean;
    color?: string
    article?: boolean;
  }

const Button: React.FC<ButtonProps> = ({title, func, color, article, icon, secondary}) => {
    return (
        <div>
            <button 
            onClick={() => func()}   
            className={`p-2 rounded-md ${color ?? false ? 'bg-white' : secondary ? 'bg-secondary' : 'bg-primary'} px-4 flex items-center gap-1`}
            >
                {(icon && !article) && 
                    <Icon
                        icon={icon}
                        width={24}
                        color="white"
                    />
                }
                <p className={`font-light ${color ?? false ? 'text-[#013B7D]' : 'text-white'} text-[4vw] sm:text-[15px] tracking-wide`}>{title}</p>
                {(icon && article) && 
                    <Icon
                        icon={icon}
                        width={20}
                        color="white"
                    />
                }
            </button>
        </div>
    )
}

export default Button;