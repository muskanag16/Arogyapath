import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFirebase } from "../Context/firebase";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("hii",firebase);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await firebase.SignupUserWithEmailandPassword(email, password);
        alert("✅ Account created successfully!");
      } else {
        const response=await firebase.LoginUserWithEmailandPassword(email, password);
        alert("✅ Logged in successfully!");
        console.log(response.user.email);
        navigate("/");
      }
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await firebase.SignInWithGoogle();
      alert("✅ Google sign-in successful!");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await firebase.SignInWithFacebook();
      alert("✅ Facebook sign-in successful!");
    } catch (error) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-start pt-6 p-6 md:p-12 bg-gray-50">
        <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-xl min-h-[80vh] self-start">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            {isSignup ? "Create a new account" : "Welcome Back!"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>
              {!isSignup && (
                <button type="button" className="text-blue-600 hover:underline">
                  Forgot Password?
                </button>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded text-lg"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t" />
            <span className="mx-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-t" />
          </div>

          {/* Social Auth Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 border p-3 rounded hover:bg-gray-100"
            >
              <FcGoogle size={20} />
              Sign in with Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center gap-2 border p-3 rounded hover:bg-gray-100 text-blue-600"
            >
              <FaFacebookF size={20} />
              Sign in with Facebook
            </button>
          </div>

          {/* Toggle between Login/Signup */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 cursor-pointer hover:underline"
            >
              {isSignup ? "Login here" : "Sign up here"}
            </span>
          </p>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="w-full md:w-1/2 bg-blue-100 flex items-center justify-center">
        <img
          src="/images/our.png"
          alt="Therapy Visual"
          className="object-cover w-full h-full max-h-[1500px]"
        />
      </div>
    </div>
  );
};

export default AuthPage;
