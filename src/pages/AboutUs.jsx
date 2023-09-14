// Importing components
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/team/Team";

const AboutUs = () => {
    return (
        <main>
            <Hero title="about us" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." />

            <About page="about" />

            <Team />
        </main>
    )
}

export default AboutUs;