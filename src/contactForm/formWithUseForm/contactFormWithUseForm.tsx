import { useForm, SubmitHandler } from "react-hook-form";

import s from "./contactFormWithUseForm.module.css";
type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormWithUseForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = () => {
    alert("Form is submitted");
  };
  const handleBlur = async (field: keyof FormValues) => {
    await trigger(field);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.formCotainer}>
      <label>Name</label>
      <input
        {...register("name", {
          required: "Name is required",
          pattern: { value: /^[A-Za-z]+$/i, message: "Invalid name format" },
          onBlur: () => handleBlur("name"),
        })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.message && (
        <div className={s.error}>{errors.name?.message}</div>
      )}
      <label>Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",
          },
          onBlur: () => handleBlur("email"),
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.message && (
        <div className={s.error}>{errors.email?.message}</div>
      )}
      <label>Message</label>
      <input
        {...register("message", {
          required: "Message is required",
          minLength: {
            value: 1,
            message: "Message must be at least 1 character",
          },
          maxLength: {
            value: 10,
            message: "Message must be less than 10 characters",
          },
          onBlur: () => handleBlur("message"),
        })}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {errors.message?.message && (
        <div className={s.error}>{errors.message?.message}</div>
      )}
      <button type={"submit"}>Submit</button>
    </form>
  );
};
