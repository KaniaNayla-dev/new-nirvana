import banner from "../assets/flattened/visi-misi.png";

const VisiMisi = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img
          src={banner}
          alt="Banner berita"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="sm:p-[4rem] text-justify p-8  flex flex-col gap-y-10 text-lg text-[#8A8083]">
        <section className="">
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">Visi</h5>
          <p>
            Menjadi perusahaan terkemuka di bidang Industri pengolahan Perikanan
            dan berkelanjutan, Inovatif, dan Berdaya Saing Global, serta
            berkontribusi pada kesejahteraan masyarakat dan kelestarian sumber
            daya laut.
          </p>
        </section>
        <section>
          <h5 className="text-[#3A55B4] mb-4 font-bold text-lg">Misi</h5>
          <ol className="list-decimal pl-8 flex flex-col gap-y-4">
            <li>
              Menghasilkan produk perikanan yang berkualitas tinggi dan
              higienis.
            </li>
            <li>Menjadi pelopor makanan sehat berbahan dasar ikan.</li>
            <li>Memperluas lapangan kerja untuk kesejahteraan masyarakat.</li>
            <li>
              Mengekspor hasil produksi ke mancanegara dan membantu kementerian
              kelautan dan perikanan dalam program ‘Ekonomi Biru, Indonesia
              Maju’.
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default VisiMisi;
