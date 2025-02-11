import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/home/ValueProposition";
import { ProductGrid } from "./components/ProductGrid";
import { Testimonials } from "./components/home/Testimonials";
import { SpecialOffers } from "./components/home/SpecialOffers";
import { TrustIndicators } from "./components/home/TrustIndicators";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { CategoriesPage } from "./pages/CategoriesPage";
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { Basket } from "./components/Basket";
import { AdminDashboard } from "./components/AdminDashboard";
import { SEO } from "./components/SEO";
import { PaymentPage } from "./components/payment/PaymentPage";
const HomePage = () => <>
    <SEO title="Urban Pet - Premium Pet Supplies & Accessories" description="Discover premium pet accessories, food, and supplies for your beloved furry friends. Quality products, fast shipping, and exceptional customer service." keywords="pet supplies, pet accessories, dog supplies, cat supplies, pet food, pet care" />
    <Hero />
    <ValueProposition />
    <ProductGrid />
    <Testimonials />
    <SpecialOffers />
    <TrustIndicators />
    <CallToAction />
  </>;
export function App() {
  return <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <header>
            <Navbar />
          </header>
          <div className="pt-16">
            <main id="main-content" role="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} />
                <Route path="/shop" element={<CategoriesPage />} />
                <Route path="/basket" element={<ProtectedRoute>
                      <Basket />
                    </ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute>
                      <PaymentPage />
                    </ProtectedRoute>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>;
}