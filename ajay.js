const addToCart = (currentCart, productToAdd) => {
  const isExist = currentCart.find((item) => item.id === productToAdd.id);

  if (isExist) {
    // Agar mil gaya, toh purani cart ko map karo aur qty badhao
    return currentCart.map((item) =>
      item.id === productToAdd.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  // Agar naya hai, toh purani cart + naya product
  return [...currentCart, { ...productToAdd, qty: 1 }]; 
};
// Test it:
const myCart = [{ id: 1, name: "Phone", qty: 1 },{ id: 2, name: "Phone", qty: 1 },{ id: 4, name: "Phone", qty: 1 }];
const newItem = { id: 2, name: "name" }; 
console.log(addToCart(myCart, newItem)); 
// Output: [{ id: 1, name: "Phone", qty: 2 }]