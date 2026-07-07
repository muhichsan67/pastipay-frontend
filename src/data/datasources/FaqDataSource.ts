import { axiosInstance } from '../../core/api/axiosInstance';
import { extractApiData } from '../../core/api/extractApiData';
import type { Faq } from '../../domain/entities/Faq';

interface FaqApiItem {
  id: number;
  question: string;
  answer: string;
  order_priority: number;
}

export class FaqDataSource {
  async fetchFaqs(): Promise<Faq[]> {
    const response = await axiosInstance.get('/faqs');
    const items = extractApiData<FaqApiItem>(response.data);

    return items
      .map((item) => ({
        id: item.id,
        question: item.question,
        answer: item.answer,
        orderPriority: item.order_priority,
      }))
      .sort((a, b) => a.orderPriority - b.orderPriority);
  }
}
