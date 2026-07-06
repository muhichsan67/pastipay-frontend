import { Layout } from '../components/Layout';
import { useFaqs } from '../hooks/useFaqs';
import { useMemo, useState } from "react";
import "../../BiayaPage.css";


type Category = "semua" | "qris" | "bank" | "ewallet" | "kartu" | "retail";

interface FeeRow {
  category: Exclude<Category, "semua">;
  categoryLabel: string;
  method: string;
  fee: string;
  note: string;
}


const CATEGORY_TABS: { id: Category; label: string }[] = [
  { id: "semua", label: "Semua" },
  { id: "qris", label: "QRIS" },
  { id: "bank", label: "Transfer Bank" },
  { id: "ewallet", label: "E-Wallet" },
  { id: "kartu", label: "Kartu" },
  { id: "retail", label: "Gerai Ritel" },
];

const FEE_ROWS: FeeRow[] = [
  {
    category: "qris",
    categoryLabel: "QRIS",
    method: "QRIS (semua e-wallet & m-banking)",
    fee: "0.5%",
    note: "Dipotong dari nominal transaksi, tanpa minimum",
  },
  {
    category: "bank",
    categoryLabel: "Transfer Bank",
    method: "Virtual Account BCA, BNI, Mandiri, BRI",
    fee: "Rp 2.500",
    note: "Biaya tetap per transaksi berhasil",
  },
  {
    category: "bank",
    categoryLabel: "Transfer Bank",
    method: "Virtual Account bank lain (OJK)",
    fee: "Rp 4.000",
    note: "Biaya tetap per transaksi berhasil",
  },
  {
    category: "ewallet",
    categoryLabel: "E-Wallet",
    method: "GoPay, OVO, DANA, ShopeePay",
    fee: "1.5%",
    note: "Dipotong dari nominal transaksi",
  },
  {
    category: "kartu",
    categoryLabel: "Kartu",
    method: "Kartu Kredit & Debit (Visa, Mastercard)",
    fee: "2.5% + Rp 2.000",
    note: "Berlaku untuk kartu domestik & internasional",
  },
  {
    category: "retail",
    categoryLabel: "Gerai Ritel",
    method: "Alfamart, Indomaret, Pos Indonesia",
    fee: "Rp 5.000",
    note: "Biaya tetap per transaksi berhasil",
  },
];

const COMPETITORS = [
  {
    name: "PastiPay",
    highlight: true,
    qris: "0.5%",
    bank: "Rp 2.500",
    ewallet: "1.5%",
    kartu: "2.5% + Rp 2.000",
  },
  {
    name: "Kompetitor A",
    highlight: false,
    qris: "0.7%",
    bank: "Rp 4.000",
    ewallet: "2.0%",
    kartu: "2.9% + Rp 2.000",
  },
  {
    name: "Kompetitor B",
    highlight: false,
    qris: "0.7%",
    bank: "Rp 5.000",
    ewallet: "1.8%",
    kartu: "3.0% + Rp 2.500",
  },
];

export function Pricing() {
  const { faqs, loading } = useFaqs();
  const [activeCategory, setActiveCategory] = useState<Category>("semua");
  const [showComparison, setShowComparison] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredRows = useMemo(() => {
    if (activeCategory === "semua") return FEE_ROWS;
    return FEE_ROWS.filter((row) => row.category === activeCategory);
  }, [activeCategory]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bp-hero">
        <span className="bp-badge">TRANSPARAN, TANPA BIAYA TERSEMBUNYI</span>
        <h1 className="bp-hero-title">
          Biaya yang <span className="bp-accent">Jujur</span> untuk Setiap
          Transaksi
        </h1>
        <p className="bp-hero-sub">
          Bayar sesuai transaksi yang berhasil. Tidak ada biaya pendaftaran,
          biaya bulanan, atau biaya tersembunyi lainnya.
        </p>
      </section>

      {/* Fee table */}
      <section className="bp-section">
        <div className="bp-section-head">
          <h2>Rincian Biaya per Metode Pembayaran</h2>
          <p>Pilih kategori untuk melihat biaya yang berlaku.</p>
        </div>

        <div className="bp-filter-row" role="tablist" aria-label="Filter kategori pembayaran">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.id}
              className={`bp-filter-chip ${
                activeCategory === tab.id ? "bp-filter-chip-active" : ""
              }`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bp-table-card">
          <table className="bp-table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Metode</th>
                <th>Biaya</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={`${row.method}-${index}`}>
                  <td>
                    <span className="bp-tag">{row.categoryLabel}</span>
                  </td>
                  <td className="bp-method-cell">{row.method}</td>
                  <td className="bp-fee-cell">{row.fee}</td>
                  <td className="bp-note-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Compare with competitor */}
      <section className="bp-section bp-compare-section">
        <div className="bp-compare-card">
          <div className="bp-dashboard-dots" aria-hidden="true">
            <span />
            <span />
          </div>

          <div className="bp-compare-head">
            <div>
              <h2>Bandingkan dengan Kompetitor</h2>
              <p>
                Lihat bagaimana biaya PastiPay dibandingkan penyedia gerbang
                pembayaran lain di Indonesia.
              </p>
            </div>
            <button
              type="button"
              className="bp-btn bp-btn-outline"
              onClick={() => setShowComparison((v) => !v)}
              aria-expanded={showComparison}
            >
              {showComparison ? "Sembunyikan Perbandingan" : "Bandingkan Sekarang"}
            </button>
          </div>

          {showComparison && (
            <div className="bp-compare-table-wrap">
              <table className="bp-table bp-compare-table">
                <thead>
                  <tr>
                    <th>Penyedia</th>
                    <th>QRIS</th>
                    <th>Transfer Bank</th>
                    <th>E-Wallet</th>
                    <th>Kartu Kredit</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPETITORS.map((row) => (
                    <tr
                      key={row.name}
                      className={row.highlight ? "bp-row-highlight" : ""}
                    >
                      <td className="bp-provider-cell">
                        {row.name}
                        {row.highlight && (
                          <span className="bp-tag bp-tag-mint">Pilihan Anda</span>
                        )}
                      </td>
                      <td>{row.qris}</td>
                      <td>{row.bank}</td>
                      <td>{row.ewallet}</td>
                      <td>{row.kartu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="bp-compare-footnote">
                *Angka kompetitor bersifat ilustratif berdasarkan rata-rata
                harga pasar umum, dapat berbeda dengan kebijakan resmi
                masing-masing penyedia.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Accordion Section */}

      <section className="bp-section bp-faq-section">
        <div className="bp-section-head">
          <h2>Pertanyaan Umum</h2>
          <p>Hal-hal yang paling sering ditanyakan seputar biaya PastiPay.</p>
        </div>

        <div className="bp-faq-list">
          {faqs.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={item.question}
                className={`bp-faq-item ${isOpen ? "bp-faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  className="bp-faq-question"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="bp-faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="bp-faq-answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      
    </Layout>
  );
}