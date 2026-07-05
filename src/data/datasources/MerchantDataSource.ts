import type { MerchantFormData } from '../../domain/entities/MerchantFormData';

export class MerchantDataSource {
  async sendForm(formData: MerchantFormData): Promise<{ success: boolean; message: string }> {
    // Log data untuk memastikan data dari form masuk ke data layer
    console.log("Mengirim data form ke API Server:", formData);
    
    // Simulasi jeda jaringan (network latency) selama 800 milidetik
    await new Promise(resolve => setTimeout(resolve, 800));

    // Kembalikan respons statis (mock response)
    return { 
      success: true, 
      message: "Pendaftaran merchant berhasil dikirim! Tim kami akan menghubungi Anda via email." 
    };
  }
}