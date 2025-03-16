import React from "react";
import Banner from "../components/Banner/Banner";
import Heading from "../components/Heading/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto">
        <Heading title={"Explore Cutting-Edge Gadgets"} />
        {/* category */}
        <div className="flex gap-3 lg:gap-7 py-8">
          <Categories categories={categories} />
          {/* dynamic routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
