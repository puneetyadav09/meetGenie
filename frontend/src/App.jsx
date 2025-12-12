import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

import Loader from './components/Loader';
import PrivateRoute from './routes/PrivateRoute';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const APIPage = lazy(() => import('./pages/APIPage'));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const PressPage = lazy(() => import('./pages/PressPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ScheduleDemoPage = lazy(() => import('./pages/ScheduleDemoPage'));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={
                <AuthProvider>
                  <LoginPage />
                </AuthProvider>
              } 
            />
            <Route 
              path="/signup" 
              element={
                <AuthProvider>
                  <SignupPage />
                </AuthProvider>
              } 
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/api" element={<APIPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/schedule-demo" element={<ScheduleDemoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;