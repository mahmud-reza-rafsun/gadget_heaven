import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#9538e2] h-[420px] lg:h-[550px]">
        <div className=" max-w-6xl mt-12 mx-auto text-white">
          <div className="px-8 lg:px-52 py-12 text-center space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div
              className="bg-white rounded-4xl w-32 py-2 lg:text-base text-sm  text-[#9538e2] font-semibold m-auto
           cursor-pointer"
            >
              Shop Now
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350px] lg:w-[800px] absolute top-[380px] lg:top-96 left-0  right-0 z-40 m-auto">
        <div className="border-14 border-transparent bg-white rounded-2xl">
          <img className="rounded-2xl" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
