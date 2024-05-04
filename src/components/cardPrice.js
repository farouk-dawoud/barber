import styled from "styled-components";

function cardPrice({
  bg,
  colorText,
  colorTextTow,
  main,
  paragraph,
  price,
  serviceOne,
  serviceTow,
  serviceThree,
  serviceFour,
  serviceFive,
}) {
  return (
    <Section className="text-center py-10 px-8" bg={bg}>
      <div>
        <H4 className="mb-3 font-bold" color={colorText}>
          {main}
        </H4>
        <P className="text-sm capitalize mb-6">{paragraph}</P>
        <div class="bottom-sec">
          <H1
            className="text-4xl font-bold py-8"
            gradOne={colorText}
            gradTow={colorTextTow}
          >
            {price}
          </H1>
        </div>
        <ul>
          <Li>{serviceOne}</Li>
          <Li>{serviceTow}</Li>
          <Li>{serviceThree}</Li>
          <Li>{serviceFour}</Li>
          <Li>{serviceFive}</Li>
        </ul>
        <Button
          className="uppercase text-center cursor-pointer outline-none border-none font-medium text-xs px-14"
          gradOne={colorText}
          gradTow={colorTextTow}
        >
          bellen
        </Button>
      </div>
    </Section>
  );
}

export default cardPrice;

const Section = styled.section`
  background: ${(props) => props.bg || "#f9f9f9"};
  transition: all 0.3s;
  height: 550px;

  &:hover {
    background: #222;

    h1,
    h4 {
      background: linear-gradient(90deg, #1a4587 0%, #4073c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    button {
      background: linear-gradient(90deg, #1a4587 0%, #4073c0 100%);
    }
  }
`;

const H4 = styled.h4`
  color: ${(props) => props.color};
`;

const P = styled.p`
  color: ${(props) => props.theme.color.gray};
`;

const H1 = styled.h1`
  border-top: 1px dashed ${(props) => props.theme.color.blue};
  border-bottom: 1px dashed ${(props) => props.theme.color.blue};
  transition: all 0.4s ease 0s;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradOne || "#222"} 0%,
    ${(props) => props.gradTow || "#222"} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Li = styled.li`
  padding: 10px;
  color: ${(props) => props.theme.color.gray};
`;

const Button = styled.button`
  color: #fff;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradOne || "#222"} 0%,
    ${(props) => props.gradTow || "#222"} 100%
  );
  letter-spacing: 2px;
  line-height: 50px;
  border-radius: 50px;
  box-shadow: 0px 10px 30px rgba(187, 146, 54, 0.3);
`;
