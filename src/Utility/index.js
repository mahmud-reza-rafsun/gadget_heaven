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
  if (isExist) return toast.error(`${allGadgets.name} Already Added`);
  storedCart.push(allGadgets);
  localStorage.setItem("add-cart", JSON.stringify(storedCart));
  toast.success(`${allGadgets.name} Successfully Added`);
};

const removeAddToCart = (id) => {
  const storedAddToCart = getAddToCart();
  const removeAddToCart = storedAddToCart.filter((items) => items.id !== id);
  localStorage.removeItem("add-cart", JSON.stringify(removeAddToCart));
  toast.success(`Remove Successfully`);
};

const getAddTWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    const storedCartStr = JSON.parse(storedWishlist);
    return storedCartStr;
  } else {
    return [];
  }
};

const setAddWishlist = (allGadgets) => {
  const storedWishlist = getAddTWishlist();
  const isExist = storedWishlist.find((cart) => cart.id === allGadgets.id);
  if (isExist) return toast.error(`${allGadgets.name} Already Added`);
  storedWishlist.push(allGadgets);
  localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  toast.success(`${allGadgets.name} Successfully Added`);
};

const removeWishlist = (id) => {
  const storedWishlist = getAddToCart();
  const removeAddToWishlist = storedWishlist.filter((items) => items.id !== id);
  localStorage.removeItem("add-cart", JSON.stringify(removeAddToWishlist));
  toast.success(`Remove Successfully`);
};

export {
  setAddToCart,
  getAddToCart,
  removeAddToCart,
  setAddWishlist,
  getAddTWishlist,
  removeWishlist,
};
