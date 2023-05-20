import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <ScrollRestoration />
    </>
  );
};

export default Main;
