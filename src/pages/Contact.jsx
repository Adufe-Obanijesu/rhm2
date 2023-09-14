// Importing components
import Hero from "../components/Hero";

const Contact = () => {
	return (
		<section>
	      <Hero title="contact us" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime atque praesentium recusandae at, eligendi magni veritatis. Maxime atque praesentium recusandae at, eligendi magni veritatis." buttonName="Download Messages" buttonAction="messages" />
	      <div className="bg-lightSecondary lg:p-28 px-6 py-20">
	        <p className="text-3xl font-semibold">Contact Information</p>
	        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 text-lg gap-6">
	          <div className="bg-white shadow text-gray-400 p-8">
	            <span className="text-black">Address:</span> 198 West 21th Street,
	            Suite 721 New York NY 10016
	          </div>

	          <div className="bg-white shadow text-gray-400 p-8">
	            <span className="text-black">Phone:</span> <span
	              className="text-blue-400 font-semibold"
	              style={{ fontSize: "16px" }}
	            >
	              +234 803 535 3278
	            </span>
	          </div>

	          <div className="bg-white shadow text-gray-400 p-8">
	            <span className="text-black">Email:</span> <span
	              className="text-blue-400 font-semibold"
	              style={{ fontSize: "16px" }}
	            >
	              info@rhm.com
	            </span>
	          </div>

	          <div className="bg-white shadow text-gray-400 p-8">
	            <span className="text-black">Website:</span> <span
	              className="text-blue-400 font-semibold"
	              style={{ fontSize: "16px" }}
	            >
	              yoursite.com
	            </span>
	          </div>
	        </div>
	      </div>
	    </section>
	)
}

export default Contact;