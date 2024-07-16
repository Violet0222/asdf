import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import s from "./contactFrom.module.css";
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const namePattern = /^[a-zA-Z\s]+$/;
  const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setName(newValue);
    if (!namePattern.test(newValue)) {
      setError("Name should include only letters");
    } else if (newValue.trim() === "") {
      setError("Field can't be empty");
    } else setError("");
  };
  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setEmail(newValue);

    if (!emailPattern.test(newValue)) {
      setError("Invalid Email");
    } else if (newValue.trim() === "") {
      setError("Field can't be empty");
    } else setError("");
  };
  const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setMessage(newValue);
    if (newValue.length > 10) {
      return setError("Message should be shorter then 10 digits");
    } else if (newValue.trim() === "") {
      setError("Field can't be empty");
    } else setError("");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name && email && message && !error) {
      alert("Form is submitted");
      setEmail("");
      setName("");
      setMessage("");
      setError("");
    } else {
      setError("Please fill out all fields correctly");
    }
  };
  return (
    <form className={s.formCotainer} onSubmit={handleSubmit}>
      <input
        value={name}
        name={"name"}
        placeholder="Enter your name"
        type="text"
        onChange={onChangeNameHandler}
      />
      <input
        value={email}
        name={"email"}
        type="text"
        placeholder="Enter your email"
        onChange={onChangeEmailHandler}
      />
      <input
        value={message}
        name={"message"}
        placeholder="Enter your message"
        type="text"
        onChange={onChangeMessageHandler}
      />
      {error && <p className={s.error}>{error}</p>}
      <button>Submit</button>
    </form>
  );
};
