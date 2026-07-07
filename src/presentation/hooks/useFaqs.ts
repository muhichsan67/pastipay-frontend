import { useState, useEffect } from 'react';
import type { Faq } from '../../domain/entities/Faq';
import { FaqDataSource } from '../../data/datasources/FaqDataSource';
import { FaqRepositoryImpl } from '../../data/repositories/FaqRepositoryImpl';
import { GetFaqsUseCase } from '../../domain/usecases/GetFaqsUseCase';

export function useFaqs() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataSource = new FaqDataSource();
    const repository = new FaqRepositoryImpl(dataSource);
    const useCase = new GetFaqsUseCase(repository);

    useCase
      .execute()
      .then((data: Faq[]) => {
        setFaqs(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { faqs, loading, error };
}
