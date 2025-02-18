import { FaHandshake } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
  const data = [
    {
      title: "Trusted By Thousands",
      description:
        "To provide exceptional real estate services and help our clients make informed decisions about their investments.",
      icon: <FaHandshake />, // Replace with an SVG or image if needed
    },
    {
      title: "Wide Range Of Properties",
      description:
        " We offer personalized services, expert advice, and a wide range of properties to suit every budget and preference.",
      icon: <MdMapsHomeWork />, // Replace with an SVG or image if needed
    },
    {
      title: "Financing Made Easy",
      description:
        " We offer personalized services, expert advice, and a wide range of properties to suit every budget and preference.",
      icon: <GiMoneyStack />, // Replace with an SVG or image if needed
    },
  ];

  return (
    <section className=" bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle
          title={"Why Choose Us"}
          subTitle={
            "Discover the Difference: Your Trusted Partner in Finding Dream Homes and Investment Opportunities"
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#FF5A5F] hover:text-white"
            >
              <div className="flex justify-center items-center mb-4 text-7xl ">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
