import "./layout.css";
import Navbar from "../../components/navbar/navbar";
import {Outlet} from 'react-router-dom';

import Footer1 from "../../components/footer1/footer1";
function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <Outlet/>
      </div>
      <div className="footer1">
        <Footer1/>
      </div>
    </div>
  );
}
export default Layout;
