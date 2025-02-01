
interface ModuleCardProps {
    color: string;
    children: React.ReactNode;
  }

const ModuleCard: React.FC<ModuleCardProps> = ({color, children}) => {
    return (
        <div className={`shadow-md flex flex-col border rounded-lg max-w-[350px] p-4 min-h-[300px] bg-[${color}] items-start`}>
            {children}
        </div>
    )
}

const ModuleCard2: React.FC<ModuleCardProps> = ({color, children}) => {
    return (
        <div className={`shadow-md flex flex-col border rounded-lg max-w-[220px] p-4 min-h-[200px] bg-[${color}] items-start`}>
            {children}
        </div>
    )
}

export {ModuleCard2}
export default ModuleCard;