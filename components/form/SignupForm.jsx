"use client";

import { SignupSchema, validateFields } from "@/lib/validations";
import React from "react";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    const validatedFields = validateFields(values, SignupSchema);

    console.log(validatedFields);

    if (validatedFields.success) {
      console.log("Submitted");
    } else {
      console.log("Error! Not submitted");
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
          <label htmlFor="firstname" className="block mb-2">
            First Name <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            className="form-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="block mb-2">
            Last Name <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            className="form-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="username" className="block mb-2">
            Username <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            type="text"
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
