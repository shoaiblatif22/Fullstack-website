import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Loader } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    login,
    loading,
    error
  } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await login(formData.email, formData.password);
      const from = (location.state as any)?.from?.pathname || "/";
      navigate(from);
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };
  return <div className="min-h-screen flex items-center justify-center bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="text-center text-3xl font-bold text-brown-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-brown-600">
            Please sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brown-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brown-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationErrors.email ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500 text-brown-900 placeholder-brown-400`} placeholder="you@example.com" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} />
              </div>
              {validationErrors.email && <p className="mt-1 text-sm text-red-600">
                  {validationErrors.email}
                </p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brown-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-brown-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full pl-10 pr-3 py-2 border border-brown-200 rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500 text-brown-900 placeholder-brown-400" placeholder="••••••••" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} />
              </div>
            </div>
          </div>
          {error && <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-sienna-500 focus:ring-sienna-500 border-brown-200 rounded" checked={formData.rememberMe} onChange={e => setFormData({
              ...formData,
              rememberMe: e.target.checked
            })} />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-brown-600">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-sienna-500 hover:text-sienna-600">
                Forgot your password?
              </a>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-sienna-500 hover:bg-sienna-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sienna-500 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <Loader className="animate-spin h-4 w-4" /> : <>
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </>}
          </button>
          <div className="text-center">
            <span className="text-sm text-brown-600">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-sienna-500 hover:text-sienna-600">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>;
};