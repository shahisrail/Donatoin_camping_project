import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav";


const Mainlayout = () => {
  return (
    <div >
      <Nav></Nav>
      <div>

      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;