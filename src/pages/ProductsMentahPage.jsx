import banner from "../assets/flattened/products.png";
import katalog from "../assets/images/catalog.png";

const ProductsMentahPage = () => {
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
        <h3 className="mb-6 text-xl text-[#3A55B4] font-bold">Katalog</h3>
        <div className="flex w-full justify-center px-40">
          <img src={katalog} alt="Kalender Akademik" className="" />
        </div>

        <a
          href={katalog}
          download="Kalender Akademik.png"
          className="mt-4 inline-block text-[#3A55B4] underline pl-40"
        >
          Download
        </a>
      </section>
    </div>
  );
};

export default ProductsMentahPage;
