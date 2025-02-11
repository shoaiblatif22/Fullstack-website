const Hero = () => {
    return (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 1rem",
        //   backgroundImage: "url('/path-to-your-image.jpg')", // Add a background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff", // Ensure text contrasts with the background
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Our Store!
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Discover amazing products at unbeatable prices.
        </p>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#007BFF", // CTA button color
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Shop Now clicked!")} // Replace with a navigation link
        >
          Shop Now
        </button>
      </section>
    );
  };
  
  export default Hero;
  