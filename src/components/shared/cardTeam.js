import styled from "styled-components";

function cardTeam({ srcImg, name, position }) {
  return (
    <div className="overflow-hidden">
      <Figure className="overflow-hidden">
        <Img src={srcImg} className="w-full h-80" alt="" />
      </Figure>
      <div className="flex flex-col justify-center items-center mt-5">
        <H1 className="font-bold text-lg">{name}</H1>
        <P>{position}</P>
      </div>
    </div>
  );
}

export default cardTeam;

const H1 = styled.h1`
  color: ${(props) => props.theme.color.primary};
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;

const Figure = styled.figure`
  &:hover img {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  transition: all 0.3s;
`;
