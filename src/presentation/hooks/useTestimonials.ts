import { useState, useEffect } from 'react';
import type { Testimonial } from '../../domain/entities/Testimonial';
import { TestimonialDataSource } from '../../data/datasources/TestimonialDataSource';
import { TestimonialRepositoryImpl } from '../../data/repositories/TestimonialRepositoryImpl';
import { GetTestimonialsUseCase } from '../../domain/usecases/GetTestimonialsUseCase';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataSource = new TestimonialDataSource();
    const repository = new TestimonialRepositoryImpl(dataSource);
    const useCase = new GetTestimonialsUseCase(repository);

    useCase
      .execute()
      .then((data) => {
        setTestimonials(data);
        setError(null);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { testimonials, loading, error };
}
