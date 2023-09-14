import { FaCalendar } from "react-icons/fa";

const About = ({page}) => {
  return (
    <section className={page && "bg-lightSecondary"}>
        <div className="md:grid md:grid-cols-12 gap-5 py-16 px-10 lg:p-28">
            <div className="col-span-5 flex justify-center self-center hidden md:block">
                <div className="flex flex-col items-center">
                    <img src="/img/founder.jpg" alt="founder" className="w-72 rounded-lg mb-2" />
                    <h3 className="text-center tracking-wide font-semibold mt-2">Dr. John Doe</h3>
                    <h3 className="text-center tracking-wide text-sm text-secondary">Founder</h3>
                </div>
            </div>

            <div className="md:col-span-7">
            <h3 className="headerBorder text-secondary text-lg lg:text-2xl mb-6">about us</h3>
            <p className="greyParagraph text-xs lg:text-sm mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam totam at obcaecati ducimus. Quisquam minus a excepturi maiores eaque fugit adipisci, tempora ut? Voluptate, delectus! Doloremque commodi animi architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae natus fugiat aliquid voluptas numquam asperiores esse eligendi cumque non!
            </p>

            <p className="greyParagraph text-xs lg:text-sm mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam totam at obcaecati ducimus. Quisquam minus a excepturi maiores eaque fugit adipisci, tempora ut? Voluptate, delectus! Doloremque commodi animi architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae natus fugiat aliquid voluptas numquam asperiores esse eligendi cumque non!
            </p>

            <p className="greyParagraph text-xs lg:text-sm mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quisquam totam at obcaecati ducimus. Quisquam minus a excepturi maiores eaque fugit adipisci, tempora ut? Voluptate, delectus!
            </p>
            <p>
            <span><FaCalendar className="icon text-primary" /></span> <span className="greyParagraph lg:text-base text-xs">Inception Date: 21st June, 2012</span>
            </p>
            </div>
        </div>
    </section>
  )
}

export default About;