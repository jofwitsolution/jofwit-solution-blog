import { z } from "zod";

export function validateFields(values, Schema) {
  const validatedFields = Schema.safeParse(values);
  // console.log(validatedFields);

  if (validatedFields.error) {
    const zodErrors = validatedFields.error.errors;

    const errors = { success: false };
    zodErrors.forEach((item) => {
      errors[item.path[0]] = item.message;
    });

    // console.log(errors);

    return errors;
  }

  return validatedFields;
}

// Schema is the shape of an object
export const SignupSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "First name must contain at least 3 char(s)." }),
  lastname: z
    .string()
    .min(3, { message: "last name must contain at least 3 char(s)." }),
  username: z
    .string()
    .min(5, { message: "Username must contain at least 5 char(s)." }),
  email: z.string().email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(10, { message: "Password must contain at least 10 char(s)" }),
  confirmPassword: z.string().min(10, {
    message: "Confirm Password must contain at least 10 char(s)",
  }),
});
