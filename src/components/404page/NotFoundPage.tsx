import React from 'react'
import { useLocation } from 'react-router-dom';

type Props = {}

const NotFoundPage = (props: Props) => {
  const location = useLocation();
  const errorMessage = location.state && location.state.errorMessage;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
          {errorMessage ? <p>Error message: {errorMessage}</p> :
        <p className="text-gray-600">The page you are looking for does not exist.</p>}
      </div>
    </div>
  )
}

export default NotFoundPage