import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";

const { default: styled } = require("styled-components");

function SendwichIcon({ clicked, onClick, color }) {
  return (
    <SendwichButton
      onClick={() => {
        onClick();
      }}
    >
      {clicked ? (
        <CloseIcon height={35} color={color} />
      ) : (
        <MenuIcon height={35} color={color} />
      )}
    </SendwichButton>
  );
}

export default SendwichIcon;

const SendwichButton = styled.button`
  visibility: hidden;
  display: none;

  @media screen and (max-width: 600px) {
    visibility: visible;
    display: block;

    border: none;
    background: transparent;

    margin-left: auto;
  }
`;
