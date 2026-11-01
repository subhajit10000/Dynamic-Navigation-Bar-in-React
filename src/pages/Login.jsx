import React, { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#254153] font-sans px-4">
      {/* Main Login Card */}
      <div className="w-full max-w-sm bg-white rounded-md shadow-md p-8 mb-6">
        <h2 className="text-3xl font-medium text-gray-600 text-center mb-8">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#f2f2f2] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#f2f2f2] text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#3498db] text-white font-semibold rounded hover:bg-blue-600 active:scale-[0.99] transition-all duration-150 text-base"
          >
            Sign in
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a
            href="#forgot-password"
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors"
          >
            Lost your Password?
          </a>
        </div>
      </div>

      {/* Sign Up Link footer */}
      <div className="text-white text-sm text-center">
        Don't have an account?{' '}
        <a href="/register" className="underline hover:text-blue-100 transition-colors">
          Sign up here!
        </a>
      </div>
    </div>
  );
};

export default Login;