import type { FaqRepository } from '../../domain/repositories/FaqRepository';
import type { Faq } from '../../domain/entities/Faq';
import { FaqDataSource } from '../datasources/FaqDataSource';

export class FaqRepositoryImpl implements FaqRepository {
  private dataSource: FaqDataSource;

  constructor(faqDataSource: FaqDataSource) {
    this.dataSource = faqDataSource;
  }

  async getFaqs(): Promise<Faq[]> {
    return await this.dataSource.fetchFaqs();
  }
}