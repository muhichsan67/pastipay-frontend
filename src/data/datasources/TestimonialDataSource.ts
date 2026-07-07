import { axiosInstance } from '../../core/api/axiosInstance';
import { extractApiData } from '../../core/api/extractApiData';
import type { Testimonial } from '../../domain/entities/Testimonial';

interface TestimonialApiItem {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  is_active: number | boolean;
}

export class TestimonialDataSource {
  async fetchTestimonials(): Promise<Testimonial[]> {
    const response = await axiosInstance.get('/testimonials');
    const items = extractApiData<TestimonialApiItem>(response.data);

    return items
      .filter((item) => item.is_active === 1 || item.is_active === true)
      .map((item) => ({
        id: item.id,
        name: item.name,
        position: item.position,
        company: item.company,
        content: item.content,
        rating: item.rating,
      }));
  }
}
