import React from "react";

const FormMessage = ({ name, formMessage }) => {
  return (
    <>
      {!formMessage.success && (
        <div className="mt-1 text-red-400 text-[0.75rem]">
          {formMessage[name]}
        </div>
      )}
    </>
  );
};

export default FormMessage;
