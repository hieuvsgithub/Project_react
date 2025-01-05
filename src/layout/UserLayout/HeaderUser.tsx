// import { ModeToggle } from "@/components/mode-toggle";
import logo from "@/assets/LOGO.png";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderUser = () => {
  return (
    <>
      <header>
        <div className=" flex justify-between items-center ">
          <div className="w-1/6 inline-block">
            <Link to="/">
              <img src={logo} alt="anh logo" />
            </Link>
          </div>
          <div className="  w-1/2 relative flex items-center">
            <Input className="rounded-full  border border-black outline-none " />
            <button className="absolute top-0 right-0 p-[8px] mr-[5px]">
              <i className="fa-solid fa-magnifying-glass text-[1.2rem] "></i>
            </button>
          </div>
          <div className="inline-block ">
            <ul className="flex gap-3 text-[1.6rem] ">
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-facebook "></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-[20px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-orange-500/90 text-white  font-bold  py-[10px] px-[50px] rounded-[6px]">
              <i className="fa-solid fa-bars mr-[6px]"></i> Danh Mục
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full inline-block">
              <DropdownMenuItem className="w-full inline-block">
                Máy ảnh
              </DropdownMenuItem>
              <DropdownMenuItem>Ổ cứng</DropdownMenuItem>
              <DropdownMenuItem>Gia dụng</DropdownMenuItem>
              <DropdownMenuItem>Tivi</DropdownMenuItem>
              <DropdownMenuItem>Máy giặt</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="">
            <ul className="flex gap-3 text-[1.2rem] font-semibold	 ">
              <li>
                <a className="inline-block py-[10px] px-[15px]" href="#">
                  Trang chủ
                </a>
              </li>
              <li>
                <a className="inline-block py-[10px] px-[15px]" href="#">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a className="inline-block py-[10px] px-[15px]" href="#">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a className="inline-block py-[10px] px-[15px]" href="#">
                  Tin tức
                </a>
              </li>
              <li>
                <a className="inline-block py-[10px] px-[15px]" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex text-[1.4rem] items-center gap-[20px] mr-[5px]">
            <div className="">
              <a href="#" className="relative">
                <i className="fa-regular fa-heart"></i>
                <span className="text-[0.8rem] absolute right-[-10px] top-[-3px] font-medium text-white rounded-full px-[6px] bg-orange-500/90">
                  0
                </span>
              </a>
            </div>
            <div className="">
              <a href="#" className="relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="text-[0.8rem] absolute right-[-10px] top-[-3px] font-medium px-[6px] text-white bg-orange-500/90  rounded-full">
                  5
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderUser;
