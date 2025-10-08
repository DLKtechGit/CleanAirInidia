import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import SignInForm from './components/SignInForm';
import SecurityFeatures from './components/SecurityFeatures';
import './SignInPage.css';

const SignInPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

 // Don't render if already authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <AuthLayout>
      <div className="signin-page-grid">
        {/* Sign In Form */}
        <div className="signin-form-column">
          <SignInForm />
        </div>

        {/* Security Features - Desktop Only */}
        <div className="security-features-column">
          <SecurityFeatures />
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;