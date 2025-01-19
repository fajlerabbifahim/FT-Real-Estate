import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

function HomeLayout() {
  return (
    <>
      <header>
        {" "}
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default HomeLayout;
