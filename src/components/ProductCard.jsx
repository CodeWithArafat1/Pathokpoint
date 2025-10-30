import React from "react";



const ProductCard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

     
      <div className="relative bg-gray-50 flex items-center justify-center p-4">
        <img
          src={`https://i.ytimg.com/vi/jIlgMHWNitc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLClLEdnSAYMJwOKM7h0NMmzM3HPkQ`}
          alt="title"
          className="w-full object-cover"
        />

        <div
          className="absolute top-0 right-4 bg-red-500 text-white font-bold text-sm px-3 py-5 z-10"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0)",
          }}
        >
          30%
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          নবীজির রামাদান
        </h3>

        <p className="text-sm text-gray-500 mb-3 truncate">
          by শাইখ হামদান আল হুমাইদি রহ.
        </p>

        <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          New
        </span>

        <div className="flex items-center gap-2 mt-3 mb-4">
          <span className="text-2xl font-bold text-orange-600">196৳</span>
          <span className="text-md text-gray-400 line-through">280৳</span>
        </div>

        <button className="w-full bg-orange-500 text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
