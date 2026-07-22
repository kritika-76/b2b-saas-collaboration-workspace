type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  review: string;
};

const TestimonialCard = ({
  name,
  role,
  company,
  review,
}: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-review">"{review}"</p>

      <div className="testimonial-user">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h4>{name}</h4>
          <span>
            {role} • {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;