import { useLocation } from "react-router-dom";

// Importing icons
import {FaCalendar, FaClock, FaCaretRight} from "react-icons/fa"

const Upcoming = ({upcomingProgramme}) => {
    const background = {
        background: `linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,0.8)), url("/img/upcomingImg.jpg") no-repeat center`,
        backgroundSize: "cover",
        minHeight: "300px",
    }

    return (
        <section className="relative">
            <div className="flex justify-center">
                <div className="-mt-7 absolute z-20 font-bold text-secondary bg-white py-3 px-6 drop-shadow-2xl rounded-lg text-sm lg:text-lg">
                    21 days, 6 hours
                </div>
            </div>
            <div className="md:grid md:grid-cols-12">

                <div className="col-span-7 md:h-auto h-60 flex justify-center items-center relative z-10" style={background}>
                    <div className="">
                        <h2 className="text-center text-white text-xl lg:text-3xl tracking-wide font-bold md:mb-3 mb-1">His Glory</h2>
                        <p className="lightgreyParagraph text-center lg:text-base text-sm">Isaiah 60 vs 1&2</p>
                    </div>
                    <div className="absolute bottom-0 w-full bg-transparentPrimary whiteParagraph py-3">
                        <div className="lg:flex lg:justify-center gap-x-10 lg:text-base text-sm">
                            <p className="lg:mb-0 mb-1"><span className="mr-2"><FaCalendar className="icon" /></span>Fri, 23rd February 2023 - Fri, 25th February 2023</p>
                            <p><span className="mr-2"><FaClock className="icon" /></span>Starts by 09:00am Fri, 23rd March 2023</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-5 bg-secondary relative">
                    <div className="hidden lg:flex absolute -ml-1 h-full items-center">
                        <span><FaCaretRight style={{height: "50px"}} /></span>
                    </div>
                    <div className="py-12 px-8">
                        <h3 className="headerBorder text-white text-lg lg:text-2xl mb-3 lg:mb-6">Burden</h3>
                        <p className="lightgreyParagraph text-xs lg:text-sm mb-5">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis.
                        </p>
                        <button className="buttonUpcoming transitionItem text-xs lg:text-sm">register</button>

                        <img src="/img/dashed circle.png" className="absolute right-0 bottom-0" alt="dashed circle" style={{height: "100px", width: "80px"}} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Upcoming;
