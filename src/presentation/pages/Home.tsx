import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

// MOCKUP VISUAL DASHBOARD (Sisi Kanan Hero)
const LiveDashboardMockup = () => {
  return (
    <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white position-relative" style={{ minHeight: '450px', zIndex: 2 }}>
      {/* Tombol Kontrol Browser */}
      <div className="position-absolute top-0 start-0 m-4 d-flex gap-2">
        <span className="badge rounded-circle p-1" style={{ width: '12px', height: '12px', backgroundColor: '#FF5F56' }}></span>
        <span className="badge rounded-circle p-1" style={{ width: '12px', height: '12px', backgroundColor: '#FFBD2E' }}></span>
        <span className="badge rounded-circle p-1" style={{ width: '12px', height: '12px', backgroundColor: '#27C93F' }}></span>
      </div>

      {/* Badge Live Dashboard */}
      <div className="position-absolute top-0 end-0 m-4 d-flex align-items-center gap-2 px-3 py-1 bg-light rounded-pill border">
        <span className="spinner-grow spinner-grow-sm text-success" role="status" style={{ width: '8px', height: '8px' }}></span>
        <span className="text-success fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>LIVE DASHBOARD</span>
      </div>

      {/* Isi Utama Dashboard */}
      <div className="text-start mt-4">
        <p className="text-muted mb-1 small fw-medium">Total Pendapatan</p>
        <h2 className="display-6 fw-bold mb-2 text-dark">
          Rp 84.250.000
        </h2>
        <p className="text-success small fw-semibold mb-0">
          <i className="bi bi-arrow-up-short"></i>+12.5% dari bulan lalu
        </p>

        {/* Filter Dropdown Bulan Ini */}
        <button className="btn btn-sm btn-outline-secondary px-3 py-1 position-absolute rounded-pill bg-white shadow-sm" style={{ top: '100px', right: '30px', fontSize: '12px' }}>
          Bulan Ini <i className="bi bi-chevron-down ms-1"></i>
        </button>
      </div>

      {/* Grid Statistik Pendukung */}
      <div className="row g-3 mt-4 text-start">
        <div className="col-4">
          <div className="p-3 rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#FCF9EE' }}>
            <h5 className="fw-bold mb-1 text-dark">1.284</h5>
            <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Transaksi</p>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#FCF9EE' }}>
            <h5 className="fw-bold mb-1 text-dark">98.7%</h5>
            <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Sukses</p>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 rounded-3 border-0 shadow-sm" style={{ backgroundColor: '#FCF9EE' }}>
            <h5 className="fw-bold mb-1 text-dark">16</h5>
            <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Pending</p>
          </div>
        </div>
      </div>

      {/* Daftar Transaksi Terbaru */}
      <div className="mt-4 text-start">
        <p className="fw-bold text-muted mb-3" style={{ fontSize: '11px', letterSpacing: '1px' }}>TRANSAKSI TERBARU</p>
        
        {/* GoPay */}
        <div className="d-flex align-items-center gap-3 border-bottom pb-3 mb-3">
          <div className="rounded-3 d-flex align-items-center justify-content-center text-success" style={{ width: '40px', height: '40px', backgroundColor: '#E8F5E9' }}>
            <i className="bi bi-wallet2 fs-5"></i>
          </div>
          <div>
            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '14px' }}>GoPay</h6>
            <p className="text-muted mb-0" style={{ fontSize: '11px' }}>2 menit lalu</p>
          </div>
          <div className="ms-auto text-end">
            <h6 className="fw-bold text-success mb-0" style={{ fontSize: '14px' }}>+Rp 150.000</h6>
            <span className="badge text-success bg-success-subtle border border-success-subtle" style={{ fontSize: '9px' }}>SUKSES</span>
          </div>
        </div>

        {/* Transfer BCA */}
        <div className="d-flex align-items-center gap-3">
          <div className="rounded-3 d-flex align-items-center justify-content-center text-primary" style={{ width: '40px', height: '40px', backgroundColor: '#E3F2FD' }}>
            <i className="bi bi-bank fs-5"></i>
          </div>
          <div>
            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '14px' }}>Transfer BCA</h6>
            <p className="text-muted mb-0" style={{ fontSize: '11px' }}>8 menit lalu</p>
          </div>
          <div className="ms-auto text-end">
            <h6 className="fw-bold text-success mb-0" style={{ fontSize: '14px' }}>+Rp 540.000</h6>
            <span className="badge text-success bg-success-subtle border border-success-subtle" style={{ fontSize: '9px' }}>SUKSES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bank data testimoni lengkap untuk diacak
