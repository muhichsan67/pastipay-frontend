import { useState, useEffect } from 'react';
import type { ExchangeRate } from '../../domain/entities/ExchangeRate';
import { ExchangeRateDataSource } from '../../data/datasources/ExchangeRateDataSource';
import { ExchangeRateRepositoryImpl } from '../../data/repositories/ExchangeRateRepositoryImpl';
import { GetExchangeRatesUseCase } from '../../domain/usecases/GetExchangeRatesUseCase';

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataSource = new ExchangeRateDataSource();
    const repository = new ExchangeRateRepositoryImpl(dataSource);
    const useCase = new GetExchangeRatesUseCase(repository);

    useCase
      .execute()
      .then((data) => {
        setRates(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { rates, loading, error };
}
