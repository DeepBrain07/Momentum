
interface FilterComponentProps {
    title: string;
    color: string;
    selected: boolean;
  }

const FilterComponent: React.FC<FilterComponentProps> = ({title, selected, color}) => {
    return (
        <div className={`shadow-md bg-[${color}] ${selected ? 'ring-4' : ''} flex px-4 py-1 rounded-2xl justify-center w-fit`}>
            <p className="text-white text-[15px] font-extralight text-nowrap">{title}</p>
        </div>
    )
}

export default FilterComponent;