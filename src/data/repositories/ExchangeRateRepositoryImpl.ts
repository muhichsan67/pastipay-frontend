import type { ExchangeRateRepository } from '../../domain/repositories/ExchangeRateRepository';
import type { ExchangeRate } from '../../domain/entities/ExchangeRate';
import type { ExchangeRateDataSource } from '../datasources/ExchangeRateDataSource';

export class ExchangeRateRepositoryImpl implements ExchangeRateRepository {
  private dataSource: ExchangeRateDataSource;

  constructor(dataSource: ExchangeRateDataSource) {
    this.dataSource = dataSource;
  }

  async getExchangeRates(): Promise<ExchangeRate[]> {
    return this.dataSource.fetchExchangeRates();
  }
}
