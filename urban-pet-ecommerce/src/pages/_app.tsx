import { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/globals.css"; 

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <header>
          <Navbar />
        </header>
        <div className="pt-16">
          <main id="main-content" role="main">
            <Component {...pageProps} /> 
          </main>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
