import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";

function HomeLayout() {
  return (
    <>
      <Helmet>
        <title>Home | FT Real Estate</title>
      </Helmet>
      <header>
        {" "}
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomeLayout;
