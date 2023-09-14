// Importing icons
import { FaEye, FaCalendar, FaClock } from "react-icons/fa";

const Programme = ({theme, text, startDate, endDate, time, image}) => {

    return (
        <div>
            <img src={image} className="object-cover rounded-lg h-48 w-full" />
            <h4 className="mb-1 mt-2 text-lg md:text-xl text-primary">{theme}</h4>
            <h5 className="text-sm md:text-md text-secondary">{text}</h5>
            <p className="text-secondary text-sm flex gap-2">
                <span><FaCalendar className="icon text-primary" /></span><span className="mt-[2px]">{startDate} - {endDate}</span>
            </p>
            <p className="text-secondary text-sm flex gap-2">
                <span><FaClock className="icon text-primary" /></span><span className="mt-[2px]">{time}</span>
            </p>
            <div className="mt-3">
                <button className="rounded-full mr-2 bg-primary text-white px-1 border-2 border-primary hover:text-primary hover:bg-transparent font-bold px-4 py-1 text-xs lg:text-sm transitionItem">View <span><FaEye className="icon" /></span></button>    
            </div>
        </div>
    )
}

export default Programme;