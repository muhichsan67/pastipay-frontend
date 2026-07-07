import { Layout } from '../components/Layout';
import { useFaqs } from '../hooks/useFaqs';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { useState } from "react";

interface PricingPlan {
  icon: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
  features: string[];
  featured: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    icon: "bi-bank",
    name: "Transfer Bank",
    desc: "Untuk semua transfer bank domestik",
    price: "Rp 2.500",
    unit: "per transaksi",
    features: [
      "BCA, BNI, BRI, Mandiri, dll",
      "Virtual Account otomatis",
      "Notifikasi real-time",
      "Auto-settlement H+1",
    ],
    featured: false,
  },
  {
    icon: "bi-wallet2",
    name: "E-Wallet",
    desc: "GoPay, OVO, Dana, ShopeePay",
    price: "1.5%",
    unit: "per transaksi",
    features: [
      "GoPay, OVO, Dana, ShopeePay",
      "LinkAja & Jeniuspay",
      "Notifikasi real-time",
      "Minimum Rp 500/transaksi",
    ],
    featured: true,
  },
  {
    icon: "bi-qr-code-scan",
    name: "QRIS",
    desc: "Standar BI, diterima semua bank",
    price: "0.7%",
    unit: "per transaksi",
    features: [
      "Semua bank & e-wallet",
      "Static & dynamic QR",
      "Notifikasi real-time",
      "MDR sesuai regulasi BI",
    ],
    featured: false,
  },
  {
    icon: "bi-shop",
    name: "Minimarket",
    desc: "Alfamart, Indomaret, dan lainnya",
    price: "Rp 5.000",
    unit: "per transaksi",
    features: [
      "Alfamart & Indomaret",
      "Kode bayar 48 jam",
      "Notifikasi real-time",
      "Konfirmasi instan",
    ],
    featured: false,
  },
];

const COMPARISON_ROWS = [
  { label: "Biaya Setup", pastipay: "Gratis", a: "Rp 500.000", b: "Rp 750.000" },
  { label: "Biaya Bulanan", pastipay: "Rp 0", a: "Rp 200.000", b: "Rp 350.000" },
  { label: "Transfer Bank", pastipay: "Rp 2.500", a: "Rp 3.500", b: "Rp 4.000" },
  { label: "E-Wallet", pastipay: "1.5%", a: "2.0%", b: "2.5%" },
  { label: "QRIS", pastipay: "0.7%", a: "0.7%", b: "0.8%" },
  { label: "Minimarket", pastipay: "Rp 5.000", a: "Rp 6.000", b: "Rp 7.500" },
  { label: "Pencairan H+1", pastipay: true, a: true, b: false },
  { label: "Settlement Otomatis", pastipay: true, a: false, b: false },
  { label: "Tanpa Deposit Minimum", pastipay: true, a: false, b: true },
];

function formatExchangeRate(rate: number): string {
  return new Intl.NumberFormat('id-ID').format(rate);
}

