import type { MerchantFormData } from '../entities/MerchantFormData';

export interface MerchantRepository {
  submitForm(formData: MerchantFormData): Promise<{ success: boolean; message: string }>;
}