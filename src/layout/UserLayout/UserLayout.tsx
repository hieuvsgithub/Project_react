import { Outlet } from "react-router-dom";
import FooterUser from "./FooterUser";
import HeaderUser from "./HeaderUser";

const UserLayout = () => {
  return (
    <>
      <div className="m-[10px]">
        <HeaderUser />
        <Outlet />
        <FooterUser />
      </div>
    </>
  );
};

export default UserLayout;
