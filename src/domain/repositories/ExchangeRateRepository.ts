import type { ExchangeRate } from '../entities/ExchangeRate';

export interface ExchangeRateRepository {
  getExchangeRates(): Promise<ExchangeRate[]>;
}
