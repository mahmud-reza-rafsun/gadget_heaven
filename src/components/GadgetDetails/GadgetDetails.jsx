import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { setAddToCart, setAddWishlist } from "../../Utility";

const GadgetDetails = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const allGadgets = data.find((product) => product.id == category);
  const { name, image, price, rating, status, specification, description } =
    allGadgets || {};
  const handleAddToCart = (allGadgets) => {
    setAddToCart(allGadgets);
  };
  const handleAddWishlist = (allGadgets) => {
    setAddWishlist(allGadgets);
  };
  return (
    <div className="mt-16 bg-[#9538e2] py-16">
      <div className=" max-w-6xl mx-auto h-[250px]">
        <div className="text-center px-52 text-white space-y-3">
          <h2 className="text-2xl lg:text-4xl font-bold ">Product Details</h2>
          <p>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="w-[350px] lg:w-[1100px] absolute top-[380px] lg:top-1/2 left-0  right-0 z-40 m-auto">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex items-center gap-10">
            <div>
              <img className="h-[350px] rounded-lg" src={image} alt="" />
            </div>
            <div className="space-y-2.5">
              <h2 className="text-3xl font-semibold">{name}</h2>
              <p className="font-semibold text-md">Price: ${price}</p>
              <p
                className={`border border-[#309C08] bg-[#309C081A] text-[#309C08] rounded-3xl font-semibold py-1 text-sm px-3 text-center w-28`}
              >
                {status}
              </p>
              <p className="text-gray-500 ">{description}</p>
              <div>
                <h2 className="text-lg font-semibold">Specification:</h2>
                <span className="text-gray-600 text-sm font-normal">
                  {specification.map((s, idx) => (
                    <li typeof="number" key={idx}>
                      {s}
                    </li>
                  ))}
                </span>
              </div>
              <div>
                <span className="font-semibold">Rating</span>
                <div className="flex items-center gap-4">
                  <div className="">
                    <div className="rating text-sm">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="1 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="2 star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="3 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="4 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="5 star"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-200 p-2 rounded-2xl text-sm text-black">
                    {rating}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <button
                    onClick={() => handleAddToCart(allGadgets)}
                    className="bg-[#9538e2] flex gap-2 items-center text-white px-4 py-2 cursor-pointer font-semibold text-sm rounded-3xl"
                  >
                    <span>Add To Cart</span>
                    <span className="text-lg">
                      <PiShoppingCartLight />
                    </span>
                  </button>
                </div>
                <div className={`p-3 bg-gray-100 rounded-full cursor-pointer`}>
                  <span onClick={() => handleAddWishlist(allGadgets)}>
                    <FaRegHeart />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
