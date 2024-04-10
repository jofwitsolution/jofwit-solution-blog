"use client";

import React, { useState } from "react";
import {
  RefinedSignupSchema,
  SignupSchema,
  validateFields,
} from "@/lib/validations";
import FormMessage from "./FormMessage";

const SignupForm = () => {
  const [formMessage, setFormMessage] = useState({});
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);

    const value = e.target.value;

    // spread operator
    // Objects are copied by reference

    // Method 1
    // const newFormState = { ...formState };
    // newFormState[e.target.name] = value;
    // setFormState(newFormState);

    // Method 2
    // setFormState((prevState) => {
    //   const newFormState = { ...prevState, [e.target.name]: value };
    //   return newFormState;
    // });

    // Method 3
    setFormState((prevState) => ({ ...prevState, [e.target.name]: value }));
    const validatedFields = validateFields(
      { [e.target.name]: value },
      SignupSchema.pick({
        [e.target.name]: true,
      })
    );
    setFormMessage(validatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validatedFields = validateFields(formState, RefinedSignupSchema);

    if (validatedFields.success) {
      console.log("Submitted");
      // Submit the form to the server
    } else {
      console.log("Error! Not submitted");
      setFormMessage(validatedFields);
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
            value={formState.firstname}
            onChange={(e) => handleChange(e)}
            id="firstname"
            name="firstname"
            type="text"
            className="form-input"
          />
          <FormMessage name="firstname" formMessage={formMessage} />
        </div>
        <div className="w-full">
          <label htmlFor="lastname" className="block mb-2">
            Last Name <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={formState.lastname}
            onChange={(e) => handleChange(e)}
            id="lastname"
            name="lastname"
            type="text"
            className="form-input"
          />
          <FormMessage name="lastname" formMessage={formMessage} />
        </div>
        <div className="w-full">
          <label htmlFor="username" className="block mb-2">
            Username <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={formState.username}
            onChange={(e) => handleChange(e)}
            type="text"
            id="username"
            name="username"
            className="form-input"
          />
          <FormMessage name="username" formMessage={formMessage} />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block mb-2">
            Email <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={formState.email}
            onChange={(e) => handleChange(e)}
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
          <FormMessage name="email" formMessage={formMessage} />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block mb-2">
            Password <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={formState.password}
            onChange={(e) => handleChange(e)}
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
          <FormMessage name="password" formMessage={formMessage} />
        </div>
        <div className="w-full">
          <label htmlFor="confirmPassword" className="block mb-2">
            Password Confirmation{" "}
            <span className="text-red-500 text-[1rem]">*</span>
          </label>
          <input
            value={formState.confirmPassword}
            onChange={(e) => handleChange(e)}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-input"
          />
          <FormMessage name="confirmPassword" formMessage={formMessage} />
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
