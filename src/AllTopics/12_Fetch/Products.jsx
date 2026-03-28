import { useEffect, useState } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  async function getProducts() {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      setAllProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">All Products</h1>

      {allProducts.length === 0 ? (
        <p className="text-center">No Products Available</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {allProducts.map((ele) => {
            return (
              <div
                key={ele.id}
                className="bg-white shadow-lg rounded-lg p-4 text-black"
              >
                <img
                  src={ele.thumbnail}
                  alt={ele.title}
                  className="w-full h-40 object-cover rounded"
                />

                <h2 className="font-semibold mt-2">{ele.title}</h2>

                <p className="text-green-600 font-bold">₹{ele.price}</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Products;