const ALL_TESTIMONIALS = [
  { id: 1, name: "Andi Hermawan", role: "CEO TokoHijau", initial: "A", text: '"Integrasi API PastiPay sangat praktis. Sistem checkout web kami menjadi jauh lebih mulus, dan pembeli merasa aman."', stars: 5 },
  { id: 2, name: "Siti Aminah", role: "Owner HijabStyle", initial: "S", text: '"Sangat terbantu dengan fitur penarikan otomatis harian. Cashflow bisnis baju online saya sekarang menjadi jauh lebih stabil."', stars: 5 },
  { id: 3, name: "Faisal Basri", role: "Developer Lead FoodYuk", initial: "F", text: '"Fitur notifikasi real-time transaksi sukses sangat akurat. CS PastiPay juga responsif membantu saat kami kesulitan coding."', stars: 5 },
  { id: 4, name: "Budi Santoso", role: "Founder KopiLokal", initial: "B", text: '"Biaya MDR sangat kompetitif dibanding gateway lain. Pas sekali untuk margin bisnis UMKM kuliner seperti kami."', stars: 5 },
  { id: 5, name: "Clarissa Utama", role: "Marketing GadgetIn", initial: "C", text: '"Pelanggan kami senang karena pilihan e-wallet sangat lengkap. Sekali klik lewat QRIS, pembayaran langsung beres."', stars: 5 },
  { id: 6, name: "Dewi Lestari", role: "CFO TiketSini", initial: "D", text: '"Keamanan PCI-DSS dari PastiPay membuat kami tenang memproses ribuan transaksi tiket setiap harinya tanpa kendala."', stars: 5 }
];

