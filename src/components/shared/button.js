import styled from "styled-components";

function ButtonMain({ text }) {
  return (
    <Button className="cursor-pointer text-center outline-none px-9 text-white text-sm font-medium uppercase">
      {text}
    </Button>
  );
}

export default ButtonMain;

const Button = styled.button`
  background: linear-gradient(to right, #ec3d43 0%, #dc1a20 51%, #ec3d43 100%);
  background-size: 200% auto;
  line-height: 50px;
  border-radius: 50px;
  border: 0;
  box-shadow: 0px 10px 30px rgba(187, 146, 54, 0.3);
  transition: all 0.4s ease 0s;
  letter-spacing: 2px;
`;
