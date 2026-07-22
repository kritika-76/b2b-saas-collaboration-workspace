import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../constants/testimonials";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-title">
        <h2>What Our Users Say</h2>
        <p>
          Teams around the world trust WorkSphere to manage projects and collaborate efficiently.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;