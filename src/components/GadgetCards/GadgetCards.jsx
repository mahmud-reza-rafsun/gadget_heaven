import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const [gadgets, setGadgets] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (gadget) => gadget.category === category
      );
      setGadgets(filteredByCategory);
    } else {
      setGadgets(data);
    }
  }, [category, data]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {gadgets.map((items) => (
          <Card key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default GadgetCards;
