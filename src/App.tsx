import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/ui/organisms/loading.organism";

const Layout = lazy(() => import('./components/templates/layout.template'));
const HomePage = lazy(() => import('./components/pages/home.page'));
const DetailBerita = lazy(() => import('./components/pages/detailberita.page'));
const VisiMisiPage = lazy(() => import('./components/pages/visimisi.page'));
const Struktur = lazy(() => import('./components/pages/struktur.page'));
const AboutCU = lazy(() => import('./components/pages/aboutcu.page'));
const AboutCUSS = lazy(() => import('./components/pages/aboutcuss.page'));
const HistoryCUSS = lazy(() => import('./components/pages/historycuss.page'));
const Pengurus = lazy(() => import('./components/pages/pengurus.page'));
const Kaisungan = lazy(() => import('./components/pages/kaisungan.page'));
const ProdukSimpanan = lazy(() => import('./components/pages/produksimpanan.page'));
const PelayananPinjaman = lazy(() => import('./components/pages/pelayananpinjaman.page'));
const LatarKomunitas = lazy(() => import('./components/pages/latarkomunitas.page'));
const Komunitas = lazy(() => import('./components/pages/komunitas.page'));
const CaraMenjadiAnggota = lazy(() => import('./components/pages/caramenjadianggota.page'));
const PengajuanAnggota = lazy(() => import('./components/pages/pengajuananggota.page'));
const ListBerita = lazy(() => import('./components/pages/listberita.page'));
const KisahSukses = lazy(() => import('./components/pages/kisahsukses.page'));
const Kalkulator = lazy(() => import('./components/pages/kalkulator.page'));
const DetailTestimoni = lazy(() => import('./components/pages/detailtestimoni.page'));
const Kontak = lazy(() => import('./components/pages/kontak.page'));
const GaleriFoto = lazy(() => import('./components/pages/galerifoto.page'));
const DetailAgenda = lazy(() => import('./components/pages/detailAgenda.page'));

import "./assets/global.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loading />}><Layout /></Suspense>}>
          <Route path='/' element={<HomePage />} />
          <Route path='/berita/:idBerita' element={<DetailBerita />} />
          <Route path='/kisah-sukses/:slugTestimoni' element={<DetailTestimoni />} />
          <Route path='/visi-misi' element={<VisiMisiPage />} />
          <Route path='/struktur-organisasi' element={<Struktur />} />
          <Route path='/about-cu' element={<AboutCU />} />
          <Route path='/about-cuss' element={<AboutCUSS />} />
          <Route path='/history-cuss' element={<HistoryCUSS />} />
          <Route path='/profil-pengurus' element={<Pengurus />} />
          <Route path='/kaisungan' element={<Kaisungan />} />
          <Route path='/produk-simpanan' element={<ProdukSimpanan />} />
          <Route path='/pelayanan-pinjaman' element={<PelayananPinjaman />} />
          <Route path='/latar-komunitas' element={<LatarKomunitas />} />
          <Route path='/komunitas' element={<Komunitas />} />
          <Route path='/cara-menjadi-anggota' element={<CaraMenjadiAnggota />} />
          <Route path='/pengajuan-anggota' element={<PengajuanAnggota />} />
          <Route path='/cu-news' element={<ListBerita />} />
          <Route path='/kisah-sukses' element={<KisahSukses />}/>
          <Route path='/kalkulator' element={<Kalkulator />} />
          <Route path='/kontak' element={<Kontak />} />
          <Route path='/galeri-foto' element={<GaleriFoto />} />
          <Route path='/detail-agenda/:tanggal' element={<DetailAgenda />} />
        </Route>
      </Routes>
    </Router>
  )
}