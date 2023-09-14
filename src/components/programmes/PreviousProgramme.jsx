import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importing components
import Programme from "./Programme";

const PreviousProgramme = () => {

    return (
        <section className="py-16 px-10 lg:p-28 bg-lightSecondary">
            <div className="flex justify-center">
                <h3 className="header">our previous programmes</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <Programme theme="His Glory" text="Isaiah 60 vs 1&2" startDate="Fri, 16th Sept 2023" endDate="Sun, 18th Sept 2023" time="21:00pm" image="/img/programme.jpg" />
                <Programme theme="Ask and it shall be Given" text="Matthew 7 vs 7" startDate="Fri, 16th Sept 2023" endDate="Sun, 18th Sept 2023" time="21:00pm" image="/img/programme.jpg" />
                <Programme theme="My Refuge" text="Psalm 90 vs 1" startDate="Fri, 16th Sept 2023" endDate="Sun, 18th Sept 2023" time="21:00pm" image="/img/programme.jpg" />
            </div>
            <div className="mt-8 flex justify-center lg:text-base text-sm">
                <Link to="/programmes">
                    <button className="button transitionItem text-xs lg:text-sm">view more</button>
                </Link>
            </div>
        </section>
    )
}

export default PreviousProgramme;