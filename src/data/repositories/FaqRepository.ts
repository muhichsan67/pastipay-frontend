import type { Faq } from '../../domain/entities/Faq';

export interface FaqRepository {
  getFaqs(): Promise<Faq[]>;
}