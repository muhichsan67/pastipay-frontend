import type { MerchantFormData } from '../entities/MerchantFormData';
import type { MerchantRepository } from '../repositories/MerchantRepository';

export class SubmitMerchantFormUseCase {
  private merchantRepository: MerchantRepository;

  // Constructor kini menerima objek yang patuh pada interface MerchantRepository
  constructor(merchantRepository: MerchantRepository) {
    this.merchantRepository = merchantRepository;
  }

  // Parameter formData wajib bertipe MerchantFormData
  async execute(formData: MerchantFormData): Promise<{ success: boolean; message: string }> {
    // Validasi aturan bisnis dasar di tingkat domain
    if (!formData.email.includes("@")) {
      throw new Error("Email tidak valid");
    }
    
    return await this.merchantRepository.submitForm(formData);
  }
}