import { axiosInstance } from '../../core/api/axiosInstance';
import { extractApiData } from '../../core/api/extractApiData';
import type { ExchangeRate } from '../../domain/entities/ExchangeRate';

interface ExchangeRateApiItem {
  id?: number;
  from_currency: string;
  to_currency: string;
  rate: number | string;
}

export class ExchangeRateDataSource {
  async fetchExchangeRates(): Promise<ExchangeRate[]> {
    const response = await axiosInstance.get('/exchange-rates');
    const items = extractApiData<ExchangeRateApiItem>(response.data);

    return items.map((item) => ({
      fromCurrency: item.from_currency,
      toCurrency: item.to_currency,
      rate: Number(item.rate),
    }));
  }
}
