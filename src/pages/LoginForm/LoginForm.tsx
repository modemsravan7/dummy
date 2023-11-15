// Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginForm>({ username: '', password: '' });
  const [errors, setErrors] = useState<{ [key in keyof LoginForm]?: string }>({});
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const navigate = useNavigate(); 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: { [key in keyof LoginForm]?: string } = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.username)) {
      newErrors.username = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(formData.password)) {
      newErrors.password =
        'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform login logic here
      
    navigate('/home');
      setSubmissionMessage('Login successful!');
    } else {
      setSubmissionMessage(null);
    }
  };

  useEffect(() => {
    // Reset errors and submission message when form data changes
    setErrors({});
    setSubmissionMessage(null);
  }, [formData]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className= "flex flex-col items-center justify-center bg-gray-200 h-[50vh] w-[50vw] p-8 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-[5vh]">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username (Email):
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-[30vw] border  rounded-xl ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

          <div className="mb-4 mt-[5vh]">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-[30vw] border rounded-xl ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className='mt-[5vh] flex items-center justify-center'>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>

          {submissionMessage && <p className="text-green-500 mt-2">{submissionMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
