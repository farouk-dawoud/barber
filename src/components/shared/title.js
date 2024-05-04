import styled from "styled-components";

function title({ textMain, textPar }) {
  return (
    <div className="text-center">
      <H1 className="mb-4 text-4xl capitalize">{textMain}</H1>
      <P className="font-medium text-lg">{textPar}</P>
    </div>
  );
}

export default title;
const H1 = styled.h1`
  color: ${(props) => props.theme.color.blue};
`;
const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;
