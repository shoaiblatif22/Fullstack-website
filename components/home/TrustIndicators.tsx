import React from "react";
export const TrustIndicators = () => {
  const awards = [{
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Best Pet Store 2024",
    organization: "Pet Industry Awards"
  }, {
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Excellence in Service",
    organization: "E-commerce Awards"
  }, {
    logo: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    name: "Top Rated Store",
    organization: "Consumer Choice Awards"
  }];
  return <section className="bg-brown-50 py-12" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="trust-heading" className="text-2xl font-bold text-brown-800">
            Trusted by Pet Lovers
          </h2>
          <p className="mt-2 text-brown-600">
            Featured in leading publications and awarded for excellence
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3" role="list" aria-label="Awards and recognition">
          {awards.map((award, index) => <article key={index} className="flex flex-col items-center" role="listitem" itemScope itemType="https://schema.org/Award">
              <img src={award.logo} alt={`${award.name} award logo`} className="h-16 w-auto grayscale hover:grayscale-0 transition-all" itemProp="image" />
              <p className="mt-4 text-sm font-medium text-brown-800" itemProp="name">
                {award.name}
              </p>
              <p className="text-xs text-brown-600" itemProp="description">
                {award.organization}
              </p>
            </article>)}
        </div>
      </div>
    </section>;
};