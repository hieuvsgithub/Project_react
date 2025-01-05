import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" flex rounded-xl border-solid border-yellow-800">
        <div>
          <SidebarProvider className="border-orange-500 border-r">
            <AppSidebar />
            <main>
              {/* <SidebarTrigger /> */}
              {children}
            </main>
          </SidebarProvider>
        </div>
        <div className="w-full">
          <HeaderAdmin />
          <div className="m-[20px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
