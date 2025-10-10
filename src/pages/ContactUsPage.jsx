import styled from "styled-components";
import ContactUsForm from "../components/ContactUsForm";

const ContactUsPage = () => {
  return (
    <PageContainer>
      <Title>Contact Form</Title>
      <ContactUsForm />
    </PageContainer>
  );
};

export default ContactUsPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 2rem;
  font-size: 20px;
`;
