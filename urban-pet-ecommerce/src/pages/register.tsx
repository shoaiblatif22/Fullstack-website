'use client'
import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, Loader, Check, X } from "lucide-react";
import Link from 'next/link'
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
const PASSWORD_REQUIREMENTS = [{
  id: "length",
  label: "At least 8 characters",
  regex: /.{8,}/
}, {
  id: "uppercase",
  label: "At least one uppercase letter",
  regex: /[A-Z]/
}, {
  id: "lowercase",
  label: "At least one lowercase letter",
  regex: /[a-z]/
}, {
  id: "number",
  label: "At least one number",
  regex: /\d/
}, {
  id: "special",
  label: "At least one special character",
  regex: /[!@#$%^&*]/
}];
export default function RegisterForm() {
  const router = useRouter(); 
  const {
    register,
    loading,
    error
  } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const validatePassword = (password: string) => {
    return PASSWORD_REQUIREMENTS.every(req => req.regex.test(password));
  };
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!validatePassword(formData.password)) {
      errors.password = "Password does not meet requirements";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await register(formData.name, formData.email, formData.password);
      router.push("/login");
    } catch (err) {

    }
  };
  const checkRequirement = (requirement: {
    regex: RegExp;
  }) => {
    return requirement.regex.test(formData.password);
  };
  return <div className="min-h-screen flex items-center justify-center bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="text-center text-3xl font-bold text-brown-800">
            Create an Account
          </h2>
          <p className="mt-2 text-center text-sm text-brown-600">
            Join our pet lovers community
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brown-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-brown-400" />
                </div>
                <input id="name" name="name" type="text" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationErrors.name ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500`} placeholder="John Doe" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} />
              </div>
              {validationErrors.name && <p className="mt-1 text-sm text-red-600">
                  {validationErrors.name}
                </p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brown-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-brown-400" />
                </div>
                <input id="email" name="email" type="email" autoComplete="email" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationErrors.email ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500`} placeholder="you@example.com" value={formData.email} onChange={e => setFormData({
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
                <input id="password" name="password" type="password" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationErrors.password ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500`} placeholder="••••••••" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} onFocus={() => setShowPasswordRequirements(true)} />
              </div>
              {showPasswordRequirements && <div className="mt-2 space-y-2">
                  {PASSWORD_REQUIREMENTS.map(req => <div key={req.id} className="flex items-center space-x-2">
                      {checkRequirement(req) ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
                      <span className={`text-sm ${checkRequirement(req) ? "text-green-700" : "text-red-700"}`}>
                        {req.label}
                      </span>
                    </div>)}
                </div>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-brown-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-brown-400" />
                </div>
                <input id="confirm-password" name="confirm-password" type="password" required className={`appearance-none block w-full pl-10 pr-3 py-2 border ${validationErrors.confirmPassword ? "border-red-300" : "border-brown-200"} rounded-lg focus:outline-none focus:ring-sienna-500 focus:border-sienna-500`} placeholder="••••••••" value={formData.confirmPassword} onChange={e => setFormData({
                ...formData,
                confirmPassword: e.target.value
              })} />
              </div>
              {validationErrors.confirmPassword && <p className="mt-1 text-sm text-red-600">
                  {validationErrors.confirmPassword}
                </p>}
            </div>
          </div>
          {error && <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>}
          <button type="submit" disabled={loading} className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-sienna-500 hover:bg-sienna-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sienna-500 disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <Loader className="animate-spin h-4 w-4" /> : <>
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </>}
          </button>
          <div className="text-center">
            <span className="text-sm text-brown-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-sienna-500 hover:text-sienna-600">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>;
};