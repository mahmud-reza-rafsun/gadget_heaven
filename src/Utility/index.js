import toast from "react-hot-toast";

const getAddToCart = () => {
  const storedCart = localStorage.getItem("add-cart");
  if (storedCart) {
    const storedCartStr = JSON.parse(storedCart);
    return storedCartStr;
  } else {
    return [];
  }
};

const setAddToCart = (allGadgets) => {
  const storedCart = getAddToCart();
  const isExist = storedCart.find((cart) => cart.id === allGadgets.id);
  console.log(isExist);
  if (isExist) return toast.error("Already Added");
  storedCart.push(allGadgets);
  localStorage.setItem("add-cart", JSON.stringify(storedCart));
  toast.success("added");
};

export { setAddToCart, getAddToCart };
