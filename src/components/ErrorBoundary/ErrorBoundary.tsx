// ErrorBoundary.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({ hasError: false });
  const navigate = useNavigate();

  useEffect(() => {
    const handleError = (error: Error) => {
      console.error('Error caught by error boundary:', error);
      setErrorState({ hasError: true, errorMessage: error.message });

      // Navigate to the 404 page after 2 seconds with the error message
      setTimeout(() => {
        navigate('/404', { state: { errorMessage: error.message } });
      }, 5000);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [navigate]);

  if (errorState.hasError) {
    return <div>Something went wrong. Redirecting to 404 page...</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