export function Pricing() {
  const { faqs, loading, error: faqError } = useFaqs();
  const { rates, loading: ratesLoading, error: ratesError } = useExchangeRates();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(1);

  const usdToIdr = rates.find(
    (rate) => rate.fromCurrency === 'USD' && rate.toCurrency === 'IDR',
  );

  return (
    <Layout>
      <div className="bg-info-subtle text-info-emphasis text-center py-2 px-3 border-bottom border-info-subtle" style={{ fontSize: '0.875rem' }}>
        <div className="container d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
          <span className="badge bg-info text-dark text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
            Info Kurs
          </span>
          <span className="fw-medium">
            Seluruh transaksi dikonversi otomatis menggunakan kurs live saat ini:{' '}
            {ratesLoading ? (
              <span className="spinner-border spinner-border-sm text-info ms-1" role="status">
                <span className="visually-hidden">Memuat kurs...</span>
              </span>
            ) : ratesError ? (
              <strong className="text-danger">Gagal memuat kurs</strong>
            ) : usdToIdr ? (
              <strong className="text-dark">
                1 {usdToIdr.fromCurrency} = Rp {formatExchangeRate(usdToIdr.rate)}
              </strong>
            ) : (
              <strong className="text-dark">1 USD = Rp 16.500</strong>
            )}
          </span>
        </div>
      </div>
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
              Harga Transparan
            </span>
            <h1
              className="display-4 fw-extrabold mb-4 text-primary-custom"
              style={{ color: "var(--color-primary)", letterSpacing: "-1.5px" }}
            >
              Biaya Transparan<br />Tanpa Biaya Tersembunyi
            </h1>
            <p className="lead mb-5 text-variant-custom mx-auto" style={{ maxWidth: '600px' }}>
              Bayar hanya untuk yang Anda gunakan. Tidak ada kontrak, tidak ada
              biaya minimum, tidak ada kejutan.
            </p>
            <div className="row g-4 justify-content-center mx-auto" style={{ maxWidth: '600px' }}>
              {[
                ["Gratis", "Biaya Setup"],
                ["Rp 0", "Biaya Bulanan"],
                ["Tidak Ada", "Kontrak"],
              ].map(([value, label]) => (
                <div key={label} className="col-4">
                  <h3 className="h2 fw-bold mb-1 text-primary-custom" style={{ color: "var(--color-primary)" }}>
                    {value}
                  </h3>
                  <p className="small text-variant-custom mb-0">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-5" style={{ backgroundColor: "color-mix(in srgb, var(--color-surface-container) 30%, transparent)", paddingBottom: '7rem' }}>
          <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 20 }}>
            <div className="row g-4 justify-content-center align-items-stretch">
              {PRICING_PLANS.map((plan, index) => {
                const isActive = activeCardIndex === index;
                const isEwallet = index === 1;

                return (
                  <div
                    key={plan.name}
                    className="col-12 col-md-6 col-lg-3 pricing-card-container"
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => setActiveCardIndex(index)}
                  >
                    <div
                      className={`card h-100 p-4 d-flex flex-column pricing-card-interactive ${
                        isActive ? "card-active" : "card-inactive"
                      }`}
                    >
                      {/* Pop-up badge */}
                      <div
                        className="card-badge badge px-3 py-1 rounded-pill text-white"
                        style={{
                          backgroundColor: isEwallet ? "var(--color-secondary)" : "var(--color-primary-container)",
                        }}
                      >
                        {isEwallet ? "Terpopuler" : "Terpilih"}
                      </div>

                      {/* Icon */}
                      <div
                        className="card-icon-container d-flex align-items-center justify-content-center mb-4 rounded"
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: isActive
                            ? "rgba(255, 255, 255, 0.15)"
                            : "color-mix(in srgb, var(--color-primary) 5%, transparent)",
                          color: isActive ? "#ffffff" : "var(--color-primary)",
                        }}
                      >
                        <i className={`bi ${plan.icon} fs-4`}></i>
                      </div>

                      {/* Info */}
                      <h3
                        className="h5 fw-bold mb-2"
                        style={{
                          color: isActive ? "#ffffff" : "var(--color-primary)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="small mb-4"
                        style={{
                          color: isActive ? "rgba(255, 255, 255, 0.7)" : "var(--color-on-surface-variant)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {plan.desc}
                      </p>

                      {/* Price */}
                      <div className="mb-4">
                        <span
                          className="display-6 fw-bold"
                          style={{
                            color: isActive ? "#ffffff" : "var(--color-primary)",
                            transition: "color 0.4s ease",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          className="small d-block"
                          style={{
                            color: isActive ? "rgba(255, 255, 255, 0.7)" : "var(--color-on-surface-variant)",
                            transition: "color 0.4s ease",
                          }}
                        >
                          {plan.unit}
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="list-unstyled mb-4 flex-grow-1 small">
                        {plan.features.map((f) => (
                          <li
                            key={f}
                            className="d-flex align-items-center gap-2 mb-2"
                            style={{
                              color: isActive ? "rgba(255, 255, 255, 0.9)" : "var(--color-on-surface-variant)",
                              transition: "color 0.4s ease",
                            }}
                          >
                            <i
                              className="bi bi-check-circle-fill"
                              style={{
                                color: isActive ? "var(--color-secondary-container)" : "var(--color-secondary)",
                                transition: "color 0.4s ease",
                              }}
                            ></i>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <button
                        className="card-btn btn w-100 fw-bold py-2 mt-auto d-flex align-items-center justify-content-center gap-2"
                        style={{
                          backgroundColor: isActive ? "#ffffff" : "transparent",
                          color: isActive ? "var(--color-primary)" : "var(--color-primary)",
                          borderColor: isActive ? "transparent" : "var(--color-primary)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderRadius: "0.5rem",
                        }}
                      >
                        Daftar Merchant <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Large Volume Callout */}
            <div
              className="mt-5 rounded-4 p-4 border d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 text-center"
              style={{
                backgroundColor: "color-mix(in srgb, var(--color-secondary-container) 20%, transparent)",
                borderColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
              }}
            >
              <i className="bi bi-lightning-charge-fill fs-5 text-primary-custom"></i>
              <p className="fw-semibold mb-0 text-primary-custom">
                <strong>Volume besar?</strong> Dapatkan harga khusus untuk transaksi di atas Rp 100 juta/bulan.{" "}
                <a className="text-decoration-underline fw-bold text-primary-custom" href="/contact">
                  Hubungi tim kami →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary-custom" style={{ color: "var(--color-primary)" }}>
                Bandingkan dengan Kompetitor
              </h2>
              <p className="lead text-variant-custom">
                Lihat kenapa merchant memilih PastiPay
              </p>
            </div>
            <div className="table-responsive shadow-sm rounded-4 border overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
              <table className="table table-hover align-middle mb-0" style={{ minWidth: "800px" }}>
                <thead>
                  <tr className="align-middle" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)" }}>
                    <th className="p-3 ps-4 border-0 fw-bold text-variant-custom">Fitur</th>
                    <th className="p-3 text-center border-0 fw-bold text-primary-custom" style={{ color: "var(--color-primary)" }}>PastiPay</th>
                    <th className="p-3 text-center border-0 fw-semibold text-variant-custom">Kompetitor A</th>
                    <th className="p-3 text-center border-0 fw-semibold text-variant-custom">Kompetitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.label} className="align-middle">
                      <td className="p-3 ps-4 fw-semibold border-bottom text-dark">{row.label}</td>
                      <td className="p-3 text-center fw-bold border-bottom text-primary-custom" style={{ color: "var(--color-primary)" }}>
                        {typeof row.pastipay === "boolean" ? (
                          row.pastipay ? (
                            <i className="bi bi-check-lg fs-4 text-success"></i>
                          ) : (
                            <i className="bi bi-x-lg fs-5 text-danger"></i>
                          )
                        ) : (
                          row.pastipay
                        )}
                      </td>
                      <td className="p-3 text-center border-bottom text-variant-custom">
                        {typeof row.a === "boolean" ? (
                          row.a ? (
                            <i className="bi bi-check-lg fs-4 text-success"></i>
                          ) : (
                            <i className="bi bi-x-lg fs-5 text-danger"></i>
                          )
                        ) : (
                          row.a
                        )}
                      </td>
                      <td className="p-3 text-center border-bottom text-variant-custom">
                        {typeof row.b === "boolean" ? (
                          row.b ? (
                            <i className="bi bi-check-lg fs-4 text-success"></i>
                          ) : (
                            <i className="bi bi-x-lg fs-5 text-danger"></i>
                          )
                        ) : (
                          row.b
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-5 bg-white border-top border-bottom">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold text-primary-custom" style={{ color: "var(--color-primary)" }}>
                Pertanyaan Umum
              </h2>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Memuat...</span>
                </div>
              </div>
            ) : faqError ? (
              <div className="alert alert-danger text-center" role="alert">
                {faqError}
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {faqs.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={item.id}
                      className="card border shadow-sm"
                      style={{
                        backgroundColor: "var(--color-background)",
                        borderColor: isOpen ? "color-mix(in srgb, var(--color-primary) 20%, transparent)" : "#e5e4e7",
                        borderRadius: "0.75rem",
                        overflow: "hidden"
                      }}
                    >
                      <button
                        className="btn w-100 px-4 py-3 d-flex align-items-center justify-content-between text-start border-0 shadow-none"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        style={{ color: "inherit" }}
                      >
                        <span className="fw-bold text-primary-custom" style={{ color: "var(--color-primary)" }}>
                          {item.question}
                        </span>
                        <div
                          className="d-flex align-items-center justify-content-center rounded-circle ms-3"
                          style={{
                            width: "32px",
                            height: "32px",
                            backgroundColor: "color-mix(in srgb, var(--color-primary) 5%, transparent)",
                            transition: "transform 0.3s"
                          }}
                        >
                          <i
                            className="bi bi-chevron-down text-variant-custom"
                            style={{
                              display: "inline-block",
                              transition: "transform 0.3s",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0)"
                            }}
                          ></i>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3">
                          <hr className="my-2 opacity-10" />
                          <p className="small text-variant-custom mb-0 mt-2">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 px-3">
          <div
            className="container rounded-4 p-4 p-md-5 text-center position-relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-secondary-container)",
              maxWidth: "800px"
            }}
          >
            <div className="position-relative" style={{ zIndex: 10 }}>
              <h2 className="display-5 fw-bold mb-3 text-primary-custom" style={{ color: "var(--color-primary)" }}>
                Siap Mulai?
              </h2>
              <p className="lead mb-4 text-primary-custom opacity-75">
                Daftar gratis sekarang dan mulai terima pembayaran dalam 24 jam
              </p>
              <button
                className="btn btn-lg bg-primary-custom text-white fw-bold px-5 py-3 shadow border-0"
                style={{ borderRadius: "0.5rem" }}
              >
                Daftar Merchant Sekarang <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
            <div
              className="position-absolute rounded-circle"
              style={{
                right: "-50px",
                bottom: "-50px",
                width: "200px",
                height: "200px",
                backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                filter: "blur(40px)",
                zIndex: 1
              }}
            />
            <div
              className="position-absolute rounded-circle"
              style={{
                left: "-50px",
                top: "-50px",
                width: "250px",
                height: "250px",
                backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                filter: "blur(60px)",
                zIndex: 1
              }}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}