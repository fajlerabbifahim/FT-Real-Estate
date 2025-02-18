import aboutImage from "../../../assets/AboutImage/aboutimage.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-11">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About FT Real Estate
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              At FT Real Estate, we are dedicated to connecting people with
              their dream properties. Whether you're looking for a luxurious
              apartment in the city, a cozy suburban home, or a spacious
              commercial property, we are here to guide you every step of the
              way.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced professionals is passionate about real
              estate and committed to delivering exceptional service. We believe
              in building trust through transparency, integrity, and
              personalized solutions tailored to your unique needs.
            </p>
            <p className="text-lg text-gray-600">
              Discover the difference with FT Real Estate, where your dreams
              become reality. Let us help you find the perfect property to call
              home.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Real estate showcase"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
