import type { FaqRepository } from '../repositories/FaqRepository';
import type { Faq } from '../entities/Faq';

export class GetFaqsUseCase {
  private faqRepository: FaqRepository;

  constructor(faqRepository: FaqRepository) {
    this.faqRepository = faqRepository;
  }

  async execute(): Promise<Faq[]> {
    return await this.faqRepository.getFaqs();
  }
}