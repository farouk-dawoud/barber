// start in styled component
import styled from "styled-components";
// start in transition
import { useTranslation } from "react-i18next";

function HeaderHome() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="container mx-auto md:px-44 px-2">
        <Div className="text-center md:w-80 w-full">
          <h4 className="text-lg mb-2 font-semibold">{t("headerHome")}</h4>
          <P className="mt-2 uppercase font-semibold">{t("online")}</P>
        </Div>
      </div>
    </Section>
  );
}

export default HeaderHome;

const Section = styled.section`
  background-image: url("/image/catalogue-bg.jpg");
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 120px 0;
`;

const Div = styled.div`
  background-color: #fff;
  padding: 60px 0;
`;

const P = styled.p`
  color: ${(props) => props.theme.color.primary};
  margin: 0;
  margin-bottom: 20px;
  font-size: 12px;
  letter-spacing: 2px;
`;
