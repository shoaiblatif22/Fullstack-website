import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#007BFF",
        color: "#fff",
      }}
    >
      {/* Logo Section */}
      <div>
        <h1 style={{ margin: 0 }}>
          <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
            E-Commerce-Shop
          </Link>
        </h1>
      </div>

      {/* Navbar Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ margin: "0 1rem" }}>
            <Link href="/products" style={{ textDecoration: "none", color: "#fff" }}>
              Products
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link href="/about" style={{ textDecoration: "none", color: "#fff" }}>
              About
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link href="/contact" style={{ textDecoration: "none", color: "#fff" }}>
              Contact
            </Link>
          </li>
          <li style={{ margin: "0 1rem" }}>
            <Link href="/cart" style={{ textDecoration: "none", color: "#fff" }}>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

