import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  getAddToCart,
  getAddTWishlist,
  removeAddToCart,
  setAddWishlist,
} from "../Utility";
import { GoTrash } from "react-icons/go";

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  console.log(cart.id);
  useEffect(() => {
    const setAddCart = getAddToCart();
    const setAddWishlist = getAddTWishlist();
    setWishlist(setAddWishlist);
    setCart(setAddCart);
  }, []);

  const deleteAddToCart = (id) => {
    removeAddToCart(id);
    const removeCart = getAddToCart();
    setCart(removeCart);
  };
  const deleteAddToWishlist = (id) => {
    removeWishlist(id);
    const removeWishlist = setAddWishlist();
    setWishlist(removeWishlist);
  };
  return (
    <div className="">
      <div className="mt-16 py-8 bg-[#9538e2]">
        <div className=" max-w-6xl mx-auto h-[150px]">
          <div className="text-center text-white space-y-3">
            <h2 className="text-2xl lg:text-4xl font-bold ">Dashboard</h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart <br /> devices to the coolest accessories,
              we have it all!
            </p>
            <div>
              <Tabs>
                <TabList className="flex justify-center items-center gap-3 mb-16">
                  <Tab
                    className="btn border-1 border-white rounded-4xl"
                    selectedClassName="bg-violet-500 text-white border-violet-700"
                  >
                    Cart
                  </Tab>
                  <Tab
                    className="btn border-1 border-white rounded-4xl "
                    selectedClassName="bg-violet-500 text-white border-violet-700"
                  >
                    Wishlist
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className=" text-black">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">Cart</h2>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div>
                          <h2 className="text-lg font-semibold">Price</h2>
                        </div>
                        <div className="flex gap-3 items-center">
                          <button className="btn rounded-4xl bg-white border border-[#9538e2] text-[#9538e2]">
                            Sort by Pirce
                          </button>
                          <button className="btn rounded-4xl bg-[#9538e2] border border-[#9538e2] text-white">
                            Purches
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {cart.map((cart) => (
                      <div
                        key={cart.id}
                        className="bg-white my-5 p-6 flex justify-between items-center rounded-md text-black"
                      >
                        <div className="flex gap-6">
                          <div>
                            <img
                              className="w-[150px] h-[100px] object-cover rounded-md"
                              src={cart.image}
                              alt=""
                            />
                          </div>
                          <div className="text-left space-y-2">
                            <h1 className="text-xl font-semibold">
                              {cart.name}
                            </h1>
                            <p className="text-gray-500">{cart.description}</p>
                            <span className="font-semibold">
                              Price: ${cart.price}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span onClick={() => deleteAddToCart()}>
                            <GoTrash className="text-4xl text-rose-600 cursor-pointer border border-rose-600 rounded-full p-2" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                {/* wish list */}
                <TabPanel>
                  <div className=" text-black">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold">Wishlist</h2>
                      </div>
                    </div>
                    <div>
                      <div>
                        {wishlist.map((wishlist) => (
                          <div
                            key={wishlist.id}
                            className="bg-white my-5 p-6 flex justify-between items-center rounded-md text-black"
                          >
                            <div className="flex gap-6">
                              <div>
                                <img
                                  className="w-[150px] h-[100px] object-cover rounded-md"
                                  src={wishlist.image}
                                  alt=""
                                />
                              </div>
                              <div className="text-left space-y-2">
                                <h1 className="text-xl font-semibold">
                                  {wishlist.name}
                                </h1>
                                <p className="text-gray-500">
                                  {wishlist.description}
                                </p>
                                <span className="font-semibold">
                                  Price: ${wishlist.price}
                                </span>
                              </div>
                            </div>
                            <div>
                              <span onClick={() => deleteAddToWishlist()}>
                                <GoTrash className="text-4xl text-rose-600 cursor-pointer border border-rose-600 rounded-full p-2" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
