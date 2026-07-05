const MOCK_FAQS = [
  { id: 1, question: "Apakah ada biaya pendaftaran atau biaya bulanan?", answer: "Tidak ada biaya pendaftaran maupun biaya bulanan. Anda hanya membayar per transaksi sukses." },
  { id: 2, question: "Kapan dana merchant dicairkan?", answer: "Dana merchant akan dicairkan secara otomatis pada H+1 hari kerja." }
];

export class FaqDataSource {
  async fetchFaqs() {
    // Mode Statis Saat Ini. Jika API sudah siap, ganti baris bawah dengan:
    // const response = await fetch('https://api.pastipay.co.id/v1/faqs'); return response.json();
    return MOCK_FAQS;
  }
}