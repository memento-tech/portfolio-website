import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ContactUsForm = () => {
  const [state, handleSubmit, reset] = useForm("meoevqvq");
  const [submitSuccessfull, setSubmitSuccessfull] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setSubmitSuccessfull(true);
      reset();

      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state.succeeded, reset]);

  const validateForm = () => {
    return name && email && message;
  };

  return (
    <>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          if (validateForm) {
            handleSubmit(e);
          }
        }}
      >
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          id="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <LabelStyled htmlFor="email">Email</LabelStyled>
        <InputStyled
          id="email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <LabelStyled htmlFor="message">Message</LabelStyled>

        <TextAreaStyled
          id="message"
          rows={5}
          maxLength={300}
          name="message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <SubmitButton
          type="submit"
          disabled={!validateForm() || state.submitting}
        >
          Send
        </SubmitButton>
      </FormStyled>

      <SuccessMessage>
        {submitSuccessfull &&
          "Thank you for contacting us! We will responde as soon as possible!"}
      </SuccessMessage>
    </>
  );
};

export default ContactUsForm;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 600px) {
    width: 80%;
  }

  background: transparent;
`;

const LabelStyled = styled.label`
  width: 100%;
  text-align: start;
  margin-top: 2rem;
  font-style: italic;
`;

const InputStyled = styled.input`
  width: 100%;
  color: white;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s ease;
  margin-top: 1rem;

  &:focus {
    border-color: rgba(36, 91, 150, 0.97);
  }
`;

const TextAreaStyled = styled.textarea`
  width: 100%;
  color: white;
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s ease;
  margin-top: 1rem;

  &:focus {
    border-color: rgba(36, 91, 150, 0.97);
  }

  margin-bottom: 2rem;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: ${({ disabled }) =>
    disabled ? "#555555ad" : "rgba(36, 91, 150, 0.97)"};
  color: white;
  border: none;
  border-radius: 4px;
  width: 8rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "#555555ad" : "rgba(36, 91, 150, 0.97)"};
  }
`;

const SuccessMessage = styled.p`
  height: 40px;
  margin-bottom: 2rem;
  max-width: 400px;
`;
