import { axiosInstance } from '../../core/api/axiosInstance';
import type { MerchantFormData } from '../../domain/entities/MerchantFormData';

interface ContactSubmitPayload {
  full_name: string;
  job_title: string;
  company_email: string;
  company_website?: string;
  phone_number: string;
  estimated_volume: string;
  message: string;
}

export class MerchantDataSource {
  async sendForm(formData: MerchantFormData): Promise<{ success: boolean; message: string }> {
    const payload: ContactSubmitPayload = {
      full_name: formData.name,
      job_title: formData.position,
      company_email: formData.email,
      phone_number: formData.phone,
      estimated_volume: formData.volume,
      message: formData.message,
    };

    if (formData.website.trim()) {
      payload.company_website = formData.website;
    }

    const response = await axiosInstance.post('/contact/submit', payload);
    const data = response.data as { success?: boolean; message?: string };

    return {
      success: data.success ?? true,
      message: data.message ?? 'Berhasil mengirim pesan',
    };
  }
}
