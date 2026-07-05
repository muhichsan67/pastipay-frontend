import { Layout } from '../components/Layout';

export function Home() {
  return (
    <Layout>
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'radial-gradient(at 0% 0%, rgba(172, 245, 157, 0.15) 0, transparent 50%)' }}>
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-secondary-container-custom text-success px-3 py-2 rounded-pill mb-3">TERLISENSI & DIAWASI OLEH BI</span>
              <h1 className="display-4 fw-extrabold text-primary-custom mb-3">
                Payment Gateway <br /><span className="text-success">Terbaik</span> untuk Bisnis Anda
              </h1>
              <p className="lead text-variant-custom mb-4">Terima pembayaran lebih cepat, aman, dan mudah dengan solusi lokal terintegrasi.</p>
              <div className="d-flex gap-3">
                <button className="btn bg-primary-custom text-white btn-lg px-4 rounded-xl">Daftar Sekarang</button>
                <button className="btn btn-outline-success btn-lg px-4 rounded-xl">Hubungi Sales</button>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Statis Live Dashboard Card */}
              <div className="bg-white p-4 rounded-3xl shadow border">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex gap-1"><span className="p-1 bg-danger rounded-circle"></span><span className="p-1 bg-warning rounded-circle"></span></div>
                  <span className="badge bg-primary text-white">Live Dashboard</span>
                </div>
                <p className="text-muted small mb-1">Total Pendapatan</p>
                <h3 className="fw-bold text-primary-custom">Rp 84.250.000</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}