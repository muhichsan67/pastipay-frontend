import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { useSubmitContactForm } from '../hooks/useSubmitContactForm';
import type { MerchantFormData } from '../../domain/entities/MerchantFormData';

export function Contact() {
  const { submitForm, loading, status, message } = useSubmitContactForm();
  const [formData, setFormData] = useState<MerchantFormData>({
    name: '',
    position: '',
    email: '',
    website: '',
    phone: '',
    volume: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      setFormData({
        name: '',
        position: '',
        email: '',
        website: '',
        phone: '',
        volume: '',
        message: ''
      });
    }
  };

  return (
    <Layout>
      <div className="w-100" style={{ backgroundColor: "var(--color-background)" }}>
        {/* Hero Section */}
        <section className="py-5 text-center position-relative overflow-hidden">
          <div className="container py-5 position-relative" style={{ zIndex: 10, maxWidth: '800px' }}>
            <span
              className="d-inline-block px-3 py-1 rounded-pill border fs-6 fw-semibold mb-4"
              style={{
                backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                color: "var(--color-primary)",
              }}
            >
              Hubungi Kami
            </span>
            <h1
              className="display-4 fw-extrabold mb-4 text-primary-custom"
              style={{ color: "var(--color-primary)", letterSpacing: "-1.5px" }}
            >
              Mulai Konsultasi <br /> Gratis Sekarang
            </h1>
            <p className="lead mb-5 text-variant-custom mx-auto" style={{ maxWidth: '600px' }}>
              Tim ahli kami siap membantu Anda mengintegrasikan solusi pembayaran digital yang aman dan terpercaya untuk bisnis Anda di Indonesia.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="container pb-5" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
          <div className="row g-5 align-items-start">
            {/* Merchant Form */}
            <div className="col-12 col-lg-6">
              <div
                className="card border-0 shadow-lg p-4 p-md-5"
                style={{
                  backgroundColor: "#ffffff",
                  borderLeft: "5px solid var(--color-primary) !important",
                  borderRadius: "1.5rem"
                }}
              >
                <h2 className="h4 fw-bold text-primary-custom mb-2">Formulir Merchant</h2>
                <p className="text-variant-custom small mb-4">Isi formulir di bawah dan tim kami akan segera menghubungi Anda.</p>
                {message && (
                  <div className={`alert ${status === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-person text-primary-custom"></i>
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        className="form-control px-3 py-2 bg-light border-0"
                        style={{ borderRadius: "0.5rem" }}
                        placeholder="Budi Santoso"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-briefcase text-primary-custom"></i>
                        Jabatan *
                      </label>
                      <input
                        type="text"
                        className="form-control px-3 py-2 bg-light border-0"
                        style={{ borderRadius: "0.5rem" }}
                        placeholder="CEO / Manager"
                        value={formData.position}
                        onChange={e => setFormData({ ...formData, position: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-envelope text-primary-custom"></i>
                      Email Perusahaan *
                    </label>
                    <input
                      type="email"
                      className="form-control px-3 py-2 bg-light border-0"
                      style={{ borderRadius: "0.5rem" }}
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-globe text-primary-custom"></i>
                      Website Perusahaan
                    </label>
                    <input
                      type="url"
                      className="form-control px-3 py-2 bg-light border-0"
                      style={{ borderRadius: "0.5rem" }}
                      placeholder="https://www.company.com"
                      value={formData.website}
                      onChange={e => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-telephone text-primary-custom"></i>
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        className="form-control px-3 py-2 bg-light border-0"
                        style={{ borderRadius: "0.5rem" }}
                        placeholder="+62 812-3456-7890"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-bar-chart text-primary-custom"></i>
                        Estimasi Volume/Bulan
                      </label>
                      <select
                        className="form-select px-3 py-2 bg-light border-0"
                        style={{ borderRadius: "0.5rem" }}
                        value={formData.volume}
                        onChange={e => setFormData({ ...formData, volume: e.target.value })}
                      >
                        <option value="">Pilih volume</option>
                        <option value="low">Rp 0 - 100 Juta</option>
                        <option value="mid">Rp 100 Juta - 1 Miliar</option>
                        <option value="high">Diatas Rp 1 Miliar</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-sm fw-bold text-dark d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-chat-dots text-primary-custom"></i>
                      Pesan (opsional)
                    </label>
                    <textarea
                      className="form-control px-3 py-3 bg-light border-0"
                      style={{ borderRadius: "0.75rem", resize: "none" }}
                      rows={4}
                      placeholder="Ceritakan kebutuhan bisnis Anda..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn bg-primary-custom text-white w-100 py-3 fw-bold rounded-pill shadow-sm d-flex align-items-center justify-content-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Permintaan Konsultasi</span>
                        <i className="bi bi-send small"></i>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-variant-custom mt-3 mb-0" style={{ fontSize: "11px", opacity: 0.7 }}>
                    Dengan mendaftar, Anda menyetujui <a className="text-decoration-underline text-primary-custom" href="#">Syarat &amp; Ketentuan</a> kami
                  </p>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="col-12 col-lg-6 d-flex flex-column gap-4">
              <div>
                <h2 className="h3 fw-bold text-primary-custom" style={{ color: "var(--color-primary)" }}>Informasi Kontak</h2>
                <p className="text-variant-custom">Tim dukungan kami siap membantu Anda setiap hari, termasuk akhir pekan.</p>
              </div>

              {/* Contact Cards */}
              <div className="d-flex flex-column gap-3">
                {/* Alamat */}
                <div
                  className="d-flex align-items-start p-4 rounded-4 border shadow-sm"
                  style={{ backgroundColor: "var(--color-surface-container)", borderColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
                >
                  <div
                    className="p-3 rounded-3 me-3 text-primary-custom d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)", width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <span className="text-uppercase tracking-wider text-variant-custom fw-bold" style={{ fontSize: "10px", opacity: 0.6 }}>Alamat Kantor</span>
                    <p className="text-primary-custom fw-bold leading-snug mt-1 mb-0" style={{ color: "var(--color-primary)", fontSize: "15px" }}>
                      Jl. Kemang Timur No.1, RT.14/RW.8,<br />
                      Pejaten Bar., Ps. Minggu,<br />
                      Kota Jakarta Selatan
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="d-flex align-items-start p-4 rounded-4 border shadow-sm"
                  style={{ backgroundColor: "var(--color-surface-container)", borderColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
                >
                  <div
                    className="p-3 rounded-3 me-3 text-primary-custom d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)", width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-envelope-fill fs-5"></i>
                  </div>
                  <div>
                    <span className="text-uppercase tracking-wider text-variant-custom fw-bold" style={{ fontSize: "10px", opacity: 0.6 }}>Email</span>
                    <p className="text-primary-custom fw-bold mt-1 mb-0" style={{ color: "var(--color-primary)", fontSize: "15px" }}>
                      support@pastipay.co.id
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Telepon Grid */}
                <div className="row g-3">
                  <div className="col-6">
                    <div
                      className="d-flex flex-column align-items-center p-4 rounded-4 border shadow-sm text-center h-100 justify-content-center"
                      style={{ backgroundColor: "var(--color-surface-container)", borderColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
                    >
                      <div
                        className="p-3 rounded-3 mb-3 text-primary-custom d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)", width: "48px", height: "48px" }}
                      >
                        <i className="bi bi-chat-fill fs-5"></i>
                      </div>
                      <span className="text-uppercase tracking-wider text-variant-custom fw-bold" style={{ fontSize: "10px", opacity: 0.6 }}>WhatsApp</span>
                      <p className="text-primary-custom fw-bold mt-1 mb-0 text-sm" style={{ color: "var(--color-primary)" }}>
                        +62 811-123-PASTI
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="d-flex flex-column align-items-center p-4 rounded-4 border shadow-sm text-center h-100 justify-content-center"
                      style={{ backgroundColor: "var(--color-surface-container)", borderColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}
                    >
                      <div
                        className="p-3 rounded-3 mb-3 text-primary-custom d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)", width: "48px", height: "48px" }}
                      >
                        <i className="bi bi-telephone-fill fs-5"></i>
                      </div>
                      <span className="text-uppercase tracking-wider text-variant-custom fw-bold" style={{ fontSize: "10px", opacity: 0.6 }}>Telepon</span>
                      <p className="text-primary-custom fw-bold mt-1 mb-0 text-sm" style={{ color: "var(--color-primary)" }}>
                        (021) 555-PASTI
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Section */}
              <div
                className="card rounded-4 p-4 p-md-5 border-0 text-white shadow"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <h3 className="h5 fw-bold mb-4">Kami Siap Membantu</h3>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-3">
                    <div
                      className="p-2 rounded d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-clock-history text-white"></i>
                    </div>
                    <span className="small">Respons dalam 1x24 jam kerja</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <div
                      className="p-2 rounded d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-headset text-white"></i>
                    </div>
                    <span className="small">Dukungan teknis dedicated</span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <div
                      className="p-2 rounded d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", width: "36px", height: "36px" }}
                    >
                      <i className="bi bi-patch-check-fill text-white"></i>
                    </div>
                    <span className="small">Konsultasi 100% gratis &amp; tanpa komitmen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Location Map Section */}
        <section className="container mb-5">
          <a
            href="https://maps.app.goo.gl/kXn6NReKeghcuk7k8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none d-block hover-opacity transition-all"
            style={{ borderRadius: "2rem" }}
          >
            <div
              className="position-relative w-100 overflow-hidden shadow-sm border"
              style={{
                height: "400px",
                borderRadius: "2rem",
                backgroundColor: "var(--color-surface-container)",
                borderColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                cursor: "pointer"
              }}
            >
              {/* Stylized Grid Overlay */}
              <div
                className="position-absolute inset-0 bg-grid-subtle pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#003a03 0.5px, transparent 0.5px)",
                  backgroundSize: "24px 24px",
                  opacity: 0.05,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1
                }}
              ></div>

              {/* Static Map Image */}
              <img
                alt="Peta Lokasi PastiPay"
                className="w-100 h-100 object-cover grayscale opacity-50 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk9FnERkq5rQ8_fN_LATQR3-Mkkl2LlFJCOUXLKL7oi6YNuRusLXK8NxoPvQOsg2m4yts8B77cprsuShCq_pU-2r7gZvMlv8bYdQUi6eoGmYfZ0iwRTkFZOxL2_xPAsEsBVgEf1U_1Vy-VGirXuB60qhMCGwn8DhqPILKeaE3nRPKBqYb8coJrEondpejVLejmDJ1r7a146RfyGcXH1lYUSRCRVWvvqSf4SXaWdmg18U4v_28-GCdbscP-p-6fCJqJmtkVBBpl6OQ"
                style={{ objectFit: "cover" }}
              />

              {/* Marker Overlay */}
              <div className="position-absolute top-50 start-50 translate-middle z-3 text-center d-flex flex-column align-items-center">
                <div
                  className="bg-primary-custom p-3 rounded-circle shadow-lg mb-3 text-white animate-bounce d-flex align-items-center justify-content-center"
                  style={{ width: "64px", height: "64px", backgroundColor: "var(--color-primary)" }}
                >
                  <i className="bi bi-geo-alt-fill fs-3"></i>
                </div>
                <div
                  className="bg-white p-4 rounded-4 shadow border text-center"
                  style={{ maxWidth: "320px", borderColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)" }}
                >
                  <h4 className="h6 fw-bold text-primary-custom mb-1" style={{ color: "var(--color-primary)" }}>
                    Kantor PastiPay
                  </h4>
                  <p className="text-variant-custom small mb-3 leading-snug">
                    Jl. Kemang Timur No.1, RT.14/RW.8, Pejaten Bar., Ps. Minggu, Kota Jakarta Selatan
                  </p>
                  <div
                    className="btn btn-sm text-primary-custom fw-bold d-flex align-items-center justify-content-center gap-2 mx-auto hover-underline"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <i className="bi bi-map-fill"></i>
                    <span>Lihat di Google Maps</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </Layout>
  );
}