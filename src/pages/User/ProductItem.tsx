import spHotSale_1 from "@/assets/img/products-hot-sale/sp-1.png";

const ProductItem = () => {
  return (
    <>
      <div className="max-w-[200px] flex-shrink-0 basis-[1/5] border-r p-[10px]">
        <a href="">
          <img src={spHotSale_1} alt="" className="h-[25vh]" />
        </a>
        <a href="">
          <h3 className="text-center">
            Timex Easy Reader 38mm Leather Strap Watch
          </h3>
        </a>
        <div className="text-orange-500/90 font-medium">
          (<span className="text-black/60">2,000,000</span>
          <span className="align-top text-[0.8rem]">đ </span>
          1,800,000
          <span className="align-top  text-[0.8rem]">đ</span>)
        </div>
        <div className="flex gap-[10px] items-center justify-center">
          <button className=" inline-block text-orange-500/90 py-[6px] px-[15px] border rounded-full border-orange-500 text-[0.8rem] mt-[10px]">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className=" inline-block text-orange-500/90 py-[6px] px-[15px] border rounded-full border-orange-500 text-[0.8rem] mt-[10px]">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
