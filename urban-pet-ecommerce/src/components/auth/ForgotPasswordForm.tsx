import React, { useState } from "react";
import { Mail, ArrowRight, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export const ForgotPasswordForm = () => {
  const {
    resetPassword,
    loading,
    error
  } = useAuth();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");
  const validateEmail = () => {
    if (!email) {
      setValidationError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError("Please enter a valid email");
      return false;
    }
    setValidationError("");
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;
    try {
      await resetPassword(email);
      setSubmitted(true);
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="text-center text-3xl font-bold text-brown-800">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-brown-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        {!submitted ? <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brown-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brown-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationError ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500`} placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              {validationError && <p className="mt-1 text-sm text-red-600">{validationError}</p>}
            </div>
            {error && <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>}
            <button type="submit" disabled={loading} className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-sienna-500 hover:bg-sienna-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sienna-500 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? <Loader className="animate-spin h-4 w-4" /> : <>
                  Send Reset Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>}
            </button>
            <div className="text-center">
              <Link to="/login" className="text-sm font-medium text-sienna-500 hover:text-sienna-600">
                Back to Sign in
              </Link>
            </div>
          </form> : <div className="mt-8 text-center">
            <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mx-auto">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-brown-800">
              Check your email
            </h3>
            <p className="mt-2 text-sm text-brown-600">
              We've sent a password reset link to {email}
            </p>
            <button onClick={() => {
          setSubmitted(false);
          setEmail("");
        }} className="mt-6 text-sm font-medium text-sienna-500 hover:text-sienna-600">
              Try another email
            </button>
          </div>}
      </div>
    </div>;
};