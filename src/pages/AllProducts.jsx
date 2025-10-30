import React from "react";
import Nav from "../components/shared/Nav";
import Footer from "../components/shared/Footer";
import ProductCard from "../components/ProductCard";
import FilterCard from "../components/FilterCard";

const AllProducts = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <div className="grid grid-cols-12 gap-5 container mx-auto my-5">
        <div className="col-span-2">
            <FilterCard/>
        </div>
        <div className="col-span-10 bg-white">
          <div className="flex justify-between  p-5">
            <div className="">
              <input
                type="text"
                placeholder="search anything..."
                className="border-2 rounded-md outline-0 border-orange-500 px-5 py-2"
              />
            </div>

            <div className="">
              <select
                name=""
                id=""
                className="border border-orange-500 rounded-md p-2 outline-0 "
              >
                <option value="">Sort By</option>
                <option value="">Sort Name</option>
                <option value="">Sort Price</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AllProducts;
