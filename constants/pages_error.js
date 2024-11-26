import React from 'react';
import { useEffect } from 'react';

const ErrorPage = ({ statusCode }) => {
  useEffect(() => {
    const errorElement = document.getElementById('error');
    if (errorElement) {
      errorElement.classList.add('animate-error');
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div id="error" className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Bir Hata Oluştu!</h1>
        <p className="mt-4 text-lg text-gray-700">
          {statusCode ? `Hata Kodu: ${statusCode}` : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.'}
        </p>
      </div>
      <style jsx>{`
        .animate-error {
          animation: shake 0.5s ease-in-out infinite;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
