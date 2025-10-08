import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeHeader from './components/WelcomeHeader';
import SignUpForm from './components/SignUpForm';
import SecurityFeatures from './components/SecurityFeatures';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('token');
    console.log("token",isAuthenticated)
    if (isAuthenticated) {
      navigate('/dashboard');
      return;
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleToggleToSignIn = () => {
    navigate('/admin');
  };

  if (isLoading) {
    return (
      <div className="signup-loading-container">
        <div className="signup-loading-content">
          <div className="signup-loading-spinner"></div>
          <p className="signup-loading-text">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page-container">
      <div className="signup-page-content">
        <div className="signup-page-inner">
          <div className="signup-page-grid">
            {/* Left Column - Form */}
            <div className="signup-form-column">
              <div className="signup-form-wrapper">
                <div className="signup-form-card">
                  <div className="signup-form-header">
                    <WelcomeHeader />
                  </div>
                  
                  <SignUpForm onToggleForm={handleToggleToSignIn} />
                </div>
              </div>
            </div>

            {/* Right Column - Security Features */}
            <div className="security-features-column">
              <div className="security-features-wrapper">
                <div className="security-features-card">
                  <SecurityFeatures />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="signup-footer">
        <div className="signup-footer-container">
          <div className="signup-footer-content">
            <div className="signup-footer-copyright">
              © {new Date()?.getFullYear()} Blog Admin Dashboard. All rights reserved.
            </div>
            <div className="signup-footer-links">
              <button className="signup-footer-link">
                Privacy Policy
              </button>
              <button className="signup-footer-link">
                Terms of Service
              </button>
              <button className="signup-footer-link">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;