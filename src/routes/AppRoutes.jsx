import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Berita from "../pages/Berita";
import FormPendaftaran from "../pages/FormPendaftaran";
import FormPendaftaranBerhasil from "../pages/FormPendaftaranBerhasil";
import KalenderAkademik from "../pages/KalenderAkademik";
import SambutanRektor from "../pages/SambutanRektor";

import StrukturOrganisasi from "../pages/StrukturOrganisasi";
import VisiMisi from "../pages/VisiMisi";
import MainLayout from "../layouts/MainLayout";
import Fasilitas from "../pages/Fasilitas";

import PendaftaranOnline from "../pages/PendaftaranOnline";
import BeritaDetailPage from "../pages/BeritaDetailPage";
import ProductsMentahPage from "../pages/ProductsMentahPage";
import ProductsJadiPage from "../pages/ProductsJadiPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Testimoni from "../pages/Testimoni";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";


const AppRoutes = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk-jadi" element={<ProductsJadiPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/produk-mentah" element={<ProductsMentahPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/pendaftaran-online" element={<PendaftaranOnline />} />
          <Route path="/form-pendaftaran" element={<FormPendaftaran />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/testimoni" element={<Testimoni />}/>
          <Route
            path="/form-pendaftaran-berhasil"
            element={<FormPendaftaranBerhasil />}
          />
          <Route path="/kalender-akademik" element={<KalenderAkademik />} />
          <Route path="/sambutan-rektor" element={<SambutanRektor />} />
          {/* <Route path="/sejarah" element={<Sejarah />} /> */}
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
