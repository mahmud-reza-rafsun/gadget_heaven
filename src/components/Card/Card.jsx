import { NavLink } from "react-router-dom";

const Card = ({ items }) => {
  const { name, image, price, id } = items || [];
  return (
    <div className="card bg-base-100 p-3 lg:p-4 shadow-2xl">
      <figure className="bg-gray-100 p-2 lg:p-4 rounded-md">
        <img
          className="h-[100px] lg:h-[150px] rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-1 py-4">
        <h2 className="font-semibold text-base lg:text-lg">{name}</h2>
        <p className="font-semibold text-sm lg:text-base">Price: {price}</p>
        <div className="mt-3">
          <NavLink
            to={`/gadgetDetails/${id}`}
            className="border border-[#9538e2] rounded-4xl text-sm px-3 py-1 lg:py-2 text-[#9538e2] font-medium"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
