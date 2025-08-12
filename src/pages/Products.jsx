import React from "react";
import { Footer, Navbar, Product } from "../components";
import ProductCard from "../components/ProductCard";

const dummyProduct = [
  {
    id: 1,
    name: "Classic T-Shirt",
    image:
      "https://media.istockphoto.com/id/637540646/photo/drinking-coffee-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=AWMlqFB4vEpAhyJXuGjS2ihEyB4PEr580-3Mx-FKtPI=",
    variants: [
      { name: "White", price: 24.99, inStock: true },
      { name: "Black", price: 26.99, inStock: false },
      { name: "Blue", price: 25.99, inStock: true },
    ],
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    image:
      "https://media.istockphoto.com/id/1181269692/photo/portrait-of-a-young-bearded-man-with-a-black-hat-ain-black-hoodie-in-the-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=A8vGRMwnubDV8eoeD29d6JwuU5L6Mg4jnbXoVkuz4xM=",
    variants: [
      { name: "Small", price: 49.99, inStock: false },
      { name: "Medium", price: 54.99, inStock: true },
      { name: "Large", price: 59.99, inStock: true },
    ],
  },
];
const Products = () => {
  return (
    <>
      <Navbar />
      <Product />
      <div className="container my-4">
        <div className="row g-4 justify-content-center">
          {dummyProduct.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
