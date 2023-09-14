// Importing components
import About from "../components/About";
import Hero from "../components/Hero";
import PreviousProgramme from "../components/programmes/PreviousProgramme";
import Upcoming from "../components/Upcoming";
import Team from "../components/team/Team";

const Homepage = () => {

    return (
        <main>
            <Hero title="restoration mission hour" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Upcoming Programmes" buttonAction="programme" />

            <Upcoming />

            <About />

            <PreviousProgramme />

            <Team />
        </main>
    )
}

export default Homepage;
