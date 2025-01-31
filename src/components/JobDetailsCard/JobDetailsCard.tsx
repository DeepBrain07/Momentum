
interface JobDetailsCardProps {
    role: string;
    type: string;
  }

const JobDetailsCard: React.FC<JobDetailsCardProps> = ({role, type}) => {
    return (
        <div className="shadow-md flex bg-white rounded-md w-[100%] p-2 px-1 sm:px-4  items-center justify-between gap-4">
            <p className="text-bodyText text-[20px] font-bold">{role}</p>
            <p className="text-bodyText text-[16px] font-semibold">Job Type: {type}</p>
        </div>
    )
}

export default JobDetailsCard;