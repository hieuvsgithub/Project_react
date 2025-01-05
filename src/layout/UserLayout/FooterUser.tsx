import logo from "@/assets/LOGO.png";
import appStore from "@/assets/app_store.png";
import googlePlay from "@/assets/google_play.png";
import { Link } from "react-router-dom";

const FooterUser = () => {
  return (
    <>
      <footer className="bg-black/95 text-white w-full ">
        <div className="max-w-[1222px] mx-auto">
          <div className="flex justify-between items-center py-[25px] px-[10px] border-b-[0.5px] border-white/50	">
            <div className="">
              <h3 className="font-bold text-[1.8rem]">
                Đăng ký <span className="text-orange-500">Tin Tức</span>
              </h3>
              <p>Đăng kí ngay để cập nhật tin tức mới nhất</p>
            </div>
            <Link
              to="/register"
              className="bg-orange-500/90 text-[1.2rem] font-semibold py-[10px] px-[30px] rounded-[2px]"
            >
              Đăng ký
            </Link>
          </div>
          <div className="py-[20px] border-b-[0.5px] border-white/50">
            <div className="flex justify-between">
              <div className="w-1/3">
                <Link to="/">
                  <img
                    src={logo}
                    alt="image logo"
                    className="h-[60px] mb-[20px]"
                  />
                </Link>
                <p className="w-[66%] text-[0.8rem] text-white/60">
                  Hãy khám phá bộ sưu tập sản phẩm công nghệ của chúng tôi ngay
                  hôm nay và trải nghiệm mua sắm trực tuyến tuyệt vời tại trang
                  chủ của chúng tôi.
                </p>
                <div className="mt-[20px] flex flex-col gap-[10px]	">
                  <div className="text-[1rem] text-white/40 ">
                    <i className="fa-solid fa-location-arrow text-white text-[1.2rem] mr-[10px] px-[8px] py-[7px] rounded-full bg-orange-500/90"></i>
                    nthsmart@gmail.com
                  </div>
                  <div className="text-[1rem] text-white/40 ">
                    <i className="fa-solid fa-phone text-white  mr-[10px] p-[8px] rounded-full	 bg-orange-500/90"></i>
                    0966849805
                  </div>
                </div>
                <div className="mt-[20px] flex gap-[10px]">
                  <a href="">
                    <img src={appStore} alt="anh app_store" />
                  </a>
                  <a href="">
                    <img src={googlePlay} alt="anh google_play" />
                  </a>
                </div>
              </div>
              <div className="flex justify-between w-2/3">
                <div className="w-1/3 inline-block">
                  <div className="w-full">
                    <h4 className="text-[1.2rem]  font-medium	mb-[20px]">
                      Danh mục
                    </h4>
                    <ul className="flex flex-col gap-[10px] text-white/50">
                      <li>
                        <a href="#">Loa Bluetooth</a>
                      </li>
                      <li>
                        <a href="#">Máy ảnh</a>
                      </li>
                      <li>
                        <a href="#">Ổ cứng</a>
                      </li>
                      <li>
                        <a href="#">Gia dụng</a>
                      </li>
                      <li>
                        <a href="#">Tivi</a>
                      </li>
                      <li>
                        <a href="#">Phụ kiện</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/3">
                  <h4 className="text-[1.2rem]   font-medium	mb-[20px]	">
                    Dịch vụ
                  </h4>
                  <ul className="flex flex-col gap-[10px] text-white/50">
                    <li>
                      <a href="#">Term & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Products Return</a>
                    </li>
                    <li>
                      <a href="#">FAQS</a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/3">
                  <h4 className="text-[1.2rem]  font-medium		mb-[20px]">
                    Liên kết
                  </h4>
                  <ul className="flex flex-col gap-[10px] text-white/50">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Order Tracking</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Blog & News</a>
                    </li>
                    <li>
                      <a href="#">Our Products</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="py-[20px] block text-center">
              NTH Smart web bán đồ công nghệ hiện đại
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterUser;
