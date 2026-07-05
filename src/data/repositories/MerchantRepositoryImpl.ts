import type { MerchantRepository } from '../../domain/repositories/MerchantRepository';
import type { MerchantFormData } from '../../domain/entities/MerchantFormData';
import type { MerchantDataSource } from '../datasources/MerchantDataSource';

export class MerchantRepositoryImpl implements MerchantRepository {
  private dataSource: MerchantDataSource;

  constructor(merchantDataSource: MerchantDataSource) {
    this.dataSource = merchantDataSource;
  }

  async submitForm(formData: MerchantFormData): Promise<{ success: boolean; message: string }> {
    // Menghubungkan kontrak Domain ke Data Source aktual
    return await this.dataSource.sendForm(formData);
  }
}