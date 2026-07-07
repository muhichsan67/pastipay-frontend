import type { TestimonialRepository } from '../../domain/repositories/TestimonialRepository';
import type { Testimonial } from '../../domain/entities/Testimonial';
import type { TestimonialDataSource } from '../datasources/TestimonialDataSource';

export class TestimonialRepositoryImpl implements TestimonialRepository {
  private dataSource: TestimonialDataSource;

  constructor(dataSource: TestimonialDataSource) {
    this.dataSource = dataSource;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.dataSource.fetchTestimonials();
  }
}
