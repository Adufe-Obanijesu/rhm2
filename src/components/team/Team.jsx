// Importing components
import Member from "./Member";

const Team = () => {
    return (
        <section className="py-16 px-10 lg:p-28 bg-white">
            <div className="flex justify-center">
                <h3 className="header">our team</h3>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 z-20">
                <Member name="Dr. Adeniyi" image="/img/team/member 1.jpg" />
                <Member name="Mr. Isaac Leoto" image="/img/team/member 2.jpg" />
                <Member name="Mr. Obisesan Gboyega" image="/img/team/member 3.jpg" />
                <Member name="Mr. X" image="/img/team/member 4.jpg" />
                <Member name="Mrs. Y" image="/img/team/member 5.jpg" />
                <Member name="Mrs. Z" image="/img/team/member 6.jpg" />
                <Member name="Mr. Obisesan Gboyega" image="/img/team/member 7.png" />
                <Member name="Mr. X" image="/img/team/member 8.png" />
            </div>

        </section>
    )
}

export default Team;