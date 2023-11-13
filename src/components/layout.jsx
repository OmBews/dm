import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({children}) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <img className="absolute top-0 left-0 -translate-y-20 md:-translate-y-20 z-0 w-full object-cover bg-center bg-no-repeat" src="/Rectangle 1.png" alt="" />
      <section>
        <Navbar/>
        <div className="px-6 md:px-16 space-y-4 z-20 relative">
          {children}
        </div>
      </section>
      <Footer/>
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout