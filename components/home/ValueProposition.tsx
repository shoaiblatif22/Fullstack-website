import React from "react";
import { Truck, Shield, Heart, Clock } from "lucide-react";
export const ValueProposition = () => {
  const benefits = [{
    icon: Heart,
    title: "Premium Quality",
    description: "Hand-picked products for your beloved pets"
  }, {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $50"
  }, {
    icon: Shield,
    title: "Satisfaction Guarantee",
    description: "30-day money-back guarantee"
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Expert pet care advice always available"
  }];
  return <section className="bg-cream py-16" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="benefits-heading" className="text-3xl font-bold text-brown-800">
            Why Choose Urban Pet?
          </h2>
          <p className="mt-4 text-lg text-brown-600">
            Your trusted partner in providing the best care for your furry
            friends
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="Benefits">
          {benefits.map((benefit, index) => <article key={index} className="text-center" role="listitem">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-sienna-100" aria-hidden="true">
                <benefit.icon className="h-6 w-6 text-sienna-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-brown-800">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-brown-600">
                {benefit.description}
              </p>
            </article>)}
        </div>
      </div>
    </section>;
};