import React from "react";
import banner from "../assets/flattened/products.png";
import { NewsCardGrid } from "../components/NewsCard";
import { newsItems } from "../constants/news";

const ProductsJadiPage = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner Fasilitas"
          className="w-full h-auto object-cover"
        />
      </div>
      <section className="sm:p-[4rem] p-8 flex flex-col gap-y-12">
        <h3 className="mb-6 text-xl text-[#3A55B4] font-bold">Product Jadi</h3>
        <NewsCardGrid
          newsItems={newsItems}
          itemsPerPage={6}
          needPagination={true}
        />
      </section>
    </div>
  );
};

export default ProductsJadiPage;
