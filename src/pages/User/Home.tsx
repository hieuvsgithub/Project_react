import { Button } from "@/components/ui/button";
import imgFeaturedClock from "@/assets/img/featured/dong-ho.png";
import imgFeaturedIp from "@/assets/img/featured/img_57.png";
import imgBannerLaptop from "@/assets/img/banner-1/banner-1.png";
import imgBannerIPhone from "@/assets/img/banner-1/banner-2.png";
import imgBannerIPad from "@/assets/img/banner-1/banner-3.png";
import imgBannerTV from "@/assets/img/banner-1/banner-4.png";
import macBookIphone from "@/assets/img/section-hot-sale/macbookiphone.png";
import ProductItem from "@/pages/User/ProductItem";

import imgClock from "@/assets/img/banner-2/anh-dong-ho.webp";
import imgAccessory from "@/assets/img/banner-2/anh-phu-kien.webp";

const Home = () => {
  return (
    <main className="my-[30px] max-w-[1222px]  mx-auto ">
      <section className="featured h-[90vh] flex">
        <div className="left bg-black/10 flex  w-3/4 items-center justify-center">
          <div className="flex flex-col gap-[10px] mb-[30px]">
            <span className="text-orange-500/90">Widesceen 4k .......</span>
            <h2 className="text-[2rem] ">
              CÔNG NGHỆ ĐỘT PHÁ <br /> VÀ TIÊN TIẾN
            </h2>
            <p className="font-bold text-black/50 text-[0.9rem]">
              Sang trọng, hiện đại, hấp dẫn,....
            </p>
            <div className="text-orange-500/90 flex items-center font-bold">
              <span className="inline-block  w-[30px] text-[1.1rem] leading-none	 ">
                Ưu đãi
              </span>
              <span className="text-[1.8rem] ml-[6px]">
                70<span className="text-[1rem] align-top	">%</span>
              </span>
              <span className="ml-[10px] text-[1.6rem] font-normal">
                2,990,000<span className="align-top text-[1rem]">đ</span>
              </span>
            </div>
            <Button className="w-[120px] rounded-full	">
              Mua ngay <span className="text-[1.4rem] "> &#8594;</span>
            </Button>
          </div>
          <img
            src={imgFeaturedClock}
            alt="anh clock"
            className="h-[400px] ml-[40px]"
          />
        </div>
        <div className="ml-[30px] bg-black/10 flex flex-col w-1/4 gap-[10px] pl-[30px] justify-center">
          <div>
            <span className="py-[5px] px-[20px] bg-orange-500/90 text-white font-medium text-[0.8rem]">
              NEW
            </span>
          </div>
          <h3 className="uppercase text-[1.3rem] leading-none	">
            Mua sắm thuận <br /> tiện <br /> và đơn giản
          </h3>

          <div className="text-orange-500/90 flex items-center font-bold">
            <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
              Ưu đãi
            </span>
            <span className="text-[1.8rem] ml-[6px]">
              70<span className="text-[1rem] align-top	">%</span>
            </span>
          </div>
          <div>
            <button className=" py-[5px] px-[20px] rounded-full text-white font-medium border bg-orange-500/90 border-orange-500/90 flex items-center">
              Mua ngay <span className="text-[1.4rem] "> &#8594;</span>
            </button>
          </div>
          <div className="mx-auto">
            <img src={imgFeaturedIp} alt="anh ip" className="   h-[100%]" />
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-[30px] my-[30px]">
        <div className="bg-black/10 flex grow items-center justify-start w-1/4 p-[20px]">
          <img src={imgBannerLaptop} alt="anh banner" className="h-[80%]" />
          <div>
            <h3 className="uppercase">
              lap top <br /> <b>đa dạng</b>
            </h3>
            <div className="text-orange-500/90 flex items-center font-bold">
              <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
                Ưu đãi
              </span>
              <span className="text-[1.8rem] ml-[6px]">
                70<span className="text-[1rem] align-top	">%</span>
              </span>
            </div>
            <button className="text-[0.6rem]">
              Mua ngay
              <span className="bg-orange-500/80 px-[4px] pb-[1px] rounded-full text-white	ml-[5px] ">
                &#62;
              </span>
            </button>
          </div>
        </div>
        <div className="bg-black/10 flex grow items-center justify-start w-1/4 p-[20px]">
          <img src={imgBannerIPhone} alt="anh banner" className="h-[80%]" />
          <div>
            <h3 className="uppercase">
              lap top <br /> <b>đa dạng</b>
            </h3>
            <div className="text-orange-500/90 flex items-center font-bold">
              <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
                Ưu đãi
              </span>
              <span className="text-[1.8rem] ml-[6px]">
                70<span className="text-[1rem] align-top	">%</span>
              </span>
            </div>
            <button className="text-[0.6rem]">
              Mua ngay
              <span className="bg-orange-500/80 px-[4px] pb-[1px] rounded-full text-white	ml-[5px] ">
                &#62;
              </span>
            </button>
          </div>
        </div>
        <div className="bg-black/10 flex grow items-center justify-start w-1/4 p-[20px]">
          <img src={imgBannerIPad} alt="anh banner" className="h-[80%]" />
          <div>
            <h3 className="uppercase">
              lap top <br /> <b>đa dạng</b>
            </h3>
            <div className="text-orange-500/90 flex items-center font-bold">
              <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
                Ưu đãi
              </span>
              <span className="text-[1.8rem] ml-[6px]">
                70<span className="text-[1rem] align-top	">%</span>
              </span>
            </div>
            <button className="text-[0.6rem]">
              Mua ngay
              <span className="bg-orange-500/80 px-[4px] pb-[1px] rounded-full text-white	ml-[5px] ">
                &#62;
              </span>
            </button>
          </div>
        </div>
        <div className="bg-black/10 flex grow items-center justify-start w-1/4 p-[20px]">
          <img src={imgBannerTV} alt="anh banner" className="h-[80%]" />
          <div>
            <h3 className="uppercase">
              lap top <br /> <b>đa dạng</b>
            </h3>
            <div className="text-orange-500/90 flex items-center font-bold">
              <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
                Ưu đãi
              </span>
              <span className="text-[1.8rem] ml-[6px]">
                70<span className="text-[1rem] align-top	">%</span>
              </span>
            </div>
            <button className="text-[0.6rem]">
              Mua ngay
              <span className="bg-orange-500/80 px-[4px] pb-[1px] rounded-full text-white	ml-[5px] ">
                &#62;
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="flex  gap-[20px]  mx-auto ">
        <div className=" bg-black/10 flex flex-col w-1/4 gap-[10px] p-[20px] justify-center ">
          <div>
            <span className="py-[5px] px-[20px] bg-orange-500/90 text-white font-medium text-[0.8rem]">
              NEW
            </span>
          </div>
          <h3 className="uppercase leading-none	text-[1.1rem]">
            Hiệu suất <br /> cao <br /> và tiện ích
          </h3>

          <div className="text-orange-500/90 flex items-center font-bold">
            <span className="inline-block  w-[30px] text-[1.1rem] leading-none	">
              Ưu đãi
            </span>
            <span className="text-[1.8rem] ml-[6px]">
              70<span className="text-[1rem] align-top	">%</span>
            </span>
          </div>
          <div>
            <button className=" py-[5px] px-[20px] rounded-full  font-medium border text-orange-500 border-orange-500/90 flex items-center">
              Mua ngay <span className="text-[1.4rem] "> &#8594;</span>
            </button>
          </div>
          <div className="mx-auto">
            <img src={macBookIphone} alt="anh ip" className="   h-[100%]" />
          </div>
        </div>
        <div className="w-3/4">
          <div className="header-section-hot-sale flex justify-between border-b border-black/20 pb-[10px]">
            <span className="text-[1.2rem] mb-[-10px] border-b border-orange-500/90">
              <span className="text-orange-500/90">Sản Phẩm</span> Bán Chạy
            </span>
            <div>
              <ul className="flex gap-[20px]">
                <li>
                  <a className="py-[10px] px-[20px]">Tai nghe</a>
                </li>
                <li>
                  <a>Điện thoại</a>
                </li>
                <li>
                  <a>Camera</a>
                </li>
                <li>
                  <a>All</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-orange-500/90 mt-[20px] flex h-[85%] p-[10px] w-full flex-nowrap gap-[10px] overflow-x-scroll">
            {/* item */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>
      <section className="my-[30px]">
        <div className="flex justify-between border-b border-black/20 py-[10px] ">
          <span className="text-[1.2rem] mb-[-10px] border-b border-orange-500/90">
            <span className="text-orange-500/90">Sản Phẩm</span> Phổ biến
          </span>
          <div>
            <ul className="flex gap-[10px]">
              <li>
                <a href="" className="py-[5px] px-[15px]">
                  Tai nghe
                </a>
              </li>
              <li>
                <a href="" className="py-[5px] px-[15px]">
                  Điện thoại
                </a>
              </li>
              <li>
                <a href="" className="py-[5px] px-[15px]">
                  camera
                </a>
              </li>
              <li>
                <a href="" className="py-[5px] px-[15px]">
                  Phụ kiện
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* header section */}
        <div className="border border-orange-500/90 mt-[20px] flex h-[85%] p-[10px] w-full flex-nowrap gap-[10px] overflow-x-scroll">
          {/* item */}
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
      <section>
        <div className="flex gap-[20px]">
          <div className="bg-backgroundImageBannerLeft w-[50%] h-[30vh] flex items-center justify-between p-[10px]">
            <div className="text-white">
              <span className="uppercase">Tính năng thông minh tiện ích </span>
              <p className="text-[0.9rem]">
                Chỉ từ{" "}
                <span className="text-orange-500/90 text-[1rem]">
                  5,690,000<span className="align-top	text-[0.7rem]">₫</span>
                </span>
              </p>
              <button>Mua ngay</button>
            </div>
            <div className="">
              <img src={imgClock} alt="ảnh banner" className="h-[25vh]" />
            </div>
          </div>
          <div className="bg-backgroundImageBannerLeft w-[50%] h-[30vh] flex items-center justify-between p-[10px]">
            <div className="text-white">
              <span className="uppercase">Thiết kế đẹp mắt </span>
              <p className="text-[0.9rem]">
                Chỉ từ{" "}
                <span className="text-orange-500/90 text-[1rem]">
                  1,490,000<span className="align-top	text-[0.7rem]">₫</span>
                </span>
              </p>
              <button>Mua ngay</button>
            </div>
            <div className="">
              <img src={imgAccessory} alt="ảnh banner" className="h-[20vh]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
