import React from "react";
import { Star } from "lucide-react";
export const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    rating: 5,
    text: "The quality of products from Urban Pet is exceptional. My dog absolutely loves his new bed!",
    petType: "Dog Owner"
  }, {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    rating: 5,
    text: "Great selection of premium pet products. The customer service is outstanding!",
    petType: "Cat Owner"
  }, {
    name: "Emily Davis",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    rating: 5,
    text: "Urban Pet has everything I need for my pets. Fast shipping and great prices!",
    petType: "Multiple Pets"
  }];
  return <section className="bg-white py-16" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-brown-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-brown-600">
            Join thousands of happy pet owners who trust Urban Pet
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3" role="list" aria-label="Customer testimonials">
          {testimonials.map((testimonial, index) => <article key={index} className="bg-cream rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/Review">
              <div className="flex items-center">
                <img src={testimonial.image} alt={`Profile picture of ${testimonial.name}`} className="h-12 w-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brown-800" itemProp="author">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-brown-600">
                    {testimonial.petType}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex" aria-label={`Rating: ${testimonial.rating} out of 5 stars`} itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current text-sienna-500" aria-hidden="true" />)}
              </div>
              <p className="mt-4 text-brown-700" itemProp="reviewBody">
                {testimonial.text}
              </p>
            </article>)}
        </div>
      </div>
    </section>;
};