import type { Testimonial } from '../entities/Testimonial';

export interface TestimonialRepository {
  getTestimonials(): Promise<Testimonial[]>;
}
