import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* HEADER */}
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <nav className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-primary-custom text-white p-2 rounded">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <span className="fs-4 fw-bold text-primary-custom">PastiPay</span>
          </div>
          <div className="d-none d-md-flex align-items-center gap-4 bg-light px-4 py-2 rounded-pill-custom border">
            <a href="/" className="text-decoration-none text-dark fw-semibold">Beranda</a>
            <a href="/pricing" className="text-decoration-none text-variant-custom">Biaya</a>
            <a href="/contact" className="text-decoration-none text-variant-custom">Kontak Kami</a>
            <a href="/about" className="text-decoration-none text-variant-custom">Tentang Kami</a>
          </div>
          <div className="d-flex gap-2">
            <button className="btn text-primary-custom font-semibold">Masuk</button>
            <button className="btn bg-primary-custom text-white rounded-pill px-4">Daftar Sekarang</button>
          </div>
        </nav>
      </header>

      {/* CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-surface-custom border-top py-5 mt-5">
        <div className="container text-center text-md-start">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold text-primary-custom">PastiPay</h5>
              <p className="text-variant-custom small">Penyedia gerbang pembayaran terpercaya dengan standar keamanan internasional di Indonesia.</p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold">Perusahaan</h6>
              <ul className="list-unstyled small text-variant-custom space-y-2">
                <li><a href="/about" className="text-decoration-none text-reset">Tentang Kami</a></li>
                <li><a href="/pricing" className="text-decoration-none text-reset">Biaya</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold">Legalitas</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-2">
                <span className="badge border text-primary-custom">Berizin OJK</span>
                <span className="badge border text-primary-custom">PCI DSS</span>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <p className="small text-muted mb-0">© 2026 PastiPay. Secure Financial Certainty.</p>
        </div>
      </footer>
    </>
  );
}