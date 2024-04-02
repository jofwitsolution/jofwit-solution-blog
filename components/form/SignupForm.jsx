"use client";

import React from "react";
import { z } from "zod";

const SignupForm = () => {
  // Schema is the shape of an object
  const SignupSchema = z.object({
    name: z.string().min(3),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(10),
    confirmPassword: z.string().min(10),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    console.log(values);

    try {
      const result = SignupSchema.parse(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow max-sm:w-full bg-white rounded-lg px-4 py-4 sm:px-8 sm:py-6">
      <h1 className="font-semibold text-[1.2rem] md:text-[1.4rem] mb-6">
        Create your account
      </h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full sm:w-[30rem] space-y-2"
      >
        <div className="w-full">
          <label htmlFor="name" className="block mb-2">
            Name <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input id="name" name="name" type="name" className="form-input" />
        </div>
        <div className="w-full">
          <label htmlFor="username" className="block mb-2">
            Username <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            type="name"
            id="username"
            name="username"
            className="form-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block mb-2">
            Email <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-2">
            Password <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="confirmPassword" className="block mb-2">
            Password Confirmation{" "}
            <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
          />
        </div>
        <div className="!mt-4">
          <button
            type="submit"
            className="text-white rounded font-medium bg-primary px-2 py-1"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
