import styled from "styled-components";

function cardServices({ srcImg, textImg }) {
  return (
    <Div className="relative mb-5 cursor-pointer">
      <Img src={srcImg} alt="" className="w-full" />
      <P className="absolute bottom-0 left-2/4 -translate-x-2/4">{textImg}</P>
    </Div>
  );
}

export default cardServices;

const Div = styled.div`
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }

  &:hover p {
    background-color: ${(props) => props.theme.color.blue};
  }
`;

const Img = styled.img`
  transition: all 0.3s;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: all 0.4s ease 0s;
`;
