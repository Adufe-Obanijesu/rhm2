// Importing components
import Hero from "../components/Hero";
import PreviousProgramme from "../components/programmes/PreviousProgramme";
import Upcoming from "../components/Upcoming";

const Programmes = () => {

    return (
        <main>

            <Hero title="our programmes" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Upcoming Programme" buttonAction="upcoming" />

            <Upcoming />

            <PreviousProgramme />

        </main>
    )
}

export default Programmes;