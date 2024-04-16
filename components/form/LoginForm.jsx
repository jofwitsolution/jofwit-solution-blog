"use client";

import React, { useState } from "react";
import { LoginSchema, validateFields } from "@/lib/validations";
import FormMessage from "./FormMessage";

const LoginForm = () => {
  const [formMessage, setFormMessage] = useState({});
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setFormState((prevState) => ({ ...prevState, [e.target.name]: value }));
    const validatedFields = validateFields(
      { [e.target.name]: value },
      LoginSchema.pick({
        [e.target.name]: true,
      })
    );
    setFormMessage(validatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validatedFields = validateFields(formState, LoginSchema);

    if (validatedFields.success) {
      console.log("Submitted");
      // Submit the form to the server
    } else {
      console.log("Error! Not submitted");
      setFormMessage(validatedFields);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full sm:w-[30rem] space-y-2"
      >
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
        <div className="!mt-4">
          <button
            type="submit"
            className="text-white rounded font-medium bg-primary px-2 py-1"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
