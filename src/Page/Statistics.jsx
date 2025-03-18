import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dell XPS 15",
    price: 1800,
  },
  {
    name: "HP Spectre x360",
    price: 1600,
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 1400,
  },
  {
    name: "Google Pixel 8 Pro",
    price: 1300,
  },
  {
    name: "Logitech MX Master 3S",
    price: 120,
  },
  {
    name: "Razer BlackShark V2",
    price: 100,
  },
  {
    name: "Apple Watch Series 9",
    price: 500,
  },
  {
    name: "Samsung Galaxy Watch 6",
    price: 400,
  },
  {
    name: "MacBook Pro 16 M3",
    price: 2500,
  },
  {
    name: "MacBook Air 15 M2",
    price: 1500,
  },
  {
    name: "iPhone 15 Pro Max",
    price: 1600,
  },
  {
    name: "iPhone 14",
    price: 900,
  },
  {
    name: "Asus ROG Zephyrus G14",
    price: 2200,
  },
  {
    name: "Keychron K8 Pro",
    price: 120,
  },
];

const Statistics = () => {
  return (
    <div className="mt-16">
      <div className="mt-16 py-8 bg-[#9538e2]">
        <div className=" max-w-6xl mx-auto h-[150px]">
          <div className="text-center text-white space-y-3 px-52">
            <h2 className="text-2xl lg:text-4xl font-bold ">Statistics</h2>
            <p>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="mt-28">
            <div style={{ width: "100%", height: 400 }}>
              <ResponsiveContainer>
                <ComposedChart
                  data={data}
                  margin={{ top: 20, right: 80, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="#d3a7f7" />
                  <XAxis
                    dataKey=""
                    label={{
                      value: "Pages",
                      position: "insideBottomRight",
                      offset: 0,
                    }}
                    scale="band"
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    fill="#9538e2"
                    stroke="#9538e2"
                  />
                  <Bar dataKey="pv" barSize={20} fill="#9538e2" />
                  <Line type="monotone" dataKey="uv" stroke="#9538e2" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
