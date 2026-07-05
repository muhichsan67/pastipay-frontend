import type { Faq } from '../entities/Faq';

export interface FaqRepository {
  getFaqs(): Promise<Faq[]>;
}