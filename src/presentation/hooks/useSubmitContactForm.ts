import { useState, useCallback } from 'react';
import type { MerchantFormData } from '../../domain/entities/MerchantFormData';
import { MerchantDataSource } from '../../data/datasources/MerchantDataSource';
import { MerchantRepositoryImpl } from '../../data/repositories/MerchantRepositoryImpl';
import { SubmitMerchantFormUseCase } from '../../domain/usecases/SubmitMerchantFormUseCase';

type SubmitStatus = 'idle' | 'success' | 'error';

export function useSubmitContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [message, setMessage] = useState('');

  const submitForm = useCallback(async (formData: MerchantFormData) => {
    setLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const dataSource = new MerchantDataSource();
      const repository = new MerchantRepositoryImpl(dataSource);
      const useCase = new SubmitMerchantFormUseCase(repository);
      const result = await useCase.execute(formData);

      setStatus('success');
      setMessage(result.message);
      return true;
    } catch (err) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Terjadi kesalahan');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const resetStatus = useCallback(() => {
    setStatus('idle');
    setMessage('');
  }, []);

  return { submitForm, loading, status, message, resetStatus };
}
