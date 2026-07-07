import type { Testimonial } from '../entities/Testimonial';
import type { TestimonialRepository } from '../repositories/TestimonialRepository';

export class GetTestimonialsUseCase {
  private testimonialRepository: TestimonialRepository;

  constructor(testimonialRepository: TestimonialRepository) {
    this.testimonialRepository = testimonialRepository;
  }

  async execute(): Promise<Testimonial[]> {
    return this.testimonialRepository.getTestimonials();
  }
}
