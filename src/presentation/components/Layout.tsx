import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky-top bg-surface-custom border-bottom py-2 py-md-3 shadow-sm" style={{ zIndex: 1050 }}>
        <nav className="container d-flex align-items-center justify-content-between">
          <NavLink to="/" className="d-flex align-items-center gap-2 text-decoration-none">
            <div className="bg-primary-custom text-white p-2 rounded">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>account_balance</span>
            </div>
            <span className="fs-5 fs-md-4 fw-bold text-primary-custom">PastiPay</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-4 bg-light px-4 py-2 rounded-pill-custom border">
            <NavLink to="/" className="text-decoration-none nav-link-custom">Beranda</NavLink>
            <NavLink to="/pricing" className="text-decoration-none nav-link-custom">Biaya</NavLink>
            <NavLink to="/contact" className="text-decoration-none nav-link-custom">Kontak Kami</NavLink>
            <NavLink to="/about" className="text-decoration-none nav-link-custom">Tentang Kami</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="d-none d-md-flex gap-2">
            <button className="btn text-primary-custom font-semibold">Masuk</button>
            <button className="btn bg-primary-custom text-white rounded-pill px-4">Daftar Sekarang</button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="btn d-md-none p-1 border-0"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
          >
            <i className="bi bi-list fs-2" style={{ color: 'var(--color-primary)' }} />
          </button>
        </nav>
      </header>

      {/* Mobile Offcanvas Overlay */}
      {mobileOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1060 }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Offcanvas Drawer */}
      <div
        className="position-fixed top-0 h-100 d-flex flex-column bg-white shadow-lg"
        style={{
          width: '280px',
          right: mobileOpen ? '0' : '-300px',
          transition: 'right 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 1070,
          overflowY: 'auto'
        }}
      >
        {/* Drawer Header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <span className="fs-5 fw-bold text-primary-custom">Menu</span>
          <button
            className="btn p-1 border-0"
            onClick={() => setMobileOpen(false)}
            aria-label="Close"
          >
            <i className="bi bi-x-lg fs-5" style={{ color: 'var(--color-primary)' }} />
          </button>
        </div>

        {/* Drawer Nav */}
        <div className="d-flex flex-column p-3 gap-1">
          {[
            { to: '/', label: 'Beranda', icon: 'bi-house' },
            { to: '/pricing', label: 'Biaya', icon: 'bi-tag' },
            { to: '/contact', label: 'Kontak Kami', icon: 'bi-envelope' },
            { to: '/about', label: 'Tentang Kami', icon: 'bi-info-circle' },
          ].map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `d-flex align-items-center gap-3 px-3 py-3 rounded-3 text-decoration-none fw-medium ${
                  isActive
                    ? 'text-white'
                    : 'text-dark'
                }`
              }
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                transition: 'background-color 0.2s ease'
              })}
            >
              <i className={`bi ${icon}`} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="mt-auto p-3 border-top d-flex flex-column gap-2">
          <button className="btn btn-outline-success rounded-pill fw-semibold">Masuk</button>
          <button className="btn bg-primary-custom text-white rounded-pill fw-semibold">Daftar Sekarang</button>
        </div>
      </div>

      {/* CONTENT */}
      <main key={pathname} className="page-transition">{children}</main>

      {/* FOOTER */}
      <footer className="bg-surface-custom border-top py-4 py-md-5 mt-4 mt-md-5">
        <div className="container text-center text-md-start">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <h5 className="fw-bold text-primary-custom">PastiPay</h5>
              <p className="text-variant-custom small">Penyedia gerbang pembayaran terpercaya dengan standar keamanan internasional di Indonesia.</p>
            </div>
            <div className="col-6 col-md-4">
              <h6 className="fw-bold">Perusahaan</h6>
              <ul className="list-unstyled small text-variant-custom space-y-2">
                <li><a href="/about" className="text-decoration-none text-reset">Tentang Kami</a></li>
                <li><a href="/pricing" className="text-decoration-none text-reset">Biaya</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h6 className="fw-bold">Legalitas</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-2 flex-wrap">
                <span className="badge border text-primary-custom">Berizin OJK</span>
                <span className="badge border text-primary-custom">PCI DSS</span>
              </div>
            </div>
          </div>
          <hr className="my-3 my-md-4" />
          <p className="small text-muted mb-0">© 2026 PastiPay. Secure Financial Certainty.</p>
        </div>
      </footer>
    </>
  );
}