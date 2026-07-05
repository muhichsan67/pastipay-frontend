import { Layout } from '../components/Layout';

export function About() {
  return (
    <Layout>
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <span className="badge bg-success text-white mb-2">VISI KAMI</span>
            <h1 className="fw-bold text-primary-custom display-5">Membangun Masa Depan Pembayaran Digital</h1>
            <p className="text-variant-custom lead">PastiPay hadir untuk meredefinisi standar transaksi finansial dengan teknologi mutakhir yang aman dan inklusif di Indonesia.</p>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-3xl shadow border">
              <h4 className="fw-bold text-primary-custom">Cerita Kami</h4>
              <p className="small text-muted">Perjalanan dimulai sejak tahun 2018 dengan visi sederhana: memastikan setiap pelaku usaha memiliki akses infrastruktur pembayaran instan yang handal dan setara di seluruh nusantara.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}