import { useState, useEffect } from 'react';
import type { Faq } from '../../domain/entities/Faq';
import { FaqDataSource } from '../../data/datasources/FaqDataSource';
import { FaqRepositoryImpl } from '../../data/repositories/FaqRepositoryImpl';
import { GetFaqsUseCase } from '../../domain/usecases/GetFaqsUseCase';

export function useFaqs() {
  // Beritahu React bahwa state ini berisi array dari objek Faq
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dataSource = new FaqDataSource();
    const repository = new FaqRepositoryImpl(dataSource);
    const useCase = new GetFaqsUseCase(repository);

    useCase.execute().then((data: Faq[]) => {
      setFaqs(data);
      setLoading(false);
    });
  }, []);

  return { faqs, loading };
}