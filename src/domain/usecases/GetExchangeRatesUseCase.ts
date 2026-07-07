import type { ExchangeRate } from '../entities/ExchangeRate';
import type { ExchangeRateRepository } from '../repositories/ExchangeRateRepository';

export class GetExchangeRatesUseCase {
  private exchangeRateRepository: ExchangeRateRepository;

  constructor(exchangeRateRepository: ExchangeRateRepository) {
    this.exchangeRateRepository = exchangeRateRepository;
  }

  async execute(): Promise<ExchangeRate[]> {
    return this.exchangeRateRepository.getExchangeRates();
  }
}
