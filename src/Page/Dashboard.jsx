import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getAddToCart } from "../Utility";
import { useLoaderData } from "react-router-dom";
import DashboardCart from "../components/DashboardCart/DashboardCart";

const Dashboard = () => {
  const [gadgets, setGadgets] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const setAddCart = getAddToCart();
    setGadgets(setAddCart);
  }, [data]);
  return (
    <div>
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
                    {gadgets.map((gadget) => (
                      <DashboardCart key={gadget.id} gadget={gadget} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
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
