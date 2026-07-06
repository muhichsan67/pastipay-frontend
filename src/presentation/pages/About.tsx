import { useState } from 'react';
import { Layout } from '../components/Layout';

export function About() {
  const [activeBentoIndex, setActiveBentoIndex] = useState<number>(1);

  const bentoStats = [
    { label: "Total Merchant", value: "500k+", desc: "Pelaku usaha terverifikasi" },
    { label: "Volume Transaksi", value: "Rp 120T", desc: "Diproses setiap tahunnya" },
    { label: "Cakupan Wilayah", value: "34", desc: "Provinsi di seluruh Indonesia" }
  ];
  return (
    <Layout>
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(243,240,223,0.5) 0%, rgba(252,249,238,1) 100%)' }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Kolom Kiri: Teks */}
            <div className="col-lg-6 text-start">
              <span
                className="badge rounded-pill px-3 py-2 text-success fw-bold border mb-4"
                style={{ backgroundColor: '#E8F5E9', fontSize: '12px', letterSpacing: '0.5px' }}
              >
                VISI KAMI
              </span>
              <h1
                className="display-4 fw-bold mb-4"
                style={{ color: '#013a11', lineHeight: '1.15' }}
              >
                Membangun Masa Depan Pembayaran Digital di Indonesia
              </h1>
              <p className="lead text-muted mb-0" style={{ fontSize: '18px', lineHeight: '1.7' }}>
                PastiPay hadir untuk meredefinisi standar transaksi finansial dengan teknologi mutakhir yang aman, inklusif, dan mendukung kedaulatan ekonomi digital Indonesia.
              </p>
            </div>

            {/* Kolom Kanan: Gambar Hero */}
            <div className="col-lg-6">
              <div
                className="position-relative overflow-hidden shadow-lg"
                style={{ borderRadius: '1.5rem', height: '420px' }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEA93w-DDbBjrRTruE6JRZtWSRXGLBaBrjLN_YWABVEfgkfVE4UuFXr6ORayQerTJi1q6WzxzbeyVTgaNz_pr7Gyl8IAtol4QvAwmpFO0hdFyKRNS8QwbFH134ioDDxuYr6O0Py-zRvuvZWPYCFZohYezJvcjWPfDbuGQ8sgsacIVx5i5LenLaQ1bD-TlePhkEd437TF5FTEnXqBR6NW3h8QD9OjK40Bi3qW0Ib9-gfnufGyYBYNAZR69VdJhC5UTyg2DWWTOK7w"
                  alt="Distrik finansial Jakarta modern saat senja"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', transform: 'scale(1.35)', transformOrigin: 'top center' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 end-0"
                  style={{ height: '50%', background: 'linear-gradient(to top, rgba(1,58,17,0.35), transparent)' }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Elemen Dekoratif */}
        <div
          className="position-absolute"
          style={{
            top: '-100px', right: '-100px',
            width: '380px', height: '380px',
            background: 'radial-gradient(circle, rgba(1,58,17,0.06) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)'
          }}
        />
      </section>

      {/* ═══════════════ CERITA KAMI ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-surface-container)' }}>
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            {/* Kolom Kiri: Narasi */}
            <div className="col-lg-5">
              <h2
                className="fw-bold pb-2 d-inline-block"
                style={{
                  color: '#013a11',
                  fontSize: '30px',
                  borderBottom: '4px solid #013a11',
                  borderRadius: '2px'
                }}
              >
                Cerita Kami
              </h2>
              <div className="mb-4" />
              <p className="text-muted mb-3" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                Perjalanan PastiPay dimulai dari sebuah visi sederhana: memastikan setiap pelaku usaha di Indonesia memiliki akses ke sistem pembayaran yang handal dan aman. Sejak tahun 2018, kami telah bertransformasi dari sebuah startup lokal menjadi mitra strategis bagi ribuan UMKM dan korporasi besar.
              </p>
              <p className="text-muted mb-0" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                Kami percaya bahwa inklusi keuangan adalah kunci pertumbuhan nasional. Dengan menghubungkan pasar tradisional hingga gedung perkantoran pusat, PastiPay terus berinovasi untuk menghilangkan hambatan dalam bertransaksi di seluruh nusantara.
              </p>
            </div>

            {/* Kolom Kanan: 2 Gambar Sejajar */}
            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
                    alt="Barista di cafe modern minimalis"
                    className="w-100 shadow-sm"
                    style={{ objectFit: 'cover', borderRadius: '1rem', height: '330px' }}
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fvkmEXg73Z4N84AK4LCYUL89X7_cskw-R_fPeXOD8E58S44-uRD-jFqMQgd9zFX7HoeB57842XwKMGjQJ9VMQS1OSM_3x81GpwwjokRwgblm42NlHqjuIOy1EL_eIL2uc2et49o6d6rtX-82FDhH5-Yw-z38rTeJRfC0qufHWc1wSnbqWvEPrFg42qsvdZHAkllordiCv99PmJtAA0GVwZ21c_37mNfvHjY0Zv1Ccuo6cphkLSfaZHNRZTjvVRK79r82eSEaiiY"
                    alt="Ruang rapat korporat modern di gedung pencakar langit Jakarta"
                    className="w-100 shadow-sm"
                    style={{ objectFit: 'cover', borderRadius: '1rem', height: '330px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATISTIK BENTO ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: '#013a11', fontSize: '30px' }}>Dampak Kami dalam Angka</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
              Angka-angka yang membuktikan dedikasi kami dalam mengakselerasi ekonomi digital Indonesia.
            </p>
          </div>
          <div className="row g-4">
            {bentoStats.map((stat, index) => {
              const isActive = activeBentoIndex === index;
              return (
                <div className="col-md-4" key={index}>
                  <div
                    className="p-4 d-flex flex-column justify-content-between position-relative"
                    style={{
                      backgroundColor: isActive ? '#0d530e' : '#eee8d1',
                      color: isActive ? '#ffffff' : '#013a11',
                      borderRadius: '1rem',
                      height: '200px',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 15px 30px rgba(1, 58, 17, 0.25)' : 'none',
                      transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                      transition: 'background-color 0.4s ease, color 0.4s ease, transform 0.3s ease, box-shadow 0.4s ease',
                      border: isActive ? '2px solid #0d530e' : '2px solid transparent'
                    }}
                    onClick={() => setActiveBentoIndex(index)}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <span
                      className="text-uppercase fw-bold small"
                      style={{
                        letterSpacing: '2px',
                        opacity: isActive ? 0.8 : 0.7
                      }}
                    >
                      {stat.label}
                    </span>
                    <h3 className="display-4 fw-black mb-0">{stat.value}</h3>
                    <p
                      className="small mb-0"
                      style={{
                        opacity: isActive ? 0.9 : 0.8
                      }}
                    >
                      {stat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ PILAR UTAMA / NILAI-NILAI ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-surface-container)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: '#013a11', fontSize: '30px' }}>Pilar Utama Kami</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Kami berpegang teguh pada nilai-nilai yang menjamin kepercayaan dan kepuasan setiap mitra kami.
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: 'bi-shield-check',
                title: 'Keamanan Terjamin',
                desc: 'Enkripsi tingkat militer dan sistem deteksi fraud berbasis AI untuk melindungi setiap rupiah transaksi Anda.'
              },
              {
                icon: 'bi-lightning-charge-fill',
                title: 'Inovasi Tanpa Henti',
                desc: 'Pengembangan fitur berkelanjutan yang relevan dengan dinamika pasar global dan kebutuhan lokal.'
              },
              {
                icon: 'bi-people-fill',
                title: 'Dukungan Lokal',
                desc: 'Tim representasi di kota-kota besar Indonesia yang siap membantu akselerasi bisnis Anda secara personal.'
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="bg-white p-4 h-100 shadow-sm"
                  style={{
                    borderRadius: '1rem',
                    borderLeft: '3px solid #0d530e',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(1,58,17,0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#b0f49f' }}
                  >
                    <i className={`bi ${item.icon} fs-5`} style={{ color: '#2e6b27' }} />
                  </div>
                  <h4 className="fw-bold mb-2" style={{ color: '#013a11', fontSize: '20px' }}>{item.title}</h4>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TIM LEADERSHIP ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: '#013a11', fontSize: '30px' }}>Kelompok 5</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Yang Beranggotakan
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: 'Ichsan', role: 'Ketua Kelompok', initial: 'IC', color: '#0d530e' },
              { name: 'Rifqi', role: 'Anggota', initial: 'RF', color: '#2e6b27' },
              { name: 'Ridho', role: 'Anggota', initial: 'RD', color: '#4b4824' },
              { name: 'Muji', role: 'Anggota', initial: 'MJ', color: '#63603a' },
              { name: 'Miftahhul', role: 'Anggota', initial: 'MF', color: '#013a11' }
            ].map((person, i) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg" key={i}>
                <div
                  className="text-center p-4 h-100"
                  style={{
                    borderRadius: '1.25rem',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(13,83,14,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(1,58,17,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="mx-auto d-flex align-items-center justify-content-center text-white fw-bold mb-3"
                    style={{
                      width: '80px', height: '80px',
                      borderRadius: '50%',
                      backgroundColor: person.color,
                      fontSize: '24px',
                      letterSpacing: '1px'
                    }}
                  >
                    {person.initial}
                  </div>
                  <h5 className="fw-bold mb-1" style={{ color: '#013a11', fontSize: '16px' }}>{person.name}</h5>
                  <p className="text-muted small mb-0">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TIMELINE / PERJALANAN ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-surface-container)' }}>
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: '#013a11', fontSize: '30px' }}>Perjalanan Kami</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
              Tonggak-tonggak penting yang menandai pertumbuhan PastiPay dari startup lokal menjadi pemimpin industri.
            </p>
          </div>

          <div className="row g-4">
            {[
              { year: '2018', title: 'Didirikan', desc: 'PastiPay lahir dengan misi memperluas inklusi keuangan bagi UMKM Indonesia.' },
              { year: '2019', title: 'Lisensi BI', desc: 'Meraih lisensi resmi dari Bank Indonesia sebagai penyelenggara jasa sistem pembayaran.' },
              { year: '2020', title: '10.000 Merchant', desc: 'Berhasil meng-onboard lebih dari 10.000 merchant di tengah akselerasi digitalisasi pandemi.' },
              { year: '2021', title: 'Ekspansi QRIS', desc: 'Meluncurkan integrasi QRIS universal di 20+ kota besar di seluruh Indonesia.' },
              { year: '2023', title: '500.000 Merchant', desc: 'Melampaui setengah juta merchant aktif dan memproses lebih dari Rp 120 triliun.' },
              { year: '2024', title: 'AI & Fraud Detection', desc: 'Mengimplementasikan sistem deteksi fraud berbasis AI generasi terbaru untuk keamanan lebih.' }
            ].map((item, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div
                  className="d-flex align-items-start gap-3 p-4 bg-white h-100 shadow-sm"
                  style={{
                    borderRadius: '1rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(1,58,17,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                  }}
                >
                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center fw-black text-white"
                    style={{
                      width: '56px', height: '56px',
                      borderRadius: '0.75rem',
                      backgroundColor: i % 2 === 0 ? '#0d530e' : '#2e6b27',
                      fontSize: '14px',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {item.year}
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: '#013a11', fontSize: '16px' }}>{item.title}</h5>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-5" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="container">
          <div
            className="text-center text-white p-5 position-relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0d530e 0%, #013a11 100%)',
              borderRadius: '2rem',
              boxShadow: '0 20px 45px rgba(1,58,17,0.2)'
            }}
          >
            <div className="position-relative py-4" style={{ zIndex: 10 }}>
              <h2 className="display-5 fw-bold mb-3">Mari Berkolaborasi</h2>
              <p className="fs-5 mx-auto mb-5" style={{ maxWidth: '560px', opacity: 0.75 }}>
                Siap mengoptimalkan sistem pembayaran bisnis Anda? Tim spesialis kami siap membantu Anda merancang solusi yang paling efisien.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href="#"
                  className="btn btn-lg rounded-pill px-5 fw-bold btn-magnetic-light"
                  style={{ fontSize: '16px' }}
                >
                  Hubungi Tim Sales
                </a>
                <a
                  href="#"
                  className="btn btn-lg rounded-pill px-5 fw-bold btn-magnetic-outline-light"
                  style={{ fontSize: '16px' }}
                >
                  Lihat Dokumentasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}