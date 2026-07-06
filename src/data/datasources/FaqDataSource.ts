const MOCK_FAQS = [
  {
    id: 1,
    question: "Apakah ada biaya pendaftaran atau biaya bulanan?",
    answer: "Tidak ada. Pendaftaran, aktivasi akun, dan biaya bulanan semuanya gratis. Anda hanya membayar biaya per transaksi sesuai metode pembayaran yang digunakan."
  },
  {
    id: 2,
    question: "Kapan dana merchant dicairkan?",
    answer: "Untuk transfer bank dan e-wallet, dana dicairkan otomatis H+1 ke rekening terdaftar Anda. Tidak perlu pengajuan manual, prosesnya berjalan otomatis setiap hari kerja."
  },
  {
    id: 3,
    question: "Apakah ada minimum volume transaksi?",
    answer: "Tidak ada minimum volume transaksi maupun kontrak jangka panjang. Anda bebas menggunakan layanan sesuai kebutuhan bisnis, baik untuk transaksi kecil maupun skala besar."
  }
];

export class FaqDataSource {
  async fetchFaqs() {
    // Mode Statis Saat Ini. Jika API sudah siap, ganti baris bawah dengan:
    // const response = await fetch('https://api.pastipay.co.id/v1/faqs'); return response.json();
    return MOCK_FAQS;
  }
}