// KOMPONEN UTAMA BERANDA (Dipanggil oleh App.tsx)
export function Home() {

  return (
    <Layout>
      {/* 2. HERO SECTION */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(243,240,223,0.5) 0%, rgba(252,249,238,1) 100%)' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Kolom Kiri: Teks */}
            <div className="col-lg-6 text-start">
              <span className="badge rounded-pill px-3 py-2 text-success fw-bold border mb-4" style={{ backgroundColor: '#E8F5E9', fontSize: '12px', letterSpacing: '0.5px' }}>
                <i className="bi bi-shield-check me-2"></i>TERLISENSI & DIAWASI OLEH BI
              </span>
              
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#013a11', lineHeight: '1.2' }}>
                Payment Gateway Terbaik untuk Bisnis Online Anda
              </h1>
              
              <p className="lead text-muted mb-5" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Terima pembayaran lebih cepat, aman, dan mudah dengan solusi payment gateway lokal Indonesia. Dukung 20+ metode pembayaran dalam satu platform.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-5">
                <a href="#" className="btn btn-lg rounded-pill px-4 text-white fw-semibold border-0 d-flex align-items-center gap-2" style={{ backgroundColor: '#013a11', fontSize: '16px' }}>
                  Daftar Sekarang <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#" className="btn btn-lg btn-outline-dark rounded-pill px-4 fw-semibold" style={{ fontSize: '16px' }}>
                  Hubungi Sales
                </a>
              </div>

              {/* Baris Statistik Terpadu */}
              <div className="row g-4 pt-4 border-top">
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">10.000+</h4>
                  <p className="text-muted small mb-0">Merchant Aktif</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">Rp 2T+</h4>
                  <p className="text-muted small mb-0">Volume Transaksi</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold mb-0 text-dark">99%</h4>
                  <p className="text-muted small mb-0">Uptime Service</p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Visual Live Dashboard */}
            <div className="col-lg-6 text-center position-relative">
              <div className="position-absolute translate-middle-y top-50 start-50 rounded-circle" style={{ width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(4, 58, 17, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
              <LiveDashboardMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PARTNERS ROW */}
      <section className="py-4 bg-white border-y">
        <div className="container text-center">
          <p className="text-muted small fw-bold text-uppercase mb-4" style={{ letterSpacing: '1px' }}>Menerima Pembayaran Dari Berbagai Layanan</p>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 opacity-75">
            <span className="fw-bold text-muted fs-4">QRIS</span>
            <span className="fw-bold text-muted fs-4">BCA</span>
            <span className="fw-bold text-muted fs-4">Mandiri</span>
            <span className="fw-bold text-muted fs-4">BNI</span>
            <span className="fw-bold text-muted fs-4">ShopeePay</span>
            <span className="fw-bold text-muted fs-4">GoPay</span>
            <span className="fw-bold text-muted fs-4">DLL</span>
          </div>
        </div>
      </section>

      {/* 4. FEATURE GRID 1 ("Semua yang Anda Butuhkan") */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5 mx-auto" style={{ maxWidth: '700px' }}>
            <span className="badge rounded-pill px-3 py-2 text-success fw-bold border mb-3" style={{ backgroundColor: '#E8F5E9', fontSize: '11px' }}>FITUR UTAMA</span>
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#013a11' }}>Semua yang Anda Butuhkan</h2>
            <p className="text-muted fs-5">Kelola seluruh transaksi bisnis Anda dengan solusi payment gateway terbaik dari kami.</p>
          </div>

          <div className="row g-4">
            {/* Fitur 1 */}
            <div className="col-md-4 text-start">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white">
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '50px', height: '50px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-wallet fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-dark">Ekspansi Pembayaran</h4>
                <p className="text-muted mb-0">Terima pembayaran dari berbagai metode lokal, e-wallet, bank transfer, dan kartu kredit secara global.</p>
              </div>
            </div>

            {/* Fitur 2 */}
            <div className="col-md-4 text-start">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white">
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '50px', height: '50px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-lightning-charge fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-dark">Pendaftaran Mudah</h4>
                <p className="text-muted mb-0">Proses registrasi instan tanpa ribet, go-live dalam hitungan jam untuk memulai bisnis baru Anda.</p>
              </div>
            </div>

            {/* Fitur 3 */}
            <div className="col-md-4 text-start">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 bg-white">
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '50px', height: '50px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-shield-lock fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-dark">Integrasi Keamanan</h4>
                <p className="text-muted mb-0">Sertifikasi keamanan tingkat internasional (PCI-DSS) untuk menjamin data merchant dan pembeli tetap aman.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE GRID 2 ("Kenapa Pilih PastiPay?") */}
      <section className="py-5 text-white" style={{ backgroundColor: '#013a11' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 fw-bold border border-white border-opacity-25 mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', fontSize: '11px' }}>TENTANG KAMI</span>
            <h2 className="display-5 fw-bold mb-3">Kenapa Pilih PastiPay?</h2>
            <p className="text-white-50 fs-5">Platform pembayaran yang andal, cepat, dan siap membantu pertumbuhan omset bisnis Anda.</p>
          </div>

          <div className="row g-4 text-start">
            {/* Why 1 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 rounded-4" style={{ backgroundColor: '#034d19' }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '45px', height: '45px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-heart fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-white">Kenyamanan Tanpa Batas</h4>
                <p className="text-white-50 mb-0">Antarmuka dashboard yang ringkas, responsif di HP/Laptop memudahkan Anda memantau keuangan dari mana saja.</p>
              </div>
            </div>

            {/* Why 2 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 rounded-4" style={{ backgroundColor: '#034d19' }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '45px', height: '45px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-clock-history fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-white">Persetujuan Cepat</h4>
                <p className="text-white-50 mb-0">Verifikasi dokumen pendaftaran super cepat, sehingga Anda tidak perlu menunda transaksi komersial perdana.</p>
              </div>
            </div>

            {/* Why 3 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 rounded-4" style={{ backgroundColor: '#034d19' }}>
                <div className="rounded-3 d-flex align-items-center justify-content-center text-white mb-4" style={{ width: '45px', height: '45px', backgroundColor: '#013a11' }}>
                  <i className="bi bi-headset fs-4"></i>
                </div>
                <h4 className="fw-bold mb-3 text-white">Dukungan Hebat</h4>
                <p className="text-white-50 mb-0">Tim bantuan CS profesional kami siap mendampingi proses integrasi teknis Anda kapan pun dibutuhkan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (SLIDER / CAROUSEL) */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 text-success fw-bold border mb-3" style={{ backgroundColor: '#E8F5E9', fontSize: '11px' }}>TESTIMONI</span>
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#013a11' }}>Dipercaya Ribuan Merchant</h2>
          </div>

          {/* Wrapper Utama Bootstrap Carousel */}
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner px-md-5">
              
              {/* SLIDE 1 (Menampilkan 3 Testimoni Pertama) */}
              <div className="carousel-item active">
                <div className="row g-4 text-start">
                  {ALL_TESTIMONIALS.slice(0, 3).map((testi) => (
                    <div className="col-md-4" key={testi.id}>
                      <div className="card h-100 p-4 border rounded-4 bg-light shadow-sm d-flex flex-column justify-content-between">
                        <div>
                          <div className="text-warning mb-3">
                            {Array.from({ length: testi.stars }).map((_, i) => (
                              <i key={i} className="bi bi-star-fill me-1"></i>
                            ))}
                          </div>
                          <p className="text-dark-50 fst-italic mb-4" style={{ fontSize: '14px' }}>{testi.text}</p>
                        </div>
                        <div className="d-flex align-items-center gap-3 border-top pt-3">
                          <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px', backgroundColor: '#013a11' }}>
                            {testi.initial}
                          </div>
                          <div>
                            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '15px' }}>{testi.name}</h6>
                            <p className="text-muted mb-0 small" style={{ fontSize: '12px' }}>{testi.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SLIDE 2 (Menampilkan 3 Testimoni Berikutnya) */}
              <div className="carousel-item">
                <div className="row g-4 text-start">
                  {ALL_TESTIMONIALS.slice(3, 6).map((testi) => (
                    <div className="col-md-4" key={testi.id}>
                      <div className="card h-100 p-4 border rounded-4 bg-light shadow-sm d-flex flex-column justify-content-between">
                        <div>
                          <div className="text-warning mb-3">
                            {Array.from({ length: testi.stars }).map((_, i) => (
                              <i key={i} className="bi bi-star-fill me-1"></i>
                            ))}
                          </div>
                          <p className="text-dark-50 fst-italic mb-4" style={{ fontSize: '14px' }}>{testi.text}</p>
                        </div>
                        <div className="d-flex align-items-center gap-3 border-top pt-3">
                          <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px', backgroundColor: '#013a11' }}>
                            {testi.initial}
                          </div>
                          <div>
                            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '15px' }}>{testi.name}</h6>
                            <p className="text-muted mb-0 small" style={{ fontSize: '12px' }}>{testi.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Tombol Navigasi Kiri (Panah) */}
            <button className="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev" style={{ width: '5%' }}>
              <div className="bg-white rounded-circle shadow border d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', color: '#013a11' }}>
                <i className="bi bi-chevron-left fs-5 fw-bold"></i>
              </div>
              <span className="visually-hidden">Previous</span>
            </button>

            {/* Tombol Navigasi Kanan (Panah) */}
            <button className="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next" style={{ width: '5%' }}>
              <div className="bg-white rounded-circle shadow border d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', color: '#013a11' }}>
                <i className="bi bi-chevron-right fs-5 fw-bold"></i>
              </div>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Indikator Garis/Titik Kecil Bawah */}
            <div className="carousel-indicators position-relative mt-4 mb-0">
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active bg-success" aria-current="true" aria-label="Slide 1" style={{ width: '24px', height: '6px', borderRadius: '3px' }}></button>
              <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" className="bg-success" aria-label="Slide 2" style={{ width: '24px', height: '6px', borderRadius: '3px' }}></button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA BOX BANNER */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="card border-0 rounded-4 text-white text-center p-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #013a11 0%, #045a19 100%)', boxShadow: '0 15px 30px rgba(1,58,17,0.2)' }}>
            <div className="position-relative z-3 py-4">
              <h2 className="display-5 fw-bold mb-3">Siap Memajukan Bisnis Anda?</h2>
              <p className="text-white-50 fs-5 mb-5 mx-auto" style={{ maxWidth: '600px' }}>Gabung sekarang bersama ribuan merchant sukses dan nikmati kemudahan mengelola transaksi bisnis di Indonesia.</p>
              
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a href="#" className="btn btn-lg bg-white text-success fw-bold rounded-pill px-5" style={{ fontSize: '16px' }}>Daftar Sekarang</a>
                <a href="#" className="btn btn-lg btn-outline-light rounded-pill px-5" style={{ fontSize: '16px' }}>Hubungi Sales</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}