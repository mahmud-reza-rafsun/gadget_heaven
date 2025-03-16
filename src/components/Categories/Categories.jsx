import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="tabs tabs-box flex flex-col w-42 p-4 space-y-2">
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            className={({ isActive }) =>
              `px-4 text-sm lg:text-base py-1 font-semibold ${
                isActive
                  ? "bg-[#9538e2] rounded-4xl text-white font-semibold "
                  : "text-black px-4 py-1 font-semibold bg-gray-200 rounded-4xl"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
