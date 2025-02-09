import React, { useState } from "react";
import { auth, googleProvider } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const LoginModal = ({ isOpen, onClose, isSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Account created successfully");
        onClose();
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Logged in successfully");
        onClose();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose()
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-gray-400"
        >
          ✕
        </button>

        <h2 className="text-white text-3xl font-bold text-center mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {" "}
          <div>
            <label className="text-white block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-white block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            onClick={signInWithGoogle}
            className="w-full py-3 px-6 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all flex items-center justify-center space-x-3"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span>
              {isSignUp ? "Sign Up With Google" : "Sign In With Google"}
            </span>
          </button>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded hover:bg-purple-700 transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
