"use client";

import React, { useState } from "react";
import { SignupSchema, validateFields } from "@/lib/validations";

const SignupForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      firstname,
      lastname,
      username,
      email,
      password,
      confirmPassword,
    };

    const validatedFields = validateFields(values, SignupSchema);

    // console.log(validatedFields);

    if (validatedFields.success) {
      console.log("Submitted");
    } else {
      console.log("Error! Not submitted");
    }
  };

  return (
    <div className="auth-form-wrapper">
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
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
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
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-2">
            Password <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